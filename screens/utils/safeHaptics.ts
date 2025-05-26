// utils/safeHaptics.ts
export const safeHaptics = {
  impactAsync: async () => {
    try {
      if (Platform.OS !== 'web') {
        const { impactAsync } = await import('expo-haptics');
        return impactAsync();
      }
    } catch (error) {
      // Silently fail on web or if haptics not available
    }
  }
};
