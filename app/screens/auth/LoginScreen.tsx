import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';

type Props = StackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic
  }; 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's Sign In :)</Text>

      <Text style={styles.label}>Mobile</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Eg: +91-85329802115"
          value={mobile}
          onChangeText={setMobile}
          keyboardType="phone-pad"
        />
      </View>

      <Text style={styles.label}>Password</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Eg: LoveMeLikeYouDo"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.primaryButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.container1}>
        <View style={styles.line}></View>
        <Text style={styles.signInWith}>Sign In with</Text>
        <View style={styles.line}></View>
      </View>

      <View style={styles.socialIconsContainer}>
        <Icon name="twitter" size={30} color="#000000" style={styles.socialIcon} />
        <Icon name="linkedin" size={30} color="#000000" style={styles.socialIcon} />
        <Icon name="google" size={30} color="#000000" style={styles.socialIcon} />
        <Icon name="facebook" size={30} color="#000000" style={styles.socialIcon} />
      </View>

      <TouchableOpacity style={styles.newUserSignUp} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.newUserSignUpText}>New User? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000000',
    fontFamily: 'Poppins',
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    fontFamily: 'Poppins',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 8,
    fontSize: 14,
    color: '#000000',
    fontFamily: 'Poppins',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 30,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.5)',
    fontFamily: 'Poppins',
  },
  primaryButton: {
    backgroundColor: '#FFCB47',
    paddingVertical: 15,
    paddingHorizontal: 140,
    borderRadius: 8,
    marginTop: 20,
    borderColor: '#000000',
    borderWidth: 1.5,
  },
  buttonText: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
  },
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: '#000000',
    marginHorizontal: 10,
  },
  signInWith: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    fontFamily: 'Poppins',
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginTop: 10,
  },
  socialIcon: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
  },
  newUserSignUp: {
    marginTop: 20,
  },
  newUserSignUpText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    fontFamily: 'Poppins',
  },
});

export default LoginScreen;