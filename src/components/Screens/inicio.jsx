import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native'; 
import { LinearGradient } from 'expo-linear-gradient'; 
import { useNavigation } from '@react-navigation/native';
import Header from '../Hooks/Header';
import Footer from '../Hooks/Footer';

const NotebookCover = ({navigation} ) => {
  

  return (
    <LinearGradient
      colors={['#6b46c1', '#ec4899']}
      style={styles.container}
    >
      <Header/>
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
            onChangeText={text => console.log(text)}
          />
          <Text style={styles.infoText}>
            Curso: <TextInput
              style={styles.textInput}
              placeholder="Curso"
              onChangeText={text => console.log(text)}
            /> División: <TextInput
              style={styles.textInput}
              placeholder="División"
              onChangeText={text => console.log(text)}
            /> Turno: <TextInput
              style={styles.textInput}
              placeholder="Turno"
              onChangeText={text => console.log(text)}
            />
          </Text>
          <Button
            style={styles.button}
            title="Guardar Información"
            onPress={() => console.log('Información guardada con éxito')}
          />
        </View>
        <View>
          <Text style={styles.indexTitle}>Índice</Text>
          <TouchableOpacity style={styles.indexItem} onPress={() => navigation.navigate('DatosAlumno')}>
            <Text>1. Datos del Alumno</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.indexItem} onPress={() => navigation.navigate('HorarioEscolar')}>
            <Text>2. Horario Escolar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.indexItem} text= "Comunicados" onPress={ () => navigation.navigate('Comunication')}>
            <Text>3. Comunicados</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.indexItem} onPress={() => navigation.navigate('Notas')}>
            <Text>4. Notas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.indexItem} onPress={() => navigation.navigate('EntradaRetiro')}>
            <Text>5. Entrada y retiro en horas sin actividad</Text>
          </TouchableOpacity>
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
  button: {
    backgroundColor: 'skyblue',
    width: 75,
    height: 40,
  }
});

export default NotebookCover;