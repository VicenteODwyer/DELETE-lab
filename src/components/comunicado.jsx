import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons'; 
import Footer from './footer.jsx';
const Comunication = () => {
  return (
    <LinearGradient
        colors={['#6b46c1', '#ec4899']}
        style={styles.container}>
      <Text style={styles.title}>Comunicados</Text>
      <View style={styles.card}>
        <Text style={styles.subtitle}>Santiago Casetti</Text>
        <Text style={styles.message}>
          El día 25/09/23, Santiago Casetti se lesionó jugando al fútbol y terminó con una fractura débil del radio y el codo por lo que queda incapacitado de asistir en la escuela durante 1 mes.
        </Text>
        <Text style={styles.subtitle}>Santiago Casetti</Text>
        <Text style={styles.message}>
          El día 25/09/23, Santiago Casetti se lesionó jugando al fútbol y terminó con una fractura débil del radio y el codo por lo que queda incapacitado de asistir en la escuela durante 1 mes.
        </Text>
        <Text style={styles.subtitle}>Santiago Casetti</Text>
        <Text style={styles.message}>
          El día 25/09/23, Santiago Casetti se lesionó jugando al fútbol y terminó con una fractura débil del radio y el codo por lo que queda incapacitado de asistir en la escuela durante 1 mes.
        </Text>
      </View>
      <Footer/>
          
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  message: {
    marginTop: 10,
    fontSize: 16,
  },
  footer: {
    width: '100%',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
});

export default Comunication;