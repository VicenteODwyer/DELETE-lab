import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import Header from '../Hooks/Header.jsx';
import Footer from '../Hooks/Footer.jsx';
import Component from '../Hooks/Mesage.jsx';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import Fondo from '../Hooks/Fondo';
import { LinearGradient } from 'expo-linear-gradient';

const Comunication = ({ navigation }) => {
  const [messages, setMessages] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const scrollY = useRef(new Animated.Value(0)).current;

  const handleAddMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
    setModalVisible(false);
  };

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
        <View style={styles.contentContainer}>
          <View style={styles.titleWrapper}>
            <LinearGradient
              colors={['rgba(255,255,255,0.9)', 'rgba(240,240,255,0.9)']}
              style={styles.titleContainer}
            >
              <MaterialIcons name="notifications" size={35} color="#6B4EFF" />
              <Text style={styles.title}>Comunicados</Text>
            </LinearGradient>
          </View>

          <View style={styles.mainContent}>
            <View style={styles.contentCard}>
              <View style={styles.headerTop}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                  <MaterialIcons name="arrow-back" size={24} color="#6B4EFF" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.addButton}>
                  <LinearGradient
                    colors={['#9747FF', '#7928CA']}
                    style={styles.gradientButton}
                  >
                    <MaterialIcons name="add" size={24} color="white" />
                  </LinearGradient>
                </TouchableOpacity>
              </View>

              {messages.length === 0 ? (
                <View style={styles.emptyStateCard}>
                  <LinearGradient
                    colors={['#F8F9FE', '#F0F0FF']}
                    style={styles.iconContainer}
                  >
                    <Ionicons name="notifications-outline" size={80} color="#6B4EFF" />
                  </LinearGradient>
                  <Text style={styles.emptyText}>No hay comunicados</Text>
                  <Text style={styles.emptySubtext}>Los nuevos mensajes aparecerán aquí</Text>
                </View>
              ) : (
                messages.map((msg, index) => (
                  <View key={index} style={styles.messageCard}>
                    <View style={styles.messageHeader}>
                      <LinearGradient
                        colors={['#F8F9FE', '#F0F0FF']}
                        style={styles.avatarContainer}
                      >
                        <MaterialIcons name="account-circle" size={40} color="#6B4EFF" />
                      </LinearGradient>
                      <View style={styles.messageInfo}>
                        <Text style={styles.author}>{msg.author}</Text>
                        <Text style={styles.timestamp}>Hace 2 horas</Text>
                      </View>
                    </View>
                    <Text style={styles.messageText}>{msg.text}</Text>
                  </View>
                ))
              )}
            </View>
          </View>
        </View>
      </Animated.ScrollView>

      <Component
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={handleAddMessage}
      />
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
  contentContainer: {
    padding: 20,
    paddingTop: 120,
    minHeight: '150%',
  },
  titleWrapper: {
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 30,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    padding: 25,
    borderRadius: 20,
    width: '90%',
    shadowColor: '#6B4EFF',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#6B4EFF',
    letterSpacing: 1,
  },
  mainContent: {
    flex: 1,
    paddingBottom: 200,
  },
  contentCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 25,
    padding: 25,
    shadowColor: '#6B4EFF',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 12,
  },
  headerCard: {
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#6B4EFF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#6B4EFF',
  },
  gradientButton: {
    borderRadius: 15,
    padding: 10,
  },
  messageCard: {
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 20,
    marginBottom: 16,
    width: '100%',
    shadowColor: "#6B4EFF",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  messageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatarContainer: {
    borderRadius: 20,
    padding: 10,
    marginRight: 15,
  },
  messageInfo: {
    flex: 1,
  },
  author: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  messageText: {
    fontSize: 15,
    color: '#666',
    lineHeight: 22,
    marginTop: 12,
  },
  emptyStateCard: {
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 30,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: "#6B4EFF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    marginTop: 12,
    textAlign: 'center',
  },
  timestamp: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
  messageFooter: {
    flexDirection: 'row',
    marginTop: 16,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    gap: 20,
  },
  footerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    padding: 8,
    borderRadius: 15,
    backgroundColor: '#F8F9FE',
  },
  footerButtonText: {
    color: '#6B4EFF',
    fontSize: 14,
    fontWeight: '500',
  },
  iconContainer: {
    backgroundColor: '#F8F9FE',
    borderRadius: 30,
    padding: 20,
    marginBottom: 16,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#999',
    marginTop: 8,
  },
  moreButton: {
    backgroundColor: '#F8F9FE',
    borderRadius: 12,
    padding: 8,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  }
});

export default Comunication;