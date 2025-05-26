import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { toast } from 'sonner-native';

// Create a safe haptics wrapper
const Haptics = {
  impactAsync: async () => {
    try {
      if (Platform.OS !== 'web') {
        const { impactAsync } = await import('expo-haptics');
        return impactAsync();
      }
    } catch (error) {
      // Silently fail on web or if haptics not available
    }
  },
  notificationAsync: async (type) => {
    try {
      if (Platform.OS !== 'web') {
        const { notificationAsync } = await import('expo-haptics');
        return notificationAsync(type);
      }
    } catch (error) {
      // Silently fail on web or if haptics not available
    }
  }
};

const SettingsScreen = ({ navigation }) => {
  const handleSignOut = async () => {
    await Haptics.impactAsync();
    try {
      // Mock sign out delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Signed out successfully');
    } catch (error) {
      toast.error('Error signing out');
    }
  };  
  
  const handleDeleteAccount = async () => {
    await Haptics.impactAsync();
    Alert.alert(
      'Delete Account',
      'Are you sure you want to delete your account? This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              // Mock delete account
              await new Promise(resolve => setTimeout(resolve, 1000));
              await Haptics.notificationAsync();
              toast.success('Account deleted successfully');
            } catch (error) {
              toast.error('Error deleting account');
            }
          },
        },
      ]
    );
  };

  const renderSettingsItem = (icon, title, onPress, destructive = false) => {
    const handlePress = async () => {
      await Haptics.impactAsync();
      onPress();
    };
    
    return (
      <TouchableOpacity
        style={styles.settingsItem}
        onPress={handlePress}
      >
        <View style={styles.settingsItemLeft}>
          {icon}
          <Text style={[styles.settingsItemText, destructive && styles.destructiveText]}>
            {title}
          </Text>
        </View>
        <MaterialIcons name="chevron-right" size={24} color="#666" />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={async () => {
            await Haptics.impactAsync();
            navigation.goBack();
          }}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={{ width: 40 }} /> {/* Placeholder for alignment */}
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          {renderSettingsItem(
            <MaterialIcons name="person-outline" size={24} color="#fff" />,
            'Edit Profile',
            () => navigation.navigate('Profile')
          )}
          {renderSettingsItem(
            <MaterialIcons name="email" size={24} color="#fff" />,
            'Email Notifications',
            async () => {
              await Haptics.impactAsync();
              toast.info('Coming soon!');
            }
          )}
          {renderSettingsItem(
            <MaterialIcons name="security" size={24} color="#fff" />,
            'Privacy & Security',
            async () => {
              await Haptics.impactAsync();
              toast.info('Coming soon!');
            }
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>App</Text>
          {renderSettingsItem(
            <MaterialIcons name="help-outline" size={24} color="#fff" />,
            'Help & Support',
            async () => {
              await Haptics.impactAsync();
              toast.info('Coming soon!');
            }
          )}
          {renderSettingsItem(
            <MaterialIcons name="info-outline" size={24} color="#fff" />,
            'About',
            async () => {
              await Haptics.impactAsync();
              toast.info('Version 1.0.0');
            }
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Session</Text>
          {renderSettingsItem(
            <MaterialIcons name="logout" size={24} color="#fff" />,
            'Sign Out',
            handleSignOut
          )}
          {renderSettingsItem(
            <MaterialIcons name="delete-outline" size={24} color="#ff3b30" />,
            'Delete Account',
            handleDeleteAccount,
            true
          )}
        </View>
      </ScrollView>
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
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
  content: {
    flex: 1,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginLeft: 16,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#1E1E1E',
    marginBottom: 1,
  },
  settingsItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  settingsItemText: {
    fontSize: 16,
    color: '#fff',
  },
  destructiveText: {
    color: '#ff3b30',
  },
});

export default SettingsScreen;
