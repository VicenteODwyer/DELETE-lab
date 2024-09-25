import React from "react";
import { Text,View, ScrollView,StyleSheet,TouchableOpacity  } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import Footer from './footer';
const Main = () => {
    return (
        <LinearGradient
        colors={['#6b46c1', '#ec4899']}
        style={styles.container}
        >
        <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.mainContent}>
        <Text style={styles.mainHeading}> Cuaderno Digital</Text>
        </View>

        <Footer/>
        
        </ScrollView>
        </LinearGradient>
    )
}
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
  });

export default Main