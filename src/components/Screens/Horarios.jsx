import React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import Footer from '../Hooks/Footer';
import Header from '../Hooks/Header';
import Fondo from '../Hooks/Fondo';

const Horario = ({navigation}) => {
    return (
    <View style={styles.mainContainer}>
        <Fondo/>
        <Header/>
        <ScrollView style={styles.scrollView}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>EPET N°20</Text>
                <Text style={styles.subtitle}>Horarios</Text>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.card}>
                    <Text style={styles.classTitle}>Horarios de Clases 6°3°</Text>
                    <Image 
                        source={require('../../images/Horarios/HorarioCLases.jpg')}
                        style={styles.image}
                    />
                </View>
                <View style={styles.card}>
                    <Text style={styles.classTitle}>Horarios de Taller 6°3°</Text>
                    <Image 
                        source={require('../../images/Horarios/HorarioTaller.png')}
                        style={styles.image}
                    />
                </View>
            </View>
        </ScrollView>
        <Footer/>
    </View>
);};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#1e1e1e',
    },
    scrollView: {
        flex: 1,
    },
    titleContainer: {
        alignItems: 'center',
        paddingVertical: 25,
        marginBottom: 20,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#000000',
        textShadowColor: 'rgba(255, 255, 255, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 7,
        letterSpacing: 2,
        textAlign: 'center',
        marginTop: 10,
    },
    subtitle: {
        fontSize: 28,
        color: '#000000',
        marginTop: 8,
        textShadowColor: 'rgba(255, 255, 255, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
        letterSpacing: 1.5,
    },
    titleBox: {
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        padding: 12,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        justifyContent: 'flex-start',
    },
    card: {
        marginBottom: 20,
    },
    classTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
        textShadowColor: 'rgba(255, 255, 255, 0.3)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
        letterSpacing: 1,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
    },
});

export default Horario;