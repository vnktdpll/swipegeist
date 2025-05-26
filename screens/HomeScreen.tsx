// HomeScreen.tsx
import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { CardSwiper } from './components/CardSwiper';
import { TagSelector } from './components/TagSelector';
import { CommentDrawer } from './components/CommentDrawer';
import { SaveModal } from './components/SaveModal';
import { FullContentModal } from './components/FullContentModal';
import { safeHaptics } from './utils/safeHaptics';
import { Card, Comment } from './types';
import { getRandomArticle, getRelatedArticle } from './services/wikipediaService';

const { width, height } = Dimensions.get('window');

// Wikipedia categories that are broad and well-populated
const WIKIPEDIA_CATEGORIES = [
  'Science',
  'Technology',
  'History',
  'Geography',
  'Arts',
  'Sports',
  'Entertainment',
  'Politics',
  'Business',
  'Health',
  'Education',
  'Nature',
  'Culture',
  'Religion',
  'Philosophy'
];

type HomeScreenProps = {};

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const navigation = useNavigation();
  const [currentTag, setCurrentTag] = useState(WIKIPEDIA_CATEGORIES[0]);
  const [showTagMenu, setShowTagMenu] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showCommentDrawer, setShowCommentDrawer] = useState(false);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showFullContent, setShowFullContent] = useState(false);
  const [likedCards, setLikedCards] = useState(new Set<number>());
  const [savedCards, setSavedCards] = useState(new Set<number>());
  const [cards, setCards] = useState<Card[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState<Comment[][]>([]);

  const loadInitialCard = useCallback(async () => {
    try {
      setIsLoading(true);
      const newCard = await getRandomArticle(currentTag);
      if (newCard) {
        setCards([newCard]);
        setComments([[]]);
        setCurrentCardIndex(0);
      }
    } catch (error) {
      console.error('Error loading initial card:', error);
      // Show error state
      setCards([{
        id: Date.now(),
        imageUrl: 'https://via.placeholder.com/300x200?text=Error+Loading',
        description: 'Error loading articles',
        tags: ['Error'],
        views: '0',
        likes: 0,
        comments: [],
        fullContent: 'There was an error loading articles. Please try again.'
      }]);
      setComments([[]]);
      setCurrentCardIndex(0);
    } finally {
      setIsLoading(false);
    }
  }, [currentTag]);

  useEffect(() => {
    loadInitialCard();
  }, [loadInitialCard]);

  const handleSwipe = async (direction: 'left' | 'right', tag: string) => {
    try {
      setIsLoading(true);
      const currentCard = cards[currentCardIndex];
      
      if (!currentCard) {
        console.error('No current card available');
        // Optionally try loading initial card again or show error
        loadInitialCard(); // Attempt to recover
        return;
      }

      // Pass the tag to getRelatedArticle
      const newCard = await getRelatedArticle(currentCard.id, direction, tag); 
      
      if (!newCard) {
        console.error('Failed to fetch new card after retries.');
        // Handle failure - maybe show a message, or try fallback
        // For now, just return to prevent index increment on failure
        setIsLoading(false); // Ensure loading state is reset
        return; 
      }

      setCards(prevCards => [...prevCards, newCard]);
      setComments(prevComments => [...prevComments, []]);
      setCurrentCardIndex(prevIndex => prevIndex + 1);
    } catch (error) {
      console.error('Error handling swipe:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLikeCard = (cardId: number) => {
    setLikedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  };
  
  const handleSaveCard = async (cardId: number) => {
    if (savedCards.has(cardId)) {
      await safeHaptics.impactAsync();
      setSavedCards(prev => {
        const newSet = new Set(prev);
        newSet.delete(cardId);
        return newSet;
      });
    } else {
      await safeHaptics.impactAsync();
      setShowSaveModal(true);
    }
  };

  const handleSaveToList = (listId: string, listName: string) => {
    setSavedCards(prev => {
      const newSet = new Set(prev);
      newSet.add(cards[currentCardIndex].id);
      return newSet;
    });
    setShowSaveModal(false);
  };

  const currentCard = cards[currentCardIndex];

  if (isLoading && cards.length === 0) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TagSelector 
          currentTag={currentTag}
          setCurrentTag={setCurrentTag}
          showTagMenu={showTagMenu}
          setShowTagMenu={setShowTagMenu}
          tags={WIKIPEDIA_CATEGORIES}
        />

        <TouchableOpacity 
          onPress={() => navigation.navigate('Profile' as never)}
          style={styles.profileButton}
        >
          <MaterialIcons name="person" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.cardContainer}>
        <View style={styles.backgroundFixed} />
        
        {isLoading ? (
          <View style={styles.loadingOverlay}>
            <ActivityIndicator size="large" color="#fff" />
          </View>
        ) : (
          <CardSwiper
            cards={cards}
            currentCardIndex={currentCardIndex}
            setCurrentCardIndex={setCurrentCardIndex}
            likedCards={likedCards}
            savedCards={savedCards}
            comments={comments}
            onLikeCard={handleLikeCard}
            onSaveCard={handleSaveCard}
            onShowComments={() => setShowCommentDrawer(true)}
            onShowFullContent={() => setShowFullContent(true)}
            onSwipe={(direction) => handleSwipe(direction, currentTag)}
          />
        )}
      </View>

      <CommentDrawer
        visible={showCommentDrawer}
        onClose={() => setShowCommentDrawer(false)}
        comments={comments[currentCardIndex] || []}
        currentCardIndex={currentCardIndex}
        setComments={setComments}
      />

      <SaveModal
        visible={showSaveModal}
        onClose={() => setShowSaveModal(false)}
        lists={[]}
        onSaveToList={handleSaveToList}
      />

      {currentCard && (
        <FullContentModal
          visible={showFullContent}
          onClose={() => setShowFullContent(false)}
          card={currentCard}
          isLiked={likedCards.has(currentCard.id)}
          isSaved={savedCards.has(currentCard.id)}
          commentCount={comments[currentCardIndex]?.length || 0}
          onLike={() => handleLikeCard(currentCard.id)}
          onSave={() => handleSaveCard(currentCard.id)}
          onShowComments={() => {
            setShowFullContent(false);
            setShowCommentDrawer(true);
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 16,
  },
  profileButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  cardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor: '#000',
  },
  backgroundFixed: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000000',
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default HomeScreen;
