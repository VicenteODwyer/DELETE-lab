import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../Hooks/Header.jsx';
import Footer from '../Hooks/Footer.jsx';
import Component from '../Hooks/Mesage.jsx'; // Importar el componente Component
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Fondo from '../Hooks/Fondo'; // Agregar import de Fondo

const Comunication = ( {navigation} ) => {
  const [messages, setMessages] = useState([]); // Estado para almacenar los mensajes
  const [modalVisible, setModalVisible] = useState(false);
  const [author, setAuthor] = useState('Santiago Casetti'); // Estado para almacenar el autor

  const handleAddMessage = (newMessage) => {
    setMessages([...messages, newMessage]); // Agregar el nuevo mensaje
    setModalVisible(false); // Cerrar el modal
  };

  return (
    <View style={styles.mainContainer}>
      <Fondo/>
      <View style={styles.container}>
        <Header/>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.button}>
          <Text style={styles.buttonText}><MaterialIcons name="add-comment" size={24} color="black" /></Text>
        </TouchableOpacity>
        <Component 
          visible={modalVisible} 
          onClose={() => setModalVisible(false)} 
          onSubmit={handleAddMessage} 
        />
        <Text style={styles.title}>Comunicados</Text>
        <View style={styles.card}>
          <Text style={styles.subtitle}>Santiago Casetti</Text>
          <Text style={styles.message}>
            El día 25/09/23, Santiago Casetti se lesionó jugando al fútbol y terminó con una fractura débil del radio y el codo por lo que queda incapacitado de asistir en la escuela durante 1 mes.
          </Text>
          {messages.map((msg, index) => (
            <View key={index}>
              <Text style={styles.subtitle}>{author}</Text> {/* Mostrar el autor antes de cada mensaje */}
              <Text style={styles.message}>{msg}</Text>
            </View>
          ))}
        </View>
      </View>
      <Footer/>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    top: 20
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginBottom: 20,
    top: 50,
    marginHorizontal: 20,
  },
  message: {
    marginTop: 10,
    fontSize: 16,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'flex-end',
    marginBottom: 20,
    top: 130
  },
  buttonText: {
    color: '#fff', // Color del texto del botón
    fontSize: 16,
  },
  footer: {
    paddingHorizontal: 0,
    paddingBottom: 0,
    marginTop: 'auto',
  }
});

export default Comunication;