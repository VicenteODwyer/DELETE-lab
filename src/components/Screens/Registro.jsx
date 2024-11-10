import React, { useState } from "react";
import { Text, View, ScrollView, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Footer from '../Hooks/Footer';
import Fondo from "../Hooks/Fondo";
import useSwitch from '../Hooks/useSwitch';

const Registro = () => {
  const { handleRolSubmit, error } = useSwitch();
  const [formData, setFormData] = useState({
    dni: '',
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    password: '',
    confirmPassword: '',
    rol: ''
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (!formData.dni || formData.dni.length < 7) {
      alert('Por favor ingresa un DNI válido');
      return;
    }

    if (!formData.rol) {
      alert('Por favor selecciona un rol');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    try {
      await handleRolSubmit(formData, 'crear');
      // Limpiamos el formulario después del registro exitoso
      setFormData({
        dni: '',
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        password: '',
        confirmPassword: '',
        rol: ''
      });
      alert('Usuario registrado exitosamente');
    } catch (error) {
      alert(error.message || 'Error al registrar usuario');
    }
  };

  return (
    <View style={styles.container}>
      <Fondo/>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.mainContent}>
          <Text style={styles.mainHeading}>Registro de Usuario</Text>
          
          <View style={styles.formContainer}>
            <View style={styles.rolContainer}>
              <Text style={styles.rolLabel}>Selecciona tu rol:</Text>
              <View style={styles.rolOptions}>
                <TouchableOpacity 
                  style={[
                    styles.rolButton,
                    formData.rol === 'alumno' && styles.rolButtonActive
                  ]}
                  onPress={() => setFormData({...formData, rol: 'alumno'})}
                >
                  <Text style={[
                    styles.rolButtonText,
                    formData.rol === 'alumno' && styles.rolButtonTextActive
                  ]}>Alumno</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  style={[
                    styles.rolButton,
                    formData.rol === 'profesor' && styles.rolButtonActive
                  ]}
                  onPress={() => setFormData({...formData, rol: 'profesor'})}
                >
                  <Text style={[
                    styles.rolButtonText,
                    formData.rol === 'profesor' && styles.rolButtonTextActive
                  ]}>Profesor</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  style={[
                    styles.rolButton,
                    formData.rol === 'preceptor' && styles.rolButtonActive
                  ]}
                  onPress={() => setFormData({...formData, rol: 'preceptor'})}
                >
                  <Text style={[
                    styles.rolButtonText,
                    formData.rol === 'preceptor' && styles.rolButtonTextActive
                  ]}>Preceptor</Text>
                </TouchableOpacity>
              </View>
            </View>

            <TextInput
              style={styles.input}
              placeholder="DNI"
              placeholderTextColor="#666"
              value={formData.dni}
              onChangeText={(text) => setFormData({...formData, dni: text})}
              keyboardType="numeric"
              maxLength={8}
            />

            <TextInput
              style={styles.input}
              placeholder="Nombre"
              placeholderTextColor="#666"
              value={formData.nombre}
              onChangeText={(text) => setFormData({...formData, nombre: text})}
            />
            
            <TextInput
              style={styles.input}
              placeholder="Apellido"
              placeholderTextColor="#666"
              value={formData.apellido}
              onChangeText={(text) => setFormData({...formData, apellido: text})}
            />

            <TextInput
              style={styles.input}
              placeholder="Correo electrónico"
              placeholderTextColor="#666"
              value={formData.email}
              onChangeText={(text) => setFormData({...formData, email: text})}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <TextInput
              style={styles.input}
              placeholder="Teléfono"
              placeholderTextColor="#666"
              value={formData.telefono}
              onChangeText={(text) => setFormData({...formData, telefono: text})}
              keyboardType="phone-pad"
            />

            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              placeholderTextColor="#666"
              value={formData.password}
              onChangeText={(text) => setFormData({...formData, password: text})}
              secureTextEntry
            />

            <TextInput
              style={styles.input}
              placeholder="Confirmar Contraseña"
              placeholderTextColor="#666"
              value={formData.confirmPassword}
              onChangeText={(text) => setFormData({...formData, confirmPassword: text})}
              secureTextEntry
            />
            
            <TouchableOpacity 
              style={styles.loginButton}
              onPress={handleRegister}
            >
              <Text style={styles.loginButtonText}>Registrarse</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.secondaryButton}
              onPress={() => navigation.navigate('Main')}
            >
              <Text style={styles.secondaryButtonText}>¿Ya tienes cuenta? Inicia Sesión</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Footer/>
      </ScrollView>
    </View>
  );
};

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
    paddingVertical: 40,
  },
  mainHeading: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  formContainer: {
    width: '80%',
    maxWidth: 400,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
    color: '#333',
  },
  loginButton: {
    backgroundColor: '#8A2BE2',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryButton: {
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  secondaryButtonText: {
    color: 'white',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  rolContainer: {
    marginBottom: 20,
  },
  rolLabel: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  rolOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  rolButton: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
  },
  rolButtonActive: {
    backgroundColor: '#8A2BE2',
  },
  rolButtonText: {
    color: 'white',
    fontSize: 14,
  },
  rolButtonTextActive: {
    fontWeight: 'bold',
  },
});

export default Registro;