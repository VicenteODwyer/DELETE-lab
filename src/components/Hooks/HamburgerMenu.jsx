import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Dimensions, Animated, Platform } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { height, width } = Dimensions.get('window');

const MenuItem = ({ icon, text, onPress }) => {
  // Animaciones nativas
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const bounceAnim = useRef(new Animated.Value(0)).current;
  
  // Animaciones JS (no nativas)
  const glowAnim = useRef(new Animated.Value(0)).current;
  const backgroundAnim = useRef(new Animated.Value(0)).current;
  const iconBackgroundAnim = useRef(new Animated.Value(0)).current;

  const handlePressIn = () => {
    // Animaciones nativas
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 1.2,
        useNativeDriver: true,
        friction: 3,
        tension: 40
      }),
      Animated.sequence([
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true
        }),
        Animated.timing(rotateAnim, {
          toValue: -1,
          duration: 100,
          useNativeDriver: true
        }),
        Animated.timing(rotateAnim, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true
        })
      ]),
      Animated.sequence([
        Animated.timing(bounceAnim, {
          toValue: -10,
          duration: 100,
          useNativeDriver: true
        }),
        Animated.timing(bounceAnim, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true
        })
      ])
    ]).start();

    // Animaciones JS separadas
    Animated.parallel([
      Animated.timing(glowAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false
      }),
      Animated.timing(backgroundAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false
      }),
      Animated.timing(iconBackgroundAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false
      })
    ]).start();
  };

  const handlePressOut = () => {
    // Animaciones nativas
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
      friction: 7,
      tension: 40
    }).start();

    // Animaciones JS separadas
    Animated.parallel([
      Animated.timing(glowAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false
      }),
      Animated.timing(backgroundAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false
      }),
      Animated.timing(iconBackgroundAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false
      })
    ]).start();
  };

  const spin = rotateAnim.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: ['-5deg', '0deg', '5deg']
  });

  return (
    <TouchableOpacity 
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={styles.menuItem}
    >
      <LinearGradient
        colors={['rgba(147, 112, 219, 0.1)', 'rgba(147, 112, 219, 0.05)']}
        style={styles.menuItemGradient}
      >
        <Animated.View style={[
          styles.menuItemContent,
          {
            transform: [
              { scale: scaleAnim },
              { rotate: spin },
              { translateY: bounceAnim }
            ]
          }
        ]}>
          <View style={styles.iconContainer}>
            <Animated.View style={{
              backgroundColor: iconBackgroundAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ['rgba(147, 112, 219, 0.1)', 'rgba(147, 112, 219, 0.3)']
              }),
              borderRadius: 12,
              padding: 8,
            }}>
              <Ionicons 
                name={icon} 
                size={24} 
                color="#9370DB"
                style={styles.menuIcon} 
              />
            </Animated.View>
          </View>
          <Animated.Text style={[
            styles.menuText,
            {
              color: glowAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ['#333', '#9370DB']
              })
            }
          ]}>{text}</Animated.Text>
        </Animated.View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const HamburgerMenu = ({navigation}) => {
  const [isOpen, setIsOpen] = useState(false);
  const slideAnim = useRef(new Animated.Value(-width * 0.35)).current;

  const openMenu = () => {
    setIsOpen(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeMenu = () => {
    Animated.timing(slideAnim, {
      toValue: -width * 0.35,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setIsOpen(false));
  };

  // Ajustar el ancho del menú según el tamaño de pantalla
  const menuWidth = width < 768 ? width * 0.75 : width * 0.35; // Más ancho en móviles

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={openMenu}
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
        onRequestClose={closeMenu}
      >
        <TouchableOpacity 
          style={styles.overlay}
          activeOpacity={1}
          onPress={closeMenu}
        >
          <Animated.View 
            style={[
              styles.menuContainer,
              {
                transform: [{ translateX: slideAnim }],
                width: menuWidth // Usar menuWidth
              }
            ]}
          >
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
                    onPress={closeMenu} 
                    style={styles.closeButton}
                  >
                    <Feather name="x" size={24} color="white" />
                  </TouchableOpacity>
                </LinearGradient>

                <View style={styles.menuItems}>
                  <MenuItem 
                    icon="home-outline" 
                    text="Inicio" 
                    onPress={() => {
                      navigation.navigate("Inicio");
                      closeMenu();
                    }}
                  />
                  <MenuItem 
                    icon="person-outline" 
                    text="Datos del Alumno" 
                    onPress={() => {
                      navigation.navigate("DatosAlumno");
                      closeMenu();
                    }}
                  />
                  <MenuItem 
                    icon="time-outline" 
                    text="Horario Escolar" 
                    onPress={() => {
                      navigation.navigate("Horario");
                      closeMenu();
                    }}
                  />
                  <MenuItem 
                    icon="chatbubble-outline" 
                    text="Comunicado" 
                    onPress={() => {
                      navigation.navigate("Comunicado");
                      closeMenu();
                    }}
                  />
                  <MenuItem 
                    icon="school-outline" 
                    text="Notas" 
                    onPress={() => {
                      navigation.navigate("Notas");
                      closeMenu();
                    }}
                  />
                  <MenuItem 
                    icon="enter-outline" 
                    text="Entrada y retiro" 
                    onPress={() => {
                      navigation.navigate("Retiro");
                      closeMenu();
                    }}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </Animated.View>
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
    height: height,
   
  },
  menu: {
    height: height,
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
    paddingTop: Platform.OS === 'ios' ? 60 : 40, // Ajuste para diferentes plataformas
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
    fontSize: width < 768 ? 18 : 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  closeButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 40 : 20,
    right: 20,
    padding: 10,
    zIndex: 1,
  },
  menuItems: {
    paddingTop: 20,
    paddingHorizontal: width < 768 ? 10 : 20,
  },
  menuItem: {
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 15,
    overflow: 'hidden',
  },
  menuItemGradient: {
    borderRadius: 15,
    padding: 2,
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: width < 768 ? 15 : 10, // Más padding en móviles
    backgroundColor: 'white',
    borderRadius: 13,
    shadowColor: "#9370DB",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconContainer: {
    marginRight: width < 768 ? 10 : 15,
  },
  menuIcon: {
    fontSize: width < 768 ? 20 : 24, // Iconos más pequeños en móviles
  },
  menuText: {
    fontSize: width < 768 ? 14 : 16, // Texto más pequeño en móviles
    fontWeight: '600',
    letterSpacing: 0.5,
    flex: 1, // Permite que el texto se ajuste al espacio disponible
  },
});

export default HamburgerMenu;
