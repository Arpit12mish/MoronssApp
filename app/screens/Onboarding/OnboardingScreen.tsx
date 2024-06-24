// app/screens/Auth/LoginScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,Image, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';

type Props = StackScreenProps<RootStackParamList, 'Login'>;

const OnboardingScreen: React.FC<Props> = ({ navigation }) => {

  return (
    <View style={styles.loginPage}>
      <Text style={styles.restructuring}>Restructuring</Text>
      <Text style={styles.youthsCulture}>Youths Culture :))</Text>
      <Image
        style={styles.image}
        source={require('../../../assets/image.png')}
      />

      <Text style={styles.welcome}>Welcome!</Text>
      <Text style={styles.letsShowOurWorth}>Let’s show our WORTH to the WORLD :)</Text>
      {/* <View style={styles.primaryButton}>
        <Text style={styles.newLetsSignUp}>New? Let’s Sign Up</Text>
      </View>
      <View style={styles.primaryButton1}>
        <Text style={styles.loyalLetsLogin}>Loyal? Let’s Login Then</Text>
      </View> */}
      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => navigation.navigate('Signup')}
      >
        <Text style={styles.newLetsSignUp}>New? Let’s Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.primaryButton, styles.loginButton]}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.loyalLetsLogin}>Loyal? Let’s Login Then</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  loginPage: {
    borderWidth: 2,
    borderColor: '#000000',
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    paddingTop: 49,
    paddingBottom: 600,
  },
  restructuring: {
    marginRight: 145,
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 25,
    lineHeight: 32,
    color: '#000000',
  },
  youthsCulture: {
    marginRight: 183,
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 20,
    color: '#000000',
  },
  
  welcome: {
    marginRight: 195,
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 25,
    lineHeight: 32,
    color: '#000000',
    marginTop:30,
  },
  letsShowOurWorth: {
    marginTop: 5,
    marginRight: 30,
    // marginHorizontal: 40,
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 20,
    color: '#000000',
  },
  newLetsSignUp: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 44,
    color: '#000000',
  },
  primaryButton: {
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#000000',
    backgroundColor: '#FFCB47',
    marginTop: 15,
    paddingHorizontal: 12,
    width: 240,
    alignItems: 'center',
    // marginBottom: 10,
  },
  loyalLetsLogin: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 44,
    color: '#000000',
  },
  primaryButton1: {
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#000000',
    marginLeft: 3,
    paddingHorizontal: 12,
    width: 241,
    alignItems: 'center',
  },
  input: {
    width: '80%', // Adjust as needed
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    fontFamily: 'Poppins',
    fontSize: 16,
    backgroundColor: '#fff',
  },
  image: {
    height: 350,
    width: 350
  },
  loginButton: {
    backgroundColor: '#FFF',
  },
 
});

export default OnboardingScreen;