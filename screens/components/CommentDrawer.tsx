// components/CommentDrawer.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  FlatList,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { toast } from 'sonner-native';
import { safeHaptics } from '../utils/safeHaptics';
import { Comment } from '../types';

const { height } = Dimensions.get('window');

interface CommentDrawerProps {
  visible: boolean;
  onClose: () => void;
  comments: Comment[];
  currentCardIndex: number;
  setComments: React.Dispatch<React.SetStateAction<Comment[][]>>;
}

export const CommentDrawer: React.FC<CommentDrawerProps> = ({
  visible,
  onClose,
  comments,
  currentCardIndex,
  setComments,
}) => {
  const [commentText, setCommentText] = useState('');
  const [replyingTo, setReplyingTo] = useState<Comment | null>(null);
  const [likedComments, setLikedComments] = useState(new Set<number>());

  const handlePostComment = async () => {
    if (commentText.trim()) {
      await safeHaptics.impactAsync();
      
      const newComment: Comment = {
        id: Date.now(),
        user: {
          username: 'me',
          avatar: 'https://api.a0.dev/assets/image?text=my_avatar&aspect=1:1'
        },
        text: commentText.trim(),
        likes: 0,
        timestamp: 'Just now',
        replies: []
      };

      setComments(prevComments => {
        const newComments = [...prevComments];
        if (!newComments[currentCardIndex]) {
          newComments[currentCardIndex] = [];
        }
        
        if (replyingTo) {
          // Add reply to the parent comment
          const currentCardComments = [...newComments[currentCardIndex]];
          const parentCommentIndex = currentCardComments.findIndex(
            comment => comment.id === replyingTo.id
          );

          if (parentCommentIndex !== -1) {
            if (!currentCardComments[parentCommentIndex].replies) {
              currentCardComments[parentCommentIndex].replies = [];
            }
            currentCardComments[parentCommentIndex].replies = [
              newComment,
              ...(currentCardComments[parentCommentIndex].replies || [])
            ];
            newComments[currentCardIndex] = currentCardComments;
          }
        } else {
          // Add new top-level comment
          newComments[currentCardIndex] = [
            newComment,
            ...newComments[currentCardIndex]
          ];
        }
        return newComments;
      });

      setCommentText('');
      setReplyingTo(null);
      toast.success('Comment posted!');
    }
  };

  const renderComment = ({ item, level = 0 }: { item: Comment, level?: number }) => (
    <View style={[styles.commentContainer, { marginLeft: level * 20 }]}>
      <Image source={{ uri: item.user.avatar }} style={styles.commentAvatar} />
      <View style={styles.commentContent}>
        <View style={styles.commentHeader}>
          <Text style={styles.commentUsername}>{item.user.username}</Text>
          <Text style={styles.commentTimestamp}>{item.timestamp}</Text>
        </View>
        <Text style={styles.commentText}>{item.text}</Text>
        <View style={styles.commentActions}>
          <TouchableOpacity 
            onPress={() => {
              setLikedComments(prev => {
                const newSet = new Set(prev);
                if (newSet.has(item.id)) {
                  newSet.delete(item.id);
                } else {
                  newSet.add(item.id);
                }
                return newSet;
              });
            }}
            style={styles.commentAction}
          >
            <Ionicons 
              name={likedComments.has(item.id) ? "heart" : "heart-outline"} 
              size={16} 
              color={likedComments.has(item.id) ? "#ff3b30" : "#fff"} 
            />
            <Text style={styles.commentActionText}>
              {item.likes + (likedComments.has(item.id) ? 1 : 0)}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => setReplyingTo(item)}
            style={styles.commentAction}
          >
            <Text style={styles.commentActionText}>Reply</Text>
          </TouchableOpacity>
        </View>
        {item.replies?.map(reply => renderComment({ item: reply, level: level + 1 }))}
      </View>
    </View>
  );

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.commentDrawer}
      >
        <View style={styles.commentDrawerHeader}>
          <Text style={styles.commentDrawerTitle}>Comments</Text>
          <TouchableOpacity 
            onPress={onClose}
            style={styles.closeButton}
          >
            <Ionicons name="close" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        <FlatList
          data={comments}
          renderItem={renderComment}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.commentsList}
          ListEmptyComponent={
            <View style={styles.emptyCommentsContainer}>
              <Text style={styles.emptyCommentsText}>No comments yet. Be the first to comment!</Text>
            </View>
          }
        />

        <View style={styles.commentInputContainer}>
          {replyingTo && (
            <View style={styles.replyingToContainer}>
              <Text style={styles.replyingToText}>
                Replying to @{replyingTo.user.username}
              </Text>
              <TouchableOpacity onPress={() => setReplyingTo(null)}>
                <Ionicons name="close" size={16} color="#666" />
              </TouchableOpacity>
            </View>
          )}
          <View style={styles.commentInputWrapper}>
            <TextInput
              style={styles.commentInput}
              placeholder="Add a comment..."
              placeholderTextColor="#666"
              value={commentText}
              onChangeText={setCommentText}
              multiline
            />
            <TouchableOpacity 
              style={[
                styles.postButton,
                { opacity: commentText.trim().length > 0 ? 1 : 0.5 }
              ]}
              disabled={commentText.trim().length === 0}
              onPress={handlePostComment}
            >
              <Text style={styles.postButtonText}>Post</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  commentDrawer: {
    flex: 1,
    marginTop: 100,
    backgroundColor: '#121212',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  commentDrawerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  commentDrawerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  closeButton: {
    padding: 8,
  },
  commentsList: {
    padding: 16,
  },
  commentContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  commentAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  commentContent: {
    flex: 1,
  },
  commentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  commentUsername: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    marginRight: 8,
  },
  commentTimestamp: {
    color: '#666',
    fontSize: 12,
  },
  commentText: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 20,
  },
  commentActions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    gap: 16,
  },
  commentAction: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  commentActionText: {
    color: '#666',
    fontSize: 12,
  },
  commentInputContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  replyingToContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    marginBottom: 8,
  },
  replyingToText: {
    color: '#666',
    fontSize: 14,
  },
  commentInputWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 12,
  },
  commentInput: {
    flex: 1,
    minHeight: 40,
    maxHeight: 100,
    backgroundColor: '#1E1E1E',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    color: '#fff',
    fontSize: 16,
  },
  postButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#0A84FF',
    borderRadius: 16,
  },
  postButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  emptyCommentsContainer: {
    padding: 20,
    alignItems: 'center',
  },
  emptyCommentsText: {
    color: '#666',
    fontSize: 16,
    textAlign: 'center',
  },
});
