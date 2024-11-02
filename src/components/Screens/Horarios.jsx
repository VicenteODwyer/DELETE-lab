import React, { useRef } from 'react';
import { View, Text, StyleSheet, Animated, ScrollView, TouchableOpacity, Image } from 'react-native';
import Footer from '../Hooks/Footer';
import Header from '../Hooks/Header';
import Fondo from '../Hooks/Fondo';

const Horarios = ({ navigation }) => {
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
                style={styles.content}
                onScroll={handleScroll}
                scrollEventThrottle={16}
            >
                <View style={styles.titleContainer}>
                    <View style={styles.titleBox}>
                        <Text style={styles.title}>EPET N°20</Text>
                        <Text style={styles.subtitle}>Horarios</Text>
                    </View>
                </View>

                <View style={styles.contentContainer}>
                    <View style={styles.card}>
                        <View style={styles.cardHeader}>
                            <Text style={styles.cardTitle}>Horarios de Clases 6°3°</Text>
                        </View>
                        <View style={styles.cardContent}>
                            <Image 
                                source={require('../../images/Horarios/HorarioCLases.jpg')}
                                style={styles.image}
                            />
                        </View>
                    </View>

                    <View style={styles.card}>
                        <View style={styles.cardHeader}>
                            <Text style={styles.cardTitle}>Horarios de Taller 6°3°</Text>
                        </View>
                        <View style={styles.cardContent}>
                            <Image 
                                source={require('../../images/Horarios/HorarioTaller.png')}
                                style={styles.image}
                            />
                        </View>
                    </View>
                </View>
            </Animated.ScrollView>
            <Footer scrollY={scrollY} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e1e1e',
    },
    content: {
        flex: 1,
    },
    titleContainer: {
        alignItems: 'center',
        paddingVertical: 25,
        marginBottom: 20,
    },
    titleBox: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 15,
        padding: 15,
        width: '90%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8,
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#1e1e1e',
        letterSpacing: 2,
    },
    subtitle: {
        fontSize: 24,
        color: '#333',
        marginTop: 5,
        letterSpacing: 1.5,
    },
    contentContainer: {
        padding: 15,
        gap: 20,
        paddingBottom: 100,
    },
    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 15,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 20,
    },
    cardHeader: {
        backgroundColor: '#2c3e50',
        padding: 15,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        letterSpacing: 1,
    },
    cardContent: {
        padding: 15,
    },
    image: {
        width: '100%',
        height: 250,
        resizeMode: 'contain',
        borderRadius: 10,
    },
});

export default Horarios;