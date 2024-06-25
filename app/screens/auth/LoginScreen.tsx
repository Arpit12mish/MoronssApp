import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';

type Props = StackScreenProps<RootStackParamList, 'Login'>;

const { width, height } = Dimensions.get('window');

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

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

      <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate('HomeScreen')}>
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
    padding: width * 0.05,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    marginBottom: height * 0.02,
    color: '#000000',
    fontFamily: 'Poppins',
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: height * 0.005,
    fontSize: width * 0.04,
    fontWeight: 'bold',
    color: '#000000',
    fontFamily: 'Poppins',
  },
  inputContainer: {
    width: '100%',
    marginBottom: height * 0.02,
  },
  input: {
    width: '100%',
    padding: width * 0.04,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 8,
    fontSize: width * 0.04,
    color: '#000000',
    fontFamily: 'Poppins',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: height * 0.03,
  },
  forgotPasswordText: {
    fontSize: width * 0.035,
    color: 'rgba(0, 0, 0, 0.5)',
    fontFamily: 'Poppins',
  },
  primaryButton: {
    backgroundColor: '#FFCB47',
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.35,
    borderRadius: 8,
    marginTop: height * 0.02,
    borderColor: '#000000',
    borderWidth: 1.5,
  },
  buttonText: {
    color: '#000000',
    textAlign: 'center',
    fontSize: width * 0.045,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
  },
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: height * 0.02,
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: '#000000',
    marginHorizontal: width * 0.02,
  },
  signInWith: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    color: '#000000',
    fontFamily: 'Poppins',
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginTop: height * 0.01,
  },
  socialIcon: {
    padding: width * 0.02,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
  },
  newUserSignUp: {
    marginTop: height * 0.02,
  },
  newUserSignUpText: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    color: '#000000',
    fontFamily: 'Poppins',
  },
});

export default LoginScreen;