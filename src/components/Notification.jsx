import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';



const NotificationPopup = () => {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.header}>
            <Text style={styles.title}>Notificaciones</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>✕</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.notificationItem}>
            <View style={styles.userIcon}>
              <Text style={styles.userIconText}>U</Text>
            </View>
            <View style={styles.notificationContent}>
              <Text style={styles.username}>Xx_ExequielWiedermann_xX</Text>
              <Text style={styles.timestamp}>Desaprobado 3 febrero de 2024</Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'flex-end',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: '#f0f0f0',
      borderRadius: 10,
      width: 300,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    closeButton: {
      padding: 5,
    },
    closeButtonText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    notificationItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 15,
    },
    userIcon: {
      marginRight: 10,
      width: 24,
      height: 24,
      borderRadius: 12,
      backgroundColor: '#ddd',
      justifyContent: 'center',
      alignItems: 'center',
    },
    userIconText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    notificationContent: {
      flex: 1,
    },
    username: {
      fontSize: 14,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    timestamp: {
      fontSize: 12,
      color: '#666',
    },
  });

export default NotificationPopup;