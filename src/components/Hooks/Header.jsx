import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import HamburgerMenu from './HamburgerMenu';
import NotificationPopup from './Notification';
import Ionicons from '@expo/vector-icons/Ionicons';

const Header = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.headerContainer}>
      <View style={styles.hamburgerContainer}>
        <HamburgerMenu navigation={navigation} />
      </View>
      <View style={styles.notificationContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.notificationButton}><Ionicons name="notifications" size={24} color="black" /></Text>
        </TouchableOpacity>
        <NotificationPopup modalVisible={modalVisible} setModalVisible={setModalVisible} />
      </View>
    </View>
  );
};

const styles = {
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start', // Cambiado a flex-start para alinear en la parte superior
    padding: 10,
    position: 'absolute', // Añadido para posicionar en la parte superior
    top: 0, // Asegura que esté en la parte superior
    left: 0,
    right: 0,
    backgroundColor: 'transparent', // Mantener transparente
  },
  hamburgerContainer: {
    flex: 1, // Ocupa espacio en la izquierda
  },
  notificationContainer: {
    flex: 1, // Ocupa espacio en la derecha
    alignItems: 'flex-end', // Alinear a la derecha
  },
  notificationButton: {
    fontSize: 16,
    color: '#007BFF',
  },
};

export default Header;
