import React from 'react';

import { StyleSheet, View, Text, ImageBackground, TextInput, TouchableOpacity, Image } from 'react-native';

const Bg = require('./assets/Images/Login_bg.jpg');

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={Bg}
        resizeMode='cover'
        style={styles.imageBg}>
        <Text>uagh</Text>
      </ImageBackground>
    </View>
    // <ImageBackground
    //   source={Bg}
    //   resizeMode='cover'
    //   style={styles.imageBg}>
    //   <Text>loreasjfgb fshgf aisagb ibsafg sabdfgais bghsba kdfgasbdhkfgbiksadfg sabid gisabdgskbg k  sbdfkgbsdbfgi hsdb </Text>


    //   {/* <View style={styles.container}>
    //   <View style={styles.banner}>
    //     <Image style={styles.logo} source={require('./assets/Images/logo.jpg')} />
    //     <Text style={styles.bannerText}>LEARN GROW</Text>
    //   </View>
    //   <View style={styles.illustration}>
    //     <Image style={styles.girl} source={require('./assets/Images/girl.jpg')} />
    //   </View>
    //   <View style={styles.form}>
    //     <TextInput style={styles.input} placeholder="User ID" />
    //     <TextInput style={styles.input} placeholder="Password" secureTextEntry />
    //     <TouchableOpacity style={styles.button}>
    //       <Text style={styles.buttonText}>LOGIN</Text>
    //     </TouchableOpacity>
    //   </View>
    // </View> */}
    // </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100vh',
  },
  imageBg {
    width: '100%',
    height: '100%',
  },
  // banner: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   backgroundColor: '#6C63FF',
  //   padding: 20,
  // },
  // logo: {
  //   width: 50,
  //   height: 50,
  // },
  // bannerText: {
  //   color: '#FFFFFF',
  //   fontSize: 24,
  //   fontWeight: 'bold',
  //   marginLeft: 10,
  // },
  // illustration: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // girl: {
  //   width: 200,
  //   height: 200,
  // },
  // form: {
  //   padding: 20,
  // },
  // input: {
  //   backgroundColor: '#FFFFFF',
  //   borderRadius: 10,
  //   padding: 10,
  //   marginVertical: 10,
  // },
  // button: {
  //   backgroundColor: '#6C63FF',
  //   borderRadius: 10,
  //   padding: 10,
  //   marginVertical: 10,
  //   alignItems: 'center',
  // },
  // buttonText: {
  //   color: '#FFFFFF',
  //   fontSize: 18,
  //   fontWeight: 'bold',
  // },
  // imageBg: {
  //   width: '100%',
  //   height: '100vh',

  // }
});

export default LoginScreen;






