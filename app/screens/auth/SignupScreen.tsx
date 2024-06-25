import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';

type Props = StackScreenProps<RootStackParamList, 'Signup'>;

const SignupScreen: React.FC<Props> = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [officialEmail, setOfficialEmail] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSignup = () => {
    // Handle signup logic 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's Sign Up :)</Text>
      <Text style={styles.label}>Full Name</Text>
      <View style={styles.inputWithButton}>
      <TextInput
        style={styles.input}
        placeholder="Write your Name"
        value={fullName}
        onChangeText={setFullName}
      />
      </View>

      <Text style={styles.label}>Mobile</Text>
      <View style={styles.inputWithButton}>
        <TextInput
          style={styles.input}
          placeholder="Write Mobile Number"
          value={mobileNumber}
          onChangeText={setMobileNumber}
          keyboardType="phone-pad"
        />
        
      </View>

      <Text style={styles.label}>Official Email</Text>
      <View style={styles.inputWithButton}>
        <TextInput
          style={styles.input}
          placeholder="Write your Email"
          value={officialEmail}
          onChangeText={setOfficialEmail}
          keyboardType="email-address"
        />
        
      </View>

      

      <TouchableOpacity style={styles.primaryButton} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.signupWithContainer}>
        <View style={styles.line}></View>
        <Text style={styles.signupWithText}>Sign Up with</Text>
        <View style={styles.line}></View>
      </View>
      <View style={styles.socialIconsContainer}>
        <Icon name="twitter" size={30} color="#000000" style={styles.socialIcon} />
        <Icon name="linkedin" size={30} color="#000000" style={styles.socialIcon} />
        <Icon name="google" size={30} color="#000000" style={styles.socialIcon} />
        <Icon name="facebook" size={30} color="#000000" style={styles.socialIcon} />
      </View>

     

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
  },
  input: {
    flex: 1,
    padding: 11,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 8,
    fontSize: 16,
    color: '#000000',
  },
  inputWithButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  primaryButton1: {
    marginLeft: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#000000',
    backgroundColor: '#FFFFFF',
  },
  primaryButton2: {
    marginLeft: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#000000',
    backgroundColor: '#FFFFFF',
  },
  buttonText1: {
    fontSize: 14,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 0.5)',
  },
  buttonText2: {
    fontSize: 14,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 0.5)',
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
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
  },
  signupWithContainer: {
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
  signupWithText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
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
});

export default SignupScreen;