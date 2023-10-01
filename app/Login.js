import React from 'react';

import { StyleSheet, View, Text, ImageBackground, TextInput, TouchableOpacity, Image } from 'react-native';
import Footer from './components/Footer';

const Bg = require('./Assets/Images/Login_bg.jpg');

const LoginScreen = () => {
  return (

    <ImageBackground
    source={Bg}
    resizeMode='cover'
    style={styles.imageBg}
>
    <View  style={styles.formContainer}>



        <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="Black"
        />
        <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="Black"
            secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>login</Text>
        </TouchableOpacity>
    </View>
    <Footer/>
</ImageBackground>
  
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100vh',
  },
  imageBg: {
    width: '100%',
    height: '100%',
  }
});

export default LoginScreen;






