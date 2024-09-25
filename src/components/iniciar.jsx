import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput } from "react-native"; // Asegúrate de importar TextInput

export default function LoginForm() {
  return (
    <View style={styles.loginContainer}> {/* Cambiar className a style */}
      <Text style={styles.closeButton}>&times;</Text>
      <View style={styles.formGroup}> {/* Cambiar className a style */}
        <Text style={styles.label}>Usuario</Text>
        <TextInput
          style={styles.input} // Cambiar className a style
          placeholder="Ingrese Usuario."
        />
      </View>
      <View style={styles.formGroup}> {/* Cambiar className a style */}
        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input} /* Cambiar className a style */
          placeholder="Ingrese Contraseña."
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={styles.loginButton}> {/* Cambiar className a style */}
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 20, // Cambiar a número
    padding: 20, // Cambiar a número
    width: 300, // Cambiar a número
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 10, // Cambiar a número
    left: 15, // Cambiar a número
    fontSize: 20,
    cursor: 'pointer',
  },
  formGroup: {
    marginBottom: 15, // Cambiar a número
  },
  label: {
    marginBottom: 5, // Cambiar a número
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 10, // Cambiar a número
    borderWidth: 0, // Cambiar a borderWidth
    borderRadius: 20, // Cambiar a número
    backgroundColor: '#d3d3d3',
    color: '#333',
  },
  loginButton: {
    backgroundColor: '#4a4a4a',
    borderWidth: 0, // Cambiar a borderWidth
    borderRadius: 20, // Cambiar a número
    color: 'white',
    padding: 10, // Cambiar a número
    width: '100%',
    textAlign: 'center',
  },
  buttonText: {
    color: 'white',
  },
});
