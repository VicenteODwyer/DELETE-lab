import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Dimensions } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { height, width } = Dimensions.get('window');

const MenuItem = ({ icon, text, onPress }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <Ionicons name={icon} size={24} color="#9370DB" style={styles.menuIcon} />
    <Text style={styles.menuText}>{text}</Text>
  </TouchableOpacity>
);

const HamburgerMenu = ({navigation}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (route) => {
    navigation.navigate(route);
    setIsOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={() => setIsOpen(true)} 
        style={styles.menuButton}
        activeOpacity={0.7}
      >
        <LinearGradient
          colors={['#9370DB', '#8A2BE2']}
          style={styles.gradientButton}
        >
          <Feather name="menu" size={20} color="white" />
        </LinearGradient>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={isOpen}
        onRequestClose={() => setIsOpen(false)}
      >
        <TouchableOpacity 
          style={styles.overlay}
          activeOpacity={1}
          onPress={() => setIsOpen(false)}
        >
          <View style={styles.menuContainer}>
            <TouchableOpacity 
              activeOpacity={1} 
              onPress={(e) => {
                e.stopPropagation();
              }}
            >
              <View style={styles.menu}>
                <LinearGradient
                  colors={['#9370DB', '#8A2BE2']}
                  style={styles.menuHeader}
                >
                  <View style={styles.profileSection}>
                    <View style={styles.avatarContainer}>
                      <Ionicons name="person-circle" size={60} color="white" />
                    </View>
                    <Text style={styles.welcomeText}>¡Bienvenido!</Text>
                  </View>
                  <TouchableOpacity 
                    onPress={() => setIsOpen(false)} 
                    style={styles.closeButton}
                  >
                    <Feather name="x" size={24} color="white" />
                  </TouchableOpacity>
                </LinearGradient>

                <View style={styles.menuItems}>
                  <MenuItem 
                    icon="home-outline" 
                    text="Inicio" 
                    onPress={() => handleNavigation("Inicio")}
                  />
                  <MenuItem 
                    icon="person-outline" 
                    text="Datos del Alumno" 
                    onPress={() => handleNavigation("DatosAlumno")}
                  />
                  <MenuItem 
                    icon="time-outline" 
                    text="Horario Escolar" 
                    onPress={() => handleNavigation("Horario")}
                  />
                  <MenuItem 
                    icon="chatbubble-outline" 
                    text="Comunicado" 
                    onPress={() => handleNavigation("Comunicado")}
                  />
                  <MenuItem 
                    icon="school-outline" 
                    text="Notas" 
                    onPress={() => handleNavigation("Notas")}
                  />
                  <MenuItem 
                    icon="enter-outline" 
                    text="Entrada y retiro" 
                    onPress={() => handleNavigation("Retiro")}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuButton: {
    zIndex: 3,
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
    width: 40,
    height: 40,
  },
 
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menuContainer: {
    width: width * 0.35,
    height: height,
  },
  menu: {
    width: width * 0.35,
    height: height ,
    backgroundColor: 'white',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 0,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    overflow: 'hidden',
  },
  menuHeader: {
    padding: 20,
    paddingTop: 60,
    borderBottomRightRadius: 30,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarContainer: {
    marginBottom: 10,
  },
  welcomeText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 10,
  },
  menuItems: {
    paddingTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(147, 112, 219, 0.1)',
  },
  menuIcon: {
    marginRight: 15,
  },
  menuText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
});

export default HamburgerMenu;
