import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

const { width: screenWidth } = Dimensions.get('window');

const Mesage = ({ visible, onClose, onSubmit }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (message.trim()) {
      onSubmit({
        text: message,
        date: new Date().toLocaleDateString(),
        author: 'Santiago Casetti'
      });
      setMessage('');
      onClose();
    }
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Nuevo Comunicado</Text>
            <TouchableOpacity onPress={onClose}>
              <MaterialIcons name="close" size={24} color="#666" />
            </TouchableOpacity>
          </View>

          <TextInput
            style={styles.input}
            placeholder="Escribe tu comunicado aquí..."
            multiline={true}
            value={message}
            onChangeText={setMessage}
            placeholderTextColor="#666"
          />

          <TouchableOpacity onPress={handleSubmit}>
            <LinearGradient
              colors={['#9747FF', '#7928CA']}
              style={styles.submitButton}
            >
              <Text style={styles.submitButtonText}>Enviar</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    width: screenWidth,
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
  },
  input: {
    backgroundColor: '#F8F9FE',
    borderRadius: 12,
    padding: 15,
    minHeight: 120,
    marginBottom: 20,
    fontSize: 16,
    color: '#444',
    width: '100%',
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
  submitButton: {
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    width: '100%',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Mesage;
