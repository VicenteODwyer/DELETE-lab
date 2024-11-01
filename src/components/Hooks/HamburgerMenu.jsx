import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { height, width } = Dimensions.get('window');

const HamburgerMenu = ({navigation}) => {
  const [isOpen, setIsOpen] = useState(false);
  const slideAnim = useRef(new Animated.Value(-width)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: isOpen ? -width : 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: isOpen ? 0 : 0.5,
        duration: 300,
        useNativeDriver: true,
      })
    ]).start();
  };

  const handleNavigation = (route) => {
    navigation.navigate(route);
    toggleMenu(); // Cerrar el menú después de navegar
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
        <Feather name="menu" size={24} color="black" />
      </TouchableOpacity>

      {isOpen && (
        <>
          <Animated.View 
            style={[styles.overlay, { opacity: fadeAnim }]}
            onTouchStart={toggleMenu}
          />
          <Animated.View 
            style={[styles.menu, { transform: [{ translateX: slideAnim }] }]}
          >
            <View style={styles.menuHeader}>
              <Text style={styles.menuTitle}>Menú</Text>
              <TouchableOpacity onPress={toggleMenu}>
                <Feather name="x" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity 
              style={styles.menuItem}
              onPress={() => handleNavigation("Inicio")}
            >
              <Text style={styles.menuText}>Inicio</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.menuItem}
              onPress={() => handleNavigation("DatosAlumno")}
            >
              <Text style={styles.menuText}>Datos del Alumno</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.menuItem}
              onPress={() => handleNavigation("Horario")}
            >
              <Text style={styles.menuText}>Horario Escolar</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.menuItem}
              onPress={() => navigation.navigate("Comunicado")}
            >
              <Text style={styles.menuText}>Comunicado</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.menuItem}
             
            >
              <Text style={styles.menuText}>Notas</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.menuItem}

            >
              <Text style={styles.menuText}>Entrada y retiro</Text>
            </TouchableOpacity>
          </Animated.View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuButton: {
    position: 'absolute',
    top: 10,
    left: 20, // Botón en el lado izquierdo
    zIndex: 3,
    padding: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
    zIndex: 1,
  },
  menu: {
    position: 'absolute',
    top: 20,
    left: 0,
    width: width * 0.3, // 70% del ancho de la pantalla
    height: height * 0.65, // Usando la altura de la pantalla
    backgroundColor: 'white',
    paddingTop: 50,
    paddingHorizontal: 20,
    zIndex: 2,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  menuHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuText: {
    fontSize: 16,
    color: '#333',
  },
});

export default HamburgerMenu;
