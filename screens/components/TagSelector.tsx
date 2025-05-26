// components/TagSelector.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
  Dimensions,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

interface TagSelectorProps {
  currentTag: string;
  setCurrentTag: (tag: string) => void;
  showTagMenu: boolean;
  setShowTagMenu: (show: boolean) => void;
  tags: string[];
}

export const TagSelector: React.FC<TagSelectorProps> = ({
  currentTag,
  setCurrentTag,
  showTagMenu,
  setShowTagMenu,
  tags,
}) => {
  return (
    <>
      <TouchableOpacity 
        onPress={() => setShowTagMenu(!showTagMenu)} 
        style={styles.tagSelector}
      >
        <Text style={styles.tagText}>{currentTag}</Text>
        <MaterialIcons name="arrow-drop-down" size={24} color="#fff" />
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={showTagMenu}
        onRequestClose={() => setShowTagMenu(false)}
        animationType="fade"
      >
        <TouchableOpacity 
          style={styles.tagMenuOverlay}
          activeOpacity={1}
          onPress={() => setShowTagMenu(false)}
        >
          <ScrollView style={styles.tagMenu} showsVerticalScrollIndicator={false}>
            {tags.map((tag) => (
              <TouchableOpacity
                key={tag}
                style={styles.tagMenuItem}
                onPress={() => {
                  setCurrentTag(tag);
                  setShowTagMenu(false);
                }}
              >
                <Text style={styles.tagMenuItemText}>{tag}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  tagSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    height: 40,
  },
  tagText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 4,
  },
  tagMenuOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagMenu: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    width: width * 0.8,
    maxHeight: 320, // Height of 5 items (64px each)
  },
  tagMenuItem: {
    height: 64, // Fixed height for each item
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  tagMenuItemText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
  },
});
