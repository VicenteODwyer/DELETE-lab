import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const COLORS = {
  background: '#d3d3d3',
  gradient: ['#9370DB', '#a88bc7', 'transparent'],
  transparent: 'transparent'
};

const SIZES = {
  topCorner: width * 0.5,
  bottomCorner: width * 0.6
};

const Fondo = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={COLORS.gradient}
        style={styles.esquinaSuperior}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0, 0.5, 1]}
      />
      <LinearGradient
        colors={COLORS.gradient}
        style={styles.esquinaInferior}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
        locations={[0, 0.5, 1]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.background,
    zIndex: -1,
  },
  esquinaSuperior: {
    position: 'absolute',
    top: -SIZES.topCorner * 0.3,
    left: -SIZES.topCorner * 0.3,
    width: SIZES.topCorner,
    height: SIZES.topCorner,
    borderBottomRightRadius: SIZES.topCorner,
    transform: [{ rotate: '-10deg' }]
  },
  esquinaInferior: {
    position: 'absolute',
    bottom: -SIZES.bottomCorner * 0.3,
    right: -SIZES.bottomCorner * 0.3,
    width: SIZES.bottomCorner,
    height: SIZES.bottomCorner,
    borderTopLeftRadius: SIZES.bottomCorner,
    transform: [{ rotate: '-10deg' }]
  }
});

export default Fondo;
