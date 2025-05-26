// components/CardSwiper.tsx
import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  PanResponder,
  TouchableOpacity,
  Dimensions,
  Image,
  Share,
  Platform,
} from 'react-native';
import { MaterialIcons, Feather, Ionicons } from '@expo/vector-icons';
import { Card, Comment } from '../types';
import { safeHaptics } from '../utils/safeHaptics';

const { width, height } = Dimensions.get('window');
const SWIPE_THRESHOLD = width * 0.25;
const SWIPE_UP_THRESHOLD = height * 0.1;

interface CardSwiperProps {
  cards: Card[];
  currentCardIndex: number;
  setCurrentCardIndex: (index: number) => void;
  likedCards: Set<number>;
  savedCards: Set<number>;
  comments: Comment[][];
  onLikeCard: (cardId: number) => void;
  onSaveCard: (cardId: number) => void;
  onShowComments: () => void;
  onShowFullContent: () => void;
  onSwipe: (direction: 'left' | 'right') => Promise<void>;
}

const defaultCard = {
  id: 0,
  imageUrl: 'https://via.placeholder.com/300x200?text=No+Image',
  description: 'Loading...',
  tags: [],
  views: '0',
  likes: 0,
  comments: [],
  fullContent: ''
};

// Helper function to truncate text
const truncateText = (text: string, wordLimit: number): string => {
  if (!text) return '';
  const words = text.split(' ');
  if (words.length <= wordLimit) {
    return text;
  }
  return words.slice(0, wordLimit).join(' ') + '...';
};

export const CardSwiper: React.FC<CardSwiperProps> = ({
  cards = [],
  currentCardIndex = 0,
  setCurrentCardIndex,
  likedCards = new Set(),
  savedCards = new Set(),
  comments = [],
  onLikeCard,
  onSaveCard,
  onShowComments,
  onShowFullContent,
  onSwipe,
}) => {
  const position = useRef(new Animated.ValueXY()).current;
  const [isSwipingUp, setIsSwipingUp] = useState(false);
  const [isSwiping, setIsSwiping] = useState(false);
  
  const rotate = position.x.interpolate({
    inputRange: [-width / 2, 0, width / 2],
    outputRange: ['-10deg', '0deg', '10deg'],
    extrapolate: 'clamp',
  });
  
  const nextCardScale = position.x.interpolate({
    inputRange: [-width / 2, 0, width / 2],
    outputRange: [1, 0.95, 1],
    extrapolate: 'clamp',
  });

  const leftIndicatorOpacity = position.x.interpolate({
    inputRange: [-width / 2, 0, width / 2],
    outputRange: [1, 0, 0],
    extrapolate: 'clamp',
  });

  const rightIndicatorOpacity = position.x.interpolate({
    inputRange: [-width / 2, 0, width / 2],
    outputRange: [0, 0, 1],
    extrapolate: 'clamp',
  });
  
  const swipeUpIndicatorOpacity = position.y.interpolate({
    inputRange: [-SWIPE_UP_THRESHOLD, -SWIPE_UP_THRESHOLD/2, 0],
    outputRange: [1, 0.5, 0],
    extrapolate: 'clamp',
  });
  
  const nextCardOpacity = position.y.interpolate({
    inputRange: [-SWIPE_UP_THRESHOLD/4, 0],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });
  
  const completeSwipe = async (direction: 'left' | 'right' | 'up') => {
    if (direction === 'up') {
      position.setValue({ x: 0, y: 0 });
      safeHaptics.impactAsync();
      onShowFullContent();
      setIsSwipingUp(false);
      return;
    }
    
    const x = direction === 'right' ? width * 1.5 : -width * 1.5;
    
    Animated.timing(position, {
      toValue: { x, y: 0 },
      duration: 250,
      useNativeDriver: false,
    }).start(async () => {
      safeHaptics.impactAsync();
      setIsSwiping(true);
      try {
        await onSwipe(direction);
        setCurrentCardIndex(currentCardIndex + 1);
      } catch (error) {
        console.error('Error handling swipe:', error);
      } finally {
        setIsSwiping(false);
        position.setValue({ x: 0, y: 0 });
      }
    });
  };

  const resetPosition = () => {
    Animated.spring(position, {
      toValue: { x: 0, y: 0 },
      friction: 5,
      useNativeDriver: false,
    }).start(() => {
      setIsSwipingUp(false);
    });
  };
  
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => !isSwiping,
      onPanResponderMove: (_, gesture) => {
        if (isSwiping) return;
        
        if (Math.abs(gesture.dy) > Math.abs(gesture.dx) && gesture.dy < 0) {
          position.setValue({ x: 0, y: gesture.dy });
          if (!isSwipingUp && gesture.dy < -SWIPE_UP_THRESHOLD / 2) {
            setIsSwipingUp(true);
          }
        } else {
          position.setValue({ x: gesture.dx, y: 0 });
        }
      },
      onPanResponderRelease: (_, gesture) => {
        if (isSwiping) return;
        
        if (gesture.dy < -SWIPE_UP_THRESHOLD) {
          completeSwipe('up');
        } else if (Math.abs(gesture.dx) > SWIPE_THRESHOLD) {
          const direction = gesture.dx > 0 ? 'right' : 'left';
          completeSwipe(direction);
        } else {
          resetPosition();
        }
      },
    })
  ).current;
  
  const handleShare = async (card: Card) => {
    try {
      const shareOptions = {
        message: card.description,
        title: 'Check out this Wikipedia article!'
      };

      const result = await Share.share(shareOptions);
      
      if (result.action === Share.sharedAction) {
        console.log('Shared successfully');
      }
    } catch (error) {
      console.error('Error sharing content:', error);
    }
  };

  const currentCard = cards[currentCardIndex] || defaultCard;
  const nextCard = cards[(currentCardIndex + 1) % Math.max(1, cards.length)] || defaultCard;

  if (!currentCard || !nextCard) {
    return (
      <View style={styles.emptyState}>
        <Text style={styles.emptyStateText}>No cards available</Text>
      </View>
    );
  }

  const cardStyle = {
    transform: [
      { translateX: position.x },
      { translateY: position.y },
      { rotate },
    ],
  };

  return (
    <>
      <Animated.View 
        style={[
          styles.swipeIndicator, 
          styles.leftSwipeIndicator,
          { opacity: leftIndicatorOpacity }
        ]}
      >
        <MaterialIcons name="arrow-back" size={24} color="#fff" />
        <Text style={styles.swipeIndicatorText}>Next Topic</Text>
      </Animated.View>

      <Animated.View 
        style={[
          styles.swipeIndicator, 
          styles.rightSwipeIndicator,
          { opacity: rightIndicatorOpacity }
        ]}
      >
        <Text style={styles.swipeIndicatorText}>Dive Deeper</Text>
        <MaterialIcons name="arrow-forward" size={24} color="#fff" />
      </Animated.View>
      
      <Animated.View 
        style={[
          styles.swipeIndicator, 
          styles.swipeUpIndicator,
          { opacity: swipeUpIndicatorOpacity }
        ]}
      >
        <Text style={styles.swipeIndicatorText}>View Full Content</Text>
        <MaterialIcons name="keyboard-arrow-up" size={24} color="#fff" />
      </Animated.View>

      {cards.length > 0 && (
        <>
          <Animated.View 
            style={[
              styles.card, 
              { 
                transform: [{ scale: nextCardScale }],
                opacity: nextCardOpacity 
              }
            ]}
          >
            <Image
              source={{ uri: nextCard.imageUrl }}
              style={styles.cardImage}
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{nextCard.description}</Text>
              <Text style={styles.cardDescription}>
                {truncateText(nextCard.fullContent, 50)}
              </Text>
            </View>
          </Animated.View>

          <Animated.View
            style={[styles.card, cardStyle]}
            {...panResponder.panHandlers}
          >
            <Image
              source={{ uri: currentCard.imageUrl }}
              style={styles.cardImage}
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{currentCard.description}</Text>
              <Text style={styles.cardDescription}>
                {truncateText(currentCard.fullContent, 50)}
              </Text>
              <View style={styles.cardActions}>
                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={() => onLikeCard(currentCard.id)}
                >
                  <MaterialIcons
                    name={likedCards.has(currentCard.id) ? 'favorite' : 'favorite-border'}
                    size={24}
                    color={likedCards.has(currentCard.id) ? '#ff4444' : '#fff'}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={() => onSaveCard(currentCard.id)}
                >
                  <MaterialIcons
                    name={savedCards.has(currentCard.id) ? 'bookmark' : 'bookmark-border'}
                    size={24}
                    color={savedCards.has(currentCard.id) ? '#4CAF50' : '#fff'}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={() => handleShare(currentCard)}
                >
                  <Feather name="share-2" size={24} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={onShowComments}
                >
                  <Ionicons name="chatbubble-outline" size={24} color="#fff" />
                  <Text style={styles.commentCount}>
                    {comments[currentCardIndex]?.length || 0}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Animated.View>
        </>
      )}

      {cards.length === 0 && (
        <View style={styles.emptyState}>
          <Text style={styles.emptyStateText}>No articles available</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width * 0.95,
    height: height * 0.75,
    position: 'absolute',
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#1a1a1a',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  cardGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '40%',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  cardContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardDescription: {
    color: '#e0e0e0',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 8,
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  actionButton: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.1)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentCount: {
    color: '#fff',
    marginLeft: 5,
    fontSize: 12,
  },
  swipeIndicator: {
    position: 'absolute',
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.7)',
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
  },
  leftSwipeIndicator: {
    left: 20,
    top: height * 0.4,
  },
  rightSwipeIndicator: {
    right: 20,
    top: height * 0.4,
  },
  swipeUpIndicator: {
    bottom: 20,
    left: width * 0.5 - 100,
  },
  swipeIndicatorText: {
    color: '#fff',
    marginHorizontal: 5,
    fontSize: 14,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyStateText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});
