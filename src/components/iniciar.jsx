import React from 'react';

import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default function LoginForm() {
  return (
    <View className="login-container">
      <Text className="close-button">&times;</Text>
      <View className="form-group">
        <Text className="label">Usuario</Text>
        <TextInput
          className="input"
          placeholder="Ingrese Usuario."
        />
      </View>
      <View className="form-group">
        <Text className="label">Contraseña</Text>
        <TextInput
          className="input"
          placeholder="Ingrese Contraseña."
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity className="login-button">
        <Text className="button-text">Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
        loginContainer: {
          backgroundColor: '#f0f0f0',
          borderRadius: '20px',
          padding: '20px',
          width: '300px',
          position: 'relative',
        },
        closeButton: {
          position: 'absolute',
          top: '10px',
          left: '15px',
          fontSize: '20px',
          cursor: 'pointer',
        },
        formGroup: {
          marginBottom: '15px',
        },
        label: {
          display: 'block',
          marginBottom: '5px',
          color: '#333',
        },
        input: {
          width: '100%',
          padding: '10px',
          border: 'none',
          borderRadius: '20px',
          backgroundColor: '#d3d3d3',
          color: '#333',
        },
        loginButton: {
          backgroundColor: '#4a4a4a',
          border: 'none',
          borderRadius: '20px',
          color: 'white',
          padding: '10px',
          width: '100%',
          textAlign: 'center',
          cursor: 'pointer',
        },
        buttonText: {
          color: 'white',
        },
      });
    