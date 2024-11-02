import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import HamburgerMenu from './HamburgerMenu';
import NotificationPopup from './Notification';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const Header = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerContent}>
        <TouchableOpacity style={styles.leftContainer}>
          <HamburgerMenu navigation={navigation} />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.rightContainer}
          onPress={() => setModalVisible(true)}
          activeOpacity={0.7}
        >
          <LinearGradient
            colors={['#9370DB', '#8A2BE2']}
            style={styles.gradientButton}
          >
            <Ionicons name="notifications" size={24} color="white" />
            <View style={styles.notificationBadge}>
              <Text style={styles.badgeText}>2</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <NotificationPopup modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: 'transparent',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  leftContainer: {
    flex: 1,
    paddingLeft: 8,
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 8,
  },
  gradientButton: {
    padding: 10,
    borderRadius: 12,
    shadowColor: "#9370DB",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  notificationBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#FF4444',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default Header;
