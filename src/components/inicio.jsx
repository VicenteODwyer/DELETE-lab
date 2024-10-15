import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button} from 'react-native'; 
import { LinearGradient } from 'expo-linear-gradient'; 
import Header from './Header';
import Footer from './Footer';
import {Link} from 'expo-router'
import { StackActions, useNavigation } from '@react-navigation/native';

const NotebookCover = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient
    colors={['#6b46c1', '#ec4899']}
    style={styles.container}
    >
      < Header/>
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
          <Button
          style={styles.button}
            title="Guardar Información"
            onPress={() => console.log('Información guardada con éxito')}
          />
          </View>
          <View>
            <Text style={styles.indexTitle}>Índice</Text>
            <TouchableOpacity style={styles.indexItem} onPress={() => navigation.dispatch(StackActions.replace,'Horarios')}>
              <Text>1. Datos del Alumno</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.indexItem} onPress={() => console.log('Horario Escolar')}>
              <Text>2. Horario Escolar</Text>
            </TouchableOpacity>
            <Link href='./src/components/Comunicado'> <TouchableOpacity style={styles.indexItem} onPress={() => console.log('Comunicados')}> 
              <Text>3. Comunicados</Text>
            </TouchableOpacity></Link>
            <TouchableOpacity style={styles.indexItem} onPress={() => console.log('Notas')}>
              <Text>4. Notas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.indexItem} onPress={() => console.log('Entrada y retiro en horas sin actividad')}>
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