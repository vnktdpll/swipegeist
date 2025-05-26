import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions, FlatList } from 'react-native';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { toast } from 'sonner-native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 48) / 2;

const mockHistory = Array(6).fill(null).map((_, i) => ({
  id: `history_${i}`,
  image: `https://api.a0.dev/assets/image?text=history_content_${i}&aspect=1:1&seed=${i}`,
  title: `Content ${i + 1}`,
  views: Math.floor(Math.random() * 1000) + 100,
  timestamp: `${Math.floor(Math.random() * 24)}h ago`
}));

const mockLikes = Array(6).fill(null).map((_, i) => ({
  id: `like_${i}`,
  image: `https://api.a0.dev/assets/image?text=liked_content_${i}&aspect=1:1&seed=${i + 10}`,
  title: `Liked Content ${i + 1}`,
  likes: Math.floor(Math.random() * 1000) + 100,
  timestamp: `${Math.floor(Math.random() * 24)}h ago`
}));

const mockFolders = [
  {
    id: '1',
    name: 'Favorites',
    count: 12,
    preview: Array(4).fill(null).map((_, i) => 
      `https://api.a0.dev/assets/image?text=favorite_${i}&aspect=1:1&seed=${i + 20}`
    )
  },
  {
    id: '2',
    name: 'Watch Later',
    count: 8,
    preview: Array(4).fill(null).map((_, i) => 
      `https://api.a0.dev/assets/image?text=watch_later_${i}&aspect=1:1&seed=${i + 30}`
    )
  },
  {
    id: '3',
    name: 'Inspiration',
    count: 15,
    preview: Array(4).fill(null).map((_, i) => 
      `https://api.a0.dev/assets/image?text=inspiration_${i}&aspect=1:1&seed=${i + 40}`
    )
  }
];

const ProfileScreen = ({ navigation }) => {
  const [showImagePickerModal, setShowImagePickerModal] = useState(false);
  const [activeTab, setActiveTab] = useState('history');
  const [uploading, setUploading] = useState(false);
  
  const renderHeader = () => (
    <View style={styles.header}>
      <TouchableOpacity 
        onPress={() => navigation.goBack()} 
        style={styles.backButton}
        accessibilityLabel="Back to Home"
      >
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Profile</Text>
      <TouchableOpacity 
        onPress={() => navigation.navigate('Settings')} 
        style={styles.settingsButton}
      >
        <MaterialIcons name="settings" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );

  const renderProfileInfo = () => (
    <View style={styles.profileInfo}>
      <TouchableOpacity 
        onPress={() => setShowImagePickerModal(true)}
        disabled={uploading}
      >
        <View style={styles.avatarContainer}>
          <Image 
            source={{ 
              uri: 'https://api.a0.dev/assets/image?text=profile_avatar&aspect=1:1' 
            }}
            style={styles.avatar}
          />
          <View style={styles.avatarOverlay}>
            <MaterialIcons name="camera-alt" size={20} color="#fff" />
          </View>
        </View>
      </TouchableOpacity>
      <Text style={styles.username}>@username</Text>
      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>2.4K</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>1.8K</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>
    </View>
  );

  const renderTabs = () => (
    <View style={styles.tabs}>
      {['history', 'likes', 'lists'].map((tab) => (
        <TouchableOpacity
          key={tab}
          style={[styles.tab, activeTab === tab && styles.activeTab]}
          onPress={() => setActiveTab(tab)}
        >
          <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderCard = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={styles.cardGradient}
      >
        <Text style={styles.cardTitle}>{item.title}</Text>
        <View style={styles.cardMeta}>
          {item.views && (
            <View style={styles.metaItem}>
              <Feather name="eye" size={12} color="#fff" />
              <Text style={styles.metaText}>{item.views}</Text>
            </View>
          )}
          {item.likes && (
            <View style={styles.metaItem}>
              <Ionicons name="heart" size={12} color="#fff" />
              <Text style={styles.metaText}>{item.likes}</Text>
            </View>
          )}
          <Text style={styles.timestamp}>{item.timestamp}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );

  const renderFolder = ({ item }) => (
    <TouchableOpacity style={styles.folder}>
      <View style={styles.folderPreview}>
        {item.preview.map((uri, index) => (
          <Image
            key={index}
            source={{ uri }}
            style={[
              styles.folderPreviewImage,
              { top: index > 1 ? 20 : 0, left: index % 2 ? 20 : 0 }
            ]}
          />
        ))}
      </View>
      <Text style={styles.folderName}>{item.name}</Text>
      <Text style={styles.folderCount}>{item.count} items</Text>
    </TouchableOpacity>
  );

  const renderContent = () => {
    const commonProps = {
      showsVerticalScrollIndicator: false,
      keyExtractor: item => item.id,
    };

    const gridProps = {
      ...commonProps,
      numColumns: 2,
      columnWrapperStyle: styles.cardRow,
    };

    // Add a key based on activeTab to force re-render when switching tabs
    switch (activeTab) {
      case 'history':
        return (
          <FlatList
            key="history"
            {...gridProps}
            data={mockHistory}
            renderItem={renderCard}
          />
        );
      case 'likes':
        return (
          <FlatList
            key="likes"
            {...gridProps}
            data={mockLikes}
            renderItem={renderCard}
          />
        );
      case 'lists':
        return (
          <FlatList
            key="lists"
            {...commonProps}
            data={mockFolders}
            renderItem={renderFolder}
          />
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderProfileInfo()}
      {renderTabs()}
      <View style={styles.content}>
        {renderContent()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 16,
  },
  backButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  settingsButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
  profileInfo: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  avatarContainer: {
    position: 'relative',
    width: 80,
    height: 80,
    marginBottom: 12,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  avatarOverlay: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 16,
  },
  stats: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statItem: {
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
  statLabel: {
    fontSize: 14,
    color: '#999',
    marginTop: 4,
  },
  statDivider: {
    width: 1,
    height: 24,
    backgroundColor: '#333',
  },
  tabs: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#fff',
  },
  tabText: {
    fontSize: 16,
    color: '#999',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: '600',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  cardRow: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_WIDTH * 1.5,
    borderRadius: 12,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  cardGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 12,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 8,
  },
  cardMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: 12,
    color: '#fff',
  },
  timestamp: {
    fontSize: 12,
    color: '#999',
    marginLeft: 'auto',
  },
  folder: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  folderPreview: {
    width: 80,
    height: 80,
    position: 'relative',
    marginRight: 16,
  },
  folderPreviewImage: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 4,
  },
  folderName: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  folderCount: {
    fontSize: 14,
    color: '#999',
  },
});

export default ProfileScreen;

