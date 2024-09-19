import React from "react";
import { Text,View, ScrollView,StyleSheet,TouchableOpacity  } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

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
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
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