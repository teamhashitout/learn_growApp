import React from 'react';

import { StyleSheet, View, Text, ImageBackground, TextInput, TouchableOpacity, Image } from 'react-native';

const Bg = require('./Assets/Images/Login_bg.jpg');

const LoginScreen = () => {
  return (
    <ImageBackground
      source={Bg}
      resizeMode='cover'
      style={styles.imageBg}
    >
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
        // placeholderTextColor="black" // Commented out since it's black by default
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          // placeholderTextColor="black" // Commented out since it's black by default
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
    </View>
</ImageBackground>
  
  );
};

const styles = StyleSheet.create({
  imageBg: {
    flex: 1, // Use 'flex: 1' to take up the entire screen
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100%',
  },
  formContainer: {
    width: '50%',
    paddingTop: '50%',
    display: 'flex',
    alignItems: 'center'
    // backgroundColor: 'transperent', // Use rgba for a transparent white background
    // borderRadius: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 80,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: 'white',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 12,
  },
  button: {
    backgroundColor: '#f5b3b9',
    padding: 10,
    borderRadius: 5,
    width: '50%',
    textAlign: 'center',
    borderRadius: 50,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 12,
  },
});

export default LoginScreen;

