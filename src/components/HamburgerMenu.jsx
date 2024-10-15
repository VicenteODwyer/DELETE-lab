import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Linking } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Horario from './Horarios';

const HamburgerMenu = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  }

  const openLink = (url) => {
    Linking.openURL(url).catch(err => console.error("Error al abrir el enlace:", err));
  }

  const menuItems = [
    { title: 'Datos del Alumno', url: 'https://example.com/alumno' },
    { title: 'Horario Escolar', url: './Horario' },
    { title: 'Comunicado', url: 'https://example.com/comunicado' },
    { title: 'Notas', url: 'https://example.com/notas' },
    { title: 'Entrada y retiro en horas sin actividad', url: 'https://example.com/entrada' },
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleMenu}>
        <Text style={styles.hamburgerButton}><Feather name="menu" size={24} color="black" /></Text>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={isOpen}
        onRequestClose={toggleMenu}
      >
        <View style={styles.modal}>
          <View style={styles.menuContainer}>
            <View style={styles.header}>
              <Text>Menu</Text>
              <TouchableOpacity onPress={toggleMenu}>
                <Text style={styles.closeButton}>×</Text>
              </TouchableOpacity>
            </View>
            {menuItems.map((item, index) => (
              <TouchableOpacity key={index} onPress={() => openLink(item.url)}>
                <Text style={styles.menuItem}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    modal: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    menuContainer: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      width: '80%',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    closeButton: {
      fontSize: 24,
    },
    menuItem: {
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
    },
    hamburgerButton: {
      fontSize: 24,
      padding: 10,
    }
  });
  
export default HamburgerMenu;