import React, { useEffect, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Animated, { 
  withRepeat, 
  withTiming, 
  useAnimatedStyle,
  useSharedValue,
  withSequence
} from 'react-native-reanimated';

const LoadingScreen = () => {
  const rotation = useSharedValue(0);
  const scale = useSharedValue(1);

  const setupAnimations = useCallback(() => {
    rotation.value = withRepeat(
      withTiming(360, { duration: 2000 }),
      -1
    );

    scale.value = withRepeat(
      withSequence(
        withTiming(1.2, { duration: 1000 }),
        withTiming(1, { duration: 1000 })
      ),
      -1
    );
  }, [rotation, scale]);

  useEffect(() => {
    setupAnimations();
  }, [setupAnimations]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { rotate: `${rotation.value}deg` },
        { scale: scale.value }
      ],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={animatedStyle}>
        <MaterialCommunityIcons name="motion-play" size={80} color="#fff" />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingScreen;