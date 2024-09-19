import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 
import { Feather } from '@expo/vector-icons'; 

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
            <Text style={styles.infoText}>Nombre del estudiante: ________________</Text>
            <Text style={styles.infoText}>Curso: ________ División: ________ Turno: ________</Text>
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
        
      <View style={styles.footer}>
        <View style={styles.footerContent}>
          <View style={styles.creators}>
            <Text style={styles.sectionHeading}>Creadores</Text>
            <Text style={styles.creatorName}>Vicente O'Dwyer</Text>
            <Text style={styles.creatorName}>Yañez Dario</Text>
          </View>
          <View style={styles.socialMedia}>
            <Text style={styles.sectionHeading}>Redes Sociales</Text>
            <View style={styles.socialIcons}>
              <TouchableOpacity style={styles.iconButton}>
                <Feather name="facebook" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Feather name="twitter" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Feather name="instagram" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Feather name="linkedin" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
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
  footer: {
    width: '100%',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  footerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  creators: {
    alignItems: 'flex-start',
  },
  socialMedia: {
    alignItems: 'flex-end',
  },
  sectionHeading: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  creatorName: {
    color: '#fff',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconButton: {
    marginHorizontal: 5,
  },
});

export default NotebookCover;