import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'; 
import Fondo from '../Hooks/Fondo';
import Header from '../Hooks/Header';
import Footer from '../Hooks/Footer';

const NotebookCover = ({navigation} ) => {
  return (
    <View style={styles.container}>
      <Fondo />
      <Header/>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.mainContent}>
          <View style={styles.card}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>EPET N°20</Text>
              <Text style={styles.subtitle}>Cuaderno de Comunicaciones</Text>
            </View>
            
            <View style={styles.formContainer}>
              <Text style={styles.label}>Nombre del estudiante</Text>
              <TextInput
                style={styles.textInputName}
                placeholder="Escribe aquí el nombre del estudiante"
                placeholderTextColor="#999"
              />
              
              <View style={styles.rowContainer}>
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Curso</Text>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Curso"
                    placeholderTextColor="#999"
                  />
                </View>
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>División</Text>
                  <TextInput
                    style={styles.textInput}
                    placeholder="División"
                    placeholderTextColor="#999"
                  />
                </View>
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Turno</Text>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Turno"
                    placeholderTextColor="#999"
                  />
                </View>
              </View>

              <TouchableOpacity 
                style={styles.button}
                onPress={() => console.log('Información guardada con éxito')}
              >
                <Text style={styles.buttonText}>Guardar Información</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.indexContainer}>
              <Text style={styles.indexTitle}>Índice</Text>
              
              <TouchableOpacity 
                style={styles.indexItem}
                onPress={() => navigation.navigate('Inicio')}
              >
                <Text style={styles.indexText}>1. Datos del Alumno</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.indexItem}
                onPress={() => navigation.navigate('Horario')}
              >
                <Text style={styles.indexText}>2. Horario Escolar</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.indexItem}
                onPress={() => navigation.navigate('Comunicado')}
              >
                <Text style={styles.indexText}>3. Comunicados</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={[styles.indexItem, styles.indexItemHover]}
                onPress={() => navigation.navigate('Notas')}
              >
                <Text style={styles.indexText}>4. Notas</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.indexItem}
                onPress={() => navigation.navigate('Retiro')}
              >
                <Text style={styles.indexText}>5. Entrada y retiro en horas sin actividad</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Footer/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    width: '100%',
    maxWidth: 450,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  formContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  inputGroup: {
    flex: 1,
    marginHorizontal: 5,
  },
  textInputName: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  textInput: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  button: {
    backgroundColor: '#4a90e2',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  indexContainer: {
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    padding: 12,
  },
  indexTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  indexItem: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 6,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  indexItemHover: {
    backgroundColor: '#f0f0f0',
  },
  indexText: {
    color: '#444',
    fontSize: 15,
    fontWeight: '500',
  }
});

export default NotebookCover;