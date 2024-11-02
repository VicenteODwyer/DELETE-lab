import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Footer = ({ scrollY }) => {
  const translateY = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [45, 0],
    extrapolate: 'clamp'
  });

  const opacity = scrollY.interpolate({
    inputRange: [0, 100, 200],
    outputRange: [0, 0.5, 1],
    extrapolate: 'clamp'
  });

  return (
    <Animated.View 
      style={[
        styles.footer,
        {
          transform: [{ translateY }],
          opacity
        }
      ]}
    >
      {/* Sección izquierda - Creadores */}
      <View style={styles.leftSection}>
        <Text style={styles.title}>Desarrollado por:</Text>
        <Text style={styles.text}>Vicente O'Dwyer, Darío Yáñez</Text>
        <Text style={styles.schoolName}>EPET N°20</Text>
      </View>

      {/* Sección derecha - Redes Sociales */}
      <View style={styles.rightSection}>
        <TouchableOpacity 
          style={styles.socialButton}
          onPress={() => Linking.openURL('https://epet20.edu.ar/')}
        >
          <Ionicons name="globe-outline" size={24} color="#fff" />
          <Text style={styles.socialText}>Website</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.socialButton}
          onPress={() => Linking.openURL('https://www.facebook.com/EPET20')}
        >
          <Ionicons name="logo-facebook" size={24} color="#fff" />
          <Text style={styles.socialText}>Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.socialButton}
          onPress={() => Linking.openURL('https://www.instagram.com/epet20educacion/')}
        >
          <Ionicons name="logo-instagram" size={24} color="#fff" />
          <Text style={styles.socialText}>Instagram</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.socialButton}
          onPress={() => Linking.openURL('https://x.com/epet20educacion')}
        >
          <Ionicons name="logo-twitter" size={24} color="#fff" />
          <Text style={styles.socialText}>Twitter</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    padding: 25,
    paddingBottom: 35,
  },
  leftSection: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 15,
  },
  rightSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 20,
  },
  title: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.9,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
    marginTop: 4,
  },
  schoolName: {
    fontSize: 18,
    color: '#9370DB',
    fontWeight: 'bold',
    marginTop: 4,
  },
  socialButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
    opacity: 0.8,
  }
});

export default Footer;