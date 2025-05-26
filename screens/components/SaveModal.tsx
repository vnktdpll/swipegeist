// components/SaveModal.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  FlatList,
  TextInput,
  Dimensions,
  Platform,
} from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { toast } from 'sonner-native';
import { List } from '../types';

const { height } = Dimensions.get('window');

interface SaveModalProps {
  visible: boolean;
  onClose: () => void;
  lists: List[];
  onSaveToList: (listId: string, listName: string) => void;
}

export const SaveModal: React.FC<SaveModalProps> = ({
  visible,
  onClose,
  lists,
  onSaveToList,
}) => {
  const [newListName, setNewListName] = useState('');

  const handleCreateNewList = () => {
    if (newListName.trim()) {
      // Add new list logic here
      toast.success(`Created new list: ${newListName}`);
      setNewListName('');
      onClose();
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Save to</Text>
            <TouchableOpacity 
              onPress={onClose}
              style={styles.closeButton}
            >
              <Ionicons name="close" size={24} color="#fff" />
            </TouchableOpacity>
          </View>

          <FlatList
            data={lists}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity 
                style={styles.listItem}
                onPress={() => onSaveToList(item.id, item.name)}
              >
                <View style={styles.listItemLeft}>
                  <View style={styles.listItemImage}>
                    <MaterialIcons name="folder" size={24} color="#fff" />
                  </View>
                  <View>
                    <Text style={styles.listItemName}>{item.name}</Text>
                    <Text style={styles.listItemCount}>{item.count} items</Text>
                  </View>
                </View>
                <MaterialIcons name="chevron-right" size={24} color="#666" />
              </TouchableOpacity>
            )}
            ListFooterComponent={
              <View style={styles.createListContainer}>
                <TextInput
                  style={styles.createListInput}
                  placeholder="Create new list"
                  placeholderTextColor="#666"
                  value={newListName}
                  onChangeText={setNewListName}
                />
                <TouchableOpacity
                  style={[
                    styles.createListButton,
                    { opacity: newListName.trim() ? 1 : 0.5 }
                  ]}
                  onPress={handleCreateNewList}
                  disabled={!newListName.trim()}
                >
                  <Text style={styles.createListButtonText}>Create</Text>
                </TouchableOpacity>
              </View>
            }
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#1E1E1E',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: Platform.OS === 'ios' ? 40 : 20,
    maxHeight: height * 0.7,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  closeButton: {
    padding: 8,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  listItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  listItemImage: {
    width: 44,
    height: 44,
    borderRadius: 8,
    backgroundColor: '#2A2A2A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  listItemCount: {
    fontSize: 14,
    color: '#666',
  },
  createListContainer: {
    padding: 16,
  },
  createListInput: {
    backgroundColor: '#2A2A2A',
    borderRadius: 12,
    padding: 16,
    color: '#fff',
    fontSize: 16,
    marginBottom: 12,
  },
  createListButton: {
    backgroundColor: '#0A84FF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  createListButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
