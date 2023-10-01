import React from 'react';

import { StyleSheet, View, Text,ImageBackground, TextInput, TouchableOpacity, Image } from 'react-native';

const Bg = require('./assets/Images/Login_bg.jpg');

const LoginScreen = () => {
  return (
    <ImageBackground
    source={Bg}
    resizeMode='cover'
    style={styles.imageBg}>

    {/* <View style={styles.container}>
      <View style={styles.banner}>
        <Image style={styles.logo} source={require('./assets/Images/logo.jpg')} />
        <Text style={styles.bannerText}>LEARN GROW</Text>
      </View>
      <View style={styles.illustration}>
        <Image style={styles.girl} source={require('./assets/Images/girl.jpg')} />
      </View>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="User ID" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View> */}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0D9E8',
  },
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6C63FF',
    padding: 20,
  },
  logo: {
    width: 50,
    height: 50,
  },
  bannerText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  illustration: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  girl: {
    width: 200,
    height: 200,
  },
  form: {
    padding: 20,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#6C63FF',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
      imageBg: {
        width: '100px',
        height: '100vh',
      
    }
});

export default LoginScreen;






