import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CryptoJS from 'crypto-js';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const storedUsers = await AsyncStorage.getItem('users');
      const users = storedUsers ? JSON.parse(storedUsers) : [];
      const hashedPassword = CryptoJS.SHA256(password).toString();
      const user = users.find(u => u.username === username && u.password === hashedPassword);

      if (user) {
        alert('Inicio de sesión exitoso');
        navigation.navigate('ProductList');
      } else {
        alert('Usuario o contraseña incorrectos');
      }
    } catch (error) {
      alert('Hubo un error al iniciar sesión');
    }
  };

  return (
    <ImageBackground source={require('../../assets/background.jpg')} style={styles.background}>
      <View style={styles.overlay} />
      <View style={styles.container}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <Text style={styles.title}>Iniciar Sesión</Text>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          placeholderTextColor="#7e7e7e" 
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#7e7e7e"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="INICIAR SESIÓN" onPress={handleLogin} />
        <Text style={styles.link} onPress={() => navigation.navigate('Register')}>
          ¿No tienes una cuenta? Regístrate ahora
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    width: 200,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
    color: '#ffffff', 
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
    backgroundColor: '#ffffffaa',
    color: '#000000',
  },
  link: {
    marginTop: 16,
    color: 'white',
    textAlign: 'center',
  },
});

export default LoginScreen;








