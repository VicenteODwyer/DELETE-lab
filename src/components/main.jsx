import React, { useState } from "react"; // Agregar useState
import { Text, View, ScrollView, StyleSheet, Button, Modal } from "react-native"; // Importar Modal
import { LinearGradient } from 'expo-linear-gradient';
import Footer from './footer';
import NotebookCover from "./inicio";
import LoginForm from "./iniciar";

const Main = () => {
  const [modalVisible, setModalVisible] = useState(false); // Estado para el modal

  return (
    <LinearGradient
      colors={['#6b46c1', '#ec4899']}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.mainContent}>
          <Text style={styles.mainHeading}>Cuaderno Digital</Text>
          <Button onPress={() => setModalVisible(true)}>Iniciar Sesión</Button> {/* Abrir modal */}
        </View>
        <Footer/>
      </ScrollView>
      
      {/* Modal para LoginForm */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)} // Cerrar modal
      >
        <View style={styles.modalView}>
        <Button title="Cerrar" onPress={() => setModalVisible(false)} /> {/* Botón para cerrar */}
          <LoginForm />
        </View> 
      </Modal>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainHeading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  footer: {
    padding: 24,
  },
  footerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  creators: {
    marginBottom: 16,
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    marginBottom: 8,
  },
  creatorName: {
    color: 'white',
    marginBottom: 4,
  },
  socialMedia: {
    alignItems: 'flex-end',
  },
  socialIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 16,
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semi-transparente
  },
});

export default Main;