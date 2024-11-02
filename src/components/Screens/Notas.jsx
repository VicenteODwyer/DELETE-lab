import React, { useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Animated } from 'react-native';
import Fondo from '../Hooks/Fondo';
import Header from '../Hooks/Header';
import Footer from '../Hooks/Footer';
import { Ionicons } from '@expo/vector-icons';

const Notas = ({ navigation }) => {
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
        <View style={styles.mainContent}>
          <View style={styles.titleContainer}>
            <Ionicons name="school" size={40} color="#9370DB" />
            <Text style={styles.title}>Calificación 1° Cuatrimestre</Text>
            <View style={styles.decorativeLine} />
          </View>
          
          <View style={styles.paper}>
            <View style={styles.watermark}>
              <Text style={styles.watermarkText}>EPET 20</Text>
            </View>
            
            <View style={styles.headerRow}>
              <View style={[styles.headerCell, { flex: 0.5 }]}>
                <Ionicons name="list-outline" size={18} color="#9370DB" />
                <Text style={styles.headerText}>N°</Text>
              </View>
              <View style={[styles.headerCell, { flex: 2 }]}>
                <Ionicons name="book-outline" size={18} color="#9370DB" />
                <Text style={styles.headerText}>Materia</Text>
              </View>
              <View style={styles.headerCell}>
                <Text style={styles.headerText}>1°</Text>
              </View>
              <View style={styles.headerCell}>
                <Text style={styles.headerText}>2°</Text>
              </View>
              <View style={styles.headerCell}>
                <Text style={styles.headerText}>3°</Text>
              </View>
              <View style={styles.headerCell}>
                <Ionicons name="calculator-outline" size={18} color="#9370DB" />
                <Text style={styles.headerText}>Prom</Text>
              </View>
              <View style={styles.headerCell}>
                <Ionicons name="checkmark-circle-outline" size={18} color="#9370DB" />
                <Text style={styles.headerText}>Estado</Text>
              </View>
            </View>
            
            {[...Array(20)].map((_, index) => (
              <View key={index} style={[styles.row, index % 2 === 0 ? styles.evenRow : null]}>
                <View style={[styles.cell, { flex: 0.5 }]}>
                  <Text style={styles.numberText}>{index + 1}</Text>
                </View>
                <View style={[styles.cell, { flex: 2 }]}></View>
                <View style={styles.cell}></View>
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#9370DB',
    marginTop: 10,
    textAlign: 'center',
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
    padding: 15,
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
    paddingBottom: 12,
    marginBottom: 8,
  },
  headerCell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 2,
  },
  headerText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 4,
    textTransform: 'uppercase',
  },
  row: {
    flexDirection: 'row',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  evenRow: {
    backgroundColor: 'rgba(147, 112, 219, 0.05)',
  },
  cell: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberText: {
    color: '#9370DB',
    fontWeight: 'bold',
  },
});

export default Notas; 