import React, { useState } from "react";
import { Text, View, ScrollView, StyleSheet, Button, Modal } from "react-native";
import Footer from '../Hooks/Footer';
import LoginForm from "./Iniciar";
import Fondo from "../Hooks/Fondo";

const Main = () => {
  const [modalVisible, setModalVisible] = useState(false);
  
  return ( 
    <View style={styles.container}>
      <Fondo/>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.mainContent}>
          <Text style={styles.mainHeading}>Cuaderno Digital</Text>
          <Button title="Iniciar Sesión" onPress={() => setModalVisible(true)}>Iniciar Sesión</Button>
        </View>
        <Footer/>
      </ScrollView>
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Button title="Cerrar" onPress={() => setModalVisible(false)} />
          <LoginForm />
        </View>
      </Modal>
    </View>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default Main;