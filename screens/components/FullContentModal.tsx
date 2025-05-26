// components/FullContentModal.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
  Image,
  Dimensions,
  Share,
  Platform,
  FlatList,
} from 'react-native';
import { MaterialIcons, Feather, Ionicons } from '@expo/vector-icons';
import { Card } from '../types';

const { width, height } = Dimensions.get('window');

interface FullContentModalProps {
  visible: boolean;
  onClose: () => void;
  card: Card;
  isLiked: boolean;
  isSaved: boolean;
  commentCount: number;
  onLike: () => void;
  onSave: () => void;
  onShowComments: () => void;
}

export const FullContentModal: React.FC<FullContentModalProps> = ({
  visible,
  onClose,
  card,
  isLiked,
  isSaved,
  commentCount,
  onLike,
  onSave,
  onShowComments,
}) => {
  const handleShare = async () => {
    try {
      const shareOptions: { message: string; title: string; url?: string } = {
        message: card.description,
        title: 'Check out this content!'
      };

      if (Platform.OS === 'ios') {
        shareOptions.url = card.imageUrl;
      }

      const result = await Share.share(shareOptions as any);
      
      if (result.action === Share.sharedAction) {
        console.log('Shared successfully');
      }
    } catch (error) {
      console.error('Error sharing content:', error);
    }
  };

  const renderContentParagraphs = (text: string) => {
    if (!text) return null;
    return text.split('\n\n').map((paragraph, index) => (
      <Text key={index} style={styles.paragraphText}>
        {paragraph.trim()} 
      </Text>
    ));
  };

  const allImageUrls = [card.imageUrl, ...(card.imageUrls || [])].filter(url => !!url);
  const showCarousel = allImageUrls.length > 1;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.fullContentOverlay}>
        <View style={styles.fullContentContainer}>
          <View style={styles.fullContentHeader}>
            <TouchableOpacity 
              onPress={onClose}
              style={styles.closeButton}
            >
              <Ionicons name="close" size={28} color="#fff" />
            </TouchableOpacity>
          </View>
          
          <ScrollView style={styles.fullContentScroll} contentContainerStyle={styles.scrollContainer}>
            {showCarousel ? (
              <FlatList
                data={allImageUrls}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <Image 
                    source={{ uri: item }}
                    style={styles.carouselImage} 
                  />
                )}
                style={styles.carouselContainer}
              />
            ) : (
              <Image 
                source={{ uri: card.imageUrl }} 
                style={styles.fullContentImage}
              />
            )}
            
            <View style={styles.fullContentBody}>
              <Text style={styles.fullContentTitle}>
                {card.description}
              </Text>
              
              {renderContentParagraphs(card.fullContent)}
              
              <View style={styles.fullContentActions}>
                <TouchableOpacity 
                  style={styles.fullContentAction}
                  onPress={onLike}
                >
                  <Ionicons 
                    name={isLiked ? "heart" : "heart-outline"} 
                    size={24} 
                    color={isLiked ? "#ff3b30" : "#fff"} 
                  />
                  <Text style={styles.fullContentActionText}>
                    {card.likes + (isLiked ? 1 : 0)}
                  </Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={styles.fullContentAction}
                  onPress={onShowComments}
                >
                  <Ionicons name="chatbubble-outline" size={24} color="#fff" />
                  <Text style={styles.fullContentActionText}>
                    {commentCount}
                  </Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={styles.fullContentAction}
                  onPress={handleShare}
                >
                  <Feather name="share" size={24} color="#fff" />
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={styles.fullContentAction}
                  onPress={onSave}
                >
                  <MaterialIcons 
                    name={isSaved ? "bookmark" : "bookmark-border"} 
                    size={24} 
                    color={isSaved ? '#4CAF50' : "#fff"}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  fullContentOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
  },
  fullContentContainer: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 40 : 20,
  },
  fullContentHeader: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  closeButton: {
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
  },
  fullContentScroll: {
    flex: 1,
  },
  scrollContainer: {
    paddingBottom: 50,
  },
  fullContentImage: {
    width: width,
    height: height * 0.4,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  carouselContainer: {
    height: height * 0.4,
    marginBottom: 16,
  },
  carouselImage: {
    width: width,
    height: height * 0.4,
    resizeMode: 'cover',
  },
  fullContentBody: {
    paddingHorizontal: 20,
  },
  fullContentTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  paragraphText: {
    fontSize: 17,
    lineHeight: 26,
    color: '#e0e0e0',
    marginBottom: 18,
  },
  fullContentActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#444',
  },
  fullContentAction: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  fullContentActionText: {
    color: '#fff',
    fontSize: 14,
  },
});
