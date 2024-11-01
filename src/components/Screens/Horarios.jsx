import React, { useState } from "react"; // Agregar useState
import { Text, View, ScrollView, StyleSheet, Button, Modal, Image } from "react-native"; // Importar Modal
import { LinearGradient } from 'expo-linear-gradient';
import Footer from '../Hooks/Footer';
import Header from '../Hooks/Header';
const Horario = ({navigation}) => {
    return (
    <LinearGradient
    colors={['#6b46c1', '#ec4899']}
    style={styles.container}
    >
        <Header/>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>EPET N°20</Text>
            <Text style={styles.subtitle}>Horarios</Text>
        </View>
        <View style={styles.contentContainer}>
            <Text style={styles.classTitle}>Horarios de Clases 6°3°</Text>
            <Image 
                source={require('../../images/Horarios/HorarioCLases.jpg')} // Asegúrate de que la ruta sea correcta
                style={styles.image} // Agrega un estilo para la imagen
            />
            <Text style={styles.classTitle}>Horarios de Taller 6°3°</Text>
            <Image 
                source={require('../../images/Horarios/HorarioTaller.png')} // Asegúrate de que la ruta sea correcta
                style={styles.image} // Agrega un estilo para la imagen
            />
        </View>
        <Footer/>
    </LinearGradient>
);};

// Agrega un estilo para la imagen
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleContainer: {
        // ... estilos existentes ...
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 20, // Agrega padding para centrar el contenido horizontalmente
        justifyContent: 'flex-start', // Cambiado para alinear al inicio
    },
    classTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semi-transparente
    },
    image: {
        width: '100%', // Ajusta el ancho según sea necesario
        height: 200, // Ajusta la altura según sea necesario
        resizeMode: 'contain', // Ajusta el modo de redimensionamiento
    },
});

export default Horario;