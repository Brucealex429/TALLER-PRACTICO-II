import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CryptoJS from 'crypto-js';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const hashedPassword = CryptoJS.SHA256(password).toString();
      const user = { email, username, password: hashedPassword };
      const storedUsers = await AsyncStorage.getItem('users');
      const users = storedUsers ? JSON.parse(storedUsers) : [];
      users.push(user);
      await AsyncStorage.setItem('users', JSON.stringify(users));
      alert('Usuario registrado con éxito');
      navigation.navigate('Login');
    } catch (error) {
      alert('Hubo un error al registrar el usuario');
    }
  };

  return (
    <ImageBackground source={require('../../assets/background.jpg')} style={styles.background}>
      <View style={styles.overlay} />
      <View style={styles.container}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <Text style={styles.title}>Registro</Text>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          placeholderTextColor="#7e7e7e"
          value={email}
          onChangeText={setEmail}
        />
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
        <Button title="REGISTRARSE" onPress={handleRegister} />
        <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
          ¿Ya tienes una cuenta? Inicia sesión ahora
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

export default RegisterScreen;








