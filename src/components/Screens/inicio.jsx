import React, { useRef } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Animated, ScrollView } from 'react-native'; 
import Fondo from '../Hooks/Fondo';
import Header from '../Hooks/Header';
import Footer from '../Hooks/Footer';

const NotebookCover = ({ navigation }) => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: true }
  );

  return (
    <View style={styles.container}>
      <Fondo />
      <Header navigation={navigation} />
      
      <Animated.ScrollView 
        style={styles.scrollView}
        onScroll={handleScroll}
        scrollEventThrottle={16}
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
                style={styles.indexItem}
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
      </Animated.ScrollView>

      <Footer scrollY={scrollY} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  scrollView: {
    flex: 1,
    paddingBottom: 60,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingBottom: 100,
    marginTop: 80,
  },
  card: {
    width: '80%',
    maxWidth: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    padding: 20,
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
    backgroundColor: '#8A2BE2',
    borderRadius: 15,
    padding: 15,
    marginTop: 20,
    marginHorizontal: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
    textTransform: 'uppercase'
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