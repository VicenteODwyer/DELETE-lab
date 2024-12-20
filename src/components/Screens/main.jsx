import React, { useState } from "react";
import { Text, View, ScrollView, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Footer from '../Hooks/Footer';
import Fondo from "../Hooks/Fondo";
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../firebase/firebase';
import { 
  signInWithEmailAndPassword, 
  GoogleAuthProvider, 
  FacebookAuthProvider,
  signInWithPopup 
} from 'firebase/auth';

const Main = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  
  const handleEmailLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('Inicio');
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigation.navigate('Inicio');
    } catch (error) {
      console.error('Error con Google:', error.message);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const provider = new FacebookAuthProvider();
      await signInWithPopup(auth, provider);
      navigation.navigate('Inicio');
    } catch (error) {
      console.error('Error con Facebook:', error.message);
    }
  };

  return ( 
    <View style={styles.container}>
      <Fondo/>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.mainContent}>
          <Text style={styles.mainHeading}>Cuaderno Digital</Text>
          
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Correo electrónico"
              placeholderTextColor="#666"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              placeholderTextColor="#666"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            
            <TouchableOpacity 
              style={styles.loginButton}
              onPress={handleEmailLogin}
            >
              <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
            </TouchableOpacity>

            <View style={styles.socialButtonsContainer}>
              <TouchableOpacity 
                style={[styles.socialButton, styles.googleButton]}
                onPress={handleGoogleLogin}
              >
                <Text style={styles.socialButtonText}>Continuar con Google</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={[styles.socialButton, styles.facebookButton]}
                onPress={handleFacebookLogin}
              >
                <Text style={styles.socialButtonText}>Continuar con Facebook</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity 
              style={styles.registerButton}
              onPress={() => navigation.navigate('Registro')}
            >
              <Text style={styles.registerButtonText}>¿No tienes cuenta? Regístrate</Text>
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
  footer: {
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
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  formContainer: {
    width: '80%',
    maxWidth: 400,
    marginTop: 30,
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
  registerButton: {
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  registerButtonText: {
    color: 'white',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  socialButtonsContainer: {
    marginTop: 20,
    width: '100%',
  },
  socialButton: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  googleButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  facebookButton: {
    backgroundColor: '#1877F2',
  },
  socialButtonText: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
});

export default Main;