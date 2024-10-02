import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import {Link} from 'expo-router';

const Footer = () => {
    return (
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
                   <Link href="https://www.facebook.com/EPET20/?locale=es_LA"> <Feather name="facebook" size={24} color="white" /></Link>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                   <Link href="https://www.instagram.com/epet20educacion/"> <Feather name="twitter" size={24} color="white" /></Link>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                <Link href="https://www.instagram.com/epet20educacion/"><Feather name="instagram" size={24} color="white" /></Link>
                </TouchableOpacity>
                </View>
            </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
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
        marginHorizontal: 5
    },
});
export default Footer;