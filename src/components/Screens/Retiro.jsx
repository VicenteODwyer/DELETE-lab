import React, { useRef } from 'react';
import { View, Text, StyleSheet, Animated, Image } from 'react-native';
import Fondo from '../Hooks/Fondo';
import Header from '../Hooks/Header';
import Footer from '../Hooks/Footer';
import { Ionicons } from '@expo/vector-icons';

const Retiro = ({ navigation }) => {
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
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View style={styles.mainContent}>
          <View style={styles.titleContainer}>
            <Ionicons name="school" size={40} color="#9370DB" />
            <Text style={styles.title}>Registro de Retiros</Text>
            <Text style={styles.subtitle}>Ciclo Lectivo 2024</Text>
            <View style={styles.decorativeLine} />
          </View>
          
          <View style={styles.paper}>
            <View style={styles.watermark}>
              <Text style={styles.watermarkText}>EPET 20</Text>
            </View>
            
            <View style={styles.headerRow}>
              <View style={styles.headerCell}>
                <Ionicons name="calendar" size={20} color="#9370DB" />
                <Text style={styles.headerText}>Fecha</Text>
              </View>
              <View style={styles.headerCell}>
                <Ionicons name="time" size={20} color="#9370DB" />
                <Text style={styles.headerText}>Hora</Text>
              </View>
              <View style={styles.headerCell}>
                <Ionicons name="pencil" size={20} color="#9370DB" />
                <Text style={styles.headerText}>Firma</Text>
              </View>
              <View style={styles.headerCell}>
                <Ionicons name="document-text" size={20} color="#9370DB" />
                <Text style={styles.headerText}>Observaciones</Text>
              </View>
            </View>
            
            {[...Array(20)].map((_, index) => (
              <View key={index} style={styles.row}>
                <View style={styles.cell}></View>
                <View style={styles.cell}></View>
                <View style={styles.cell}></View>
                <View style={styles.cell}></View>
              </View>
            ))}
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
    marginTop: 60,
    marginBottom: 100,
  },
  mainContent: {
    padding: 20,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#9370DB',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#9370DB',
    textTransform: 'uppercase',
    marginTop: 10,
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginTop: 5,
    fontStyle: 'italic',
  },
  decorativeLine: {
    height: 3,
    width: '50%',
    backgroundColor: '#9370DB',
    marginTop: 15,
    borderRadius: 10,
  },
  paper: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.35,
    shadowRadius: 7,
    elevation: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    position: 'relative',
    overflow: 'hidden',
  },
  watermark: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -100 }, { translateY: -100 }, { rotate: '-45deg' }],
  },
  watermarkText: {
    fontSize: 60,
    color: 'rgba(147, 112, 219, 0.1)',
    fontWeight: 'bold',
  },
  headerRow: {
    flexDirection: 'row',
    borderBottomWidth: 3,
    borderBottomColor: '#9370DB',
    paddingBottom: 15,
    marginBottom: 10,
  },
  headerCell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14,
    color: '#333',
    textTransform: 'uppercase',
    marginTop: 5,
  },
  row: {
    flexDirection: 'row',
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  cell: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
});

export default Retiro; 