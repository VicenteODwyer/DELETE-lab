import React, { useState } from "react"; // Agregar useState
import { Text, View, ScrollView, StyleSheet, Button, Modal, Image } from "react-native"; // Importar Modal
import { LinearGradient } from 'expo-linear-gradient';
import Footer from './footer';

const Horario = () => {
    return (
    <LinearGradient
    colors={['#6b46c1', '#ec4899']}
    style={styles.container}
    >
        <View style={styles.titleContainer}>
            <Text style={styles.title}>EPET N°20</Text>
            <Text style={styles.subtitle}>Horarios</Text>
        </View>
        <View>
            <Text>Horarios de Clases</Text>
            <Image
                source={require('./images/Horarios/HorarioCLases.jpg')}
            />
        </View>
        <Footer/>
    </LinearGradient>
);};

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
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semi-transparente
    },
});

export default Horario