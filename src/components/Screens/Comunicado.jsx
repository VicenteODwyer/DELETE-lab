import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../Hooks/Header.jsx';
import Footer from '../Hooks/Footer.jsx';
import Component from '../Hooks/Mesage.jsx';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import Fondo from '../Hooks/Fondo';

const Comunication = ({ navigation }) => {
  const [messages, setMessages] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
    setModalVisible(false);
  };

  return (
    <View style={styles.mainContainer}>
      <Fondo />
      <View style={styles.container}>
        <Header navigation={navigation} />
        
        <View style={styles.content}>
          <View style={styles.headerSection}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <MaterialIcons name="arrow-back" size={24} color="#666" />
            </TouchableOpacity>
            <Text style={styles.title}>Comunicados</Text>
            <View style={styles.headerButtons}>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <MaterialIcons name="edit" size={24} color="#666" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.historyButton}>
                <MaterialIcons name="history" size={24} color="#666" />
              </TouchableOpacity>
            </View>
          </View>

          <ScrollView 
            style={styles.scrollView}
            contentContainerStyle={styles.scrollViewContent}
          >
            {messages.length === 0 ? (
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>No hay comunicados disponibles</Text>
              </View>
            ) : (
              messages.map((msg, index) => (
                <View key={index} style={styles.card}>
                  <View style={styles.messageHeader}>
                    <View style={styles.userInfo}>
                      <MaterialIcons name="account-circle" size={24} color="#666" />
                      <Text style={styles.author}>{msg.author}</Text>
                    </View>
                  </View>
                  <Text style={styles.message}>{msg.text}</Text>
                </View>
              ))
            )}
          </ScrollView>
        </View>
        
        <Component
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onSubmit={handleAddMessage}
        />
        <Footer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F8F9FE',
  },
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    marginTop: 80,
    marginBottom: 60,
    paddingHorizontal: 20,
  },
  headerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  backButton: {
    padding: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
  },
  headerButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  historyButton: {
    marginLeft: 15,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingTop: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingBottom: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  author: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 8,
    color: '#333',
  },
  message: {
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default Comunication;