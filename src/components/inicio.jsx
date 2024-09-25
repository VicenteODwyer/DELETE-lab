import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native'; 
import { LinearGradient } from 'expo-linear-gradient'; 

import Footer from './footer';

const NotebookCover = () => {
  return (
    <LinearGradient
    colors={['#6b46c1', '#ec4899']}
    style={styles.container}
    >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>EPET N°20</Text>
          <Text style={styles.subtitle}>Cuaderno de Comunicaciones</Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.border}>
            <Text style={styles.infoText}>Nombre del estudiante: </Text>
            <TextInput
              style={styles.textInputName}
              placeholder="Escribe aquí el nombre del estudiante"
              onChangeText={text => onChangeText(text)}
            />
            <Text style={styles.infoText}>
              Curso: <TextInput
              style={styles.textInput}
              placeholder="Curso"
              onChangeText={text => onChangeText(text)}
            /> División: <TextInput
            style={styles.textInput}
              placeholder="División"
              onChangeText={text => onChangeText(text)}
            /> Turno: <TextInput
            style={styles.textInput}
              placeholder="Turno"
              onChangeText={text => onChangeText(text)}
            /></Text>
          </View>
          <View>
            <Text style={styles.indexTitle}>Índice</Text>
            <Text style={styles.indexItem}>1. Datos del Alumno</Text>
            <Text style={styles.indexItem}>2. Horario Escolar</Text>
            <Text style={styles.indexItem}>3. Inasistencias y Tardanzas</Text>
            <Text style={styles.indexItem}>4. Calificaciones Diarias y Bimestrales</Text>
            <Text style={styles.indexItem}>5. Citaciones y Notificaciones</Text>
          </View>
        </View>
        
      <Footer/>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    zIndex: 10,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 12,
  },
  infoContainer: {
    zIndex: 10,
    padding: 16,
  },
  border: {
    borderColor: '#9ca3af',
    borderWidth: 1,
    padding: 8,
    marginBottom: 16,
  },
  infoText: {
    fontSize: 12,
  },
  indexTitle: {
    fontWeight: '600',
    marginBottom: 8,
  },
  indexItem: {
    fontSize: 12,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    width: 75
  },  
  textInputName: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    width: 250
  },  
  
});

export default NotebookCover;