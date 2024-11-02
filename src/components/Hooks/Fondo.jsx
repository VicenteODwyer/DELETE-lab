import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const COLORS = {
  background: '#d3d3d3',
  gradient: ['#9370DB', '#8A2BE2', 'transparent']
};

const SIZES = {
  topCorner: width * 0.5,
  bottomCorner: width * 0.6
};

const Fondo = () => {
  const rotateValue1 = new Animated.Value(0);
  const rotateValue2 = new Animated.Value(0);

  useEffect(() => {
    const createAnimation = (value) => {
      return Animated.loop(
        Animated.sequence([
          Animated.timing(value, {
            toValue: 1,
            duration: 10000,
            useNativeDriver: true
          }),
          Animated.timing(value, {
            toValue: 0,
            duration: 10000,
            useNativeDriver: true
          })
        ])
      );
    };

    createAnimation(rotateValue1).start();
    createAnimation(rotateValue2).start();
  }, []);

  const rotate1 = rotateValue1.interpolate({
    inputRange: [0, 1],
    outputRange: ['-10deg', '10deg']
  });

  const rotate2 = rotateValue2.interpolate({
    inputRange: [0, 1],
    outputRange: ['10deg', '-10deg']
  });

  return (
    <View style={styles.container} pointerEvents="none">
      <View style={styles.background} />
      <Animated.View style={[styles.esquinaSuperior, { transform: [{ rotate: rotate1 }] }]}>
        <LinearGradient
          colors={COLORS.gradient}
          style={[StyleSheet.absoluteFill]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          locations={[0, 0.5, 1]}
        />
      </Animated.View>
      <Animated.View style={[styles.esquinaInferior, { transform: [{ rotate: rotate2 }] }]}>
        <LinearGradient
          colors={COLORS.gradient}
          style={[StyleSheet.absoluteFill]}
          start={{ x: 1, y: 1 }}
          end={{ x: 0, y: 0 }}
          locations={[0, 0.5, 1]}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.background,
  },
  esquinaSuperior: {
    position: 'absolute',
    top: -SIZES.topCorner * 0.3,
    left: -SIZES.topCorner * 0.3,
    width: SIZES.topCorner,
    height: SIZES.topCorner,
    borderBottomRightRadius: SIZES.topCorner,
    overflow: 'hidden',
  },
  esquinaInferior: {
    position: 'absolute',
    bottom: -SIZES.bottomCorner * 0.3,
    right: -SIZES.bottomCorner * 0.3,
    width: SIZES.bottomCorner,
    height: SIZES.bottomCorner,
    borderTopLeftRadius: SIZES.bottomCorner,
    overflow: 'hidden',
  }
});

export default Fondo;
