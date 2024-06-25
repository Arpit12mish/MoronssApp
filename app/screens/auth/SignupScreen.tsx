import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Button,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/RootStackParamList";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import {
  signInWithPhoneNumber,
  getAuth,
  PhoneAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import { app } from "../../../firebase";

type Props = StackScreenProps<RootStackParamList, "Signup">;
const auth = getAuth(app);

const { width, height } = Dimensions.get("window");

const SignupScreen: React.FC<Props> = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [officialEmail, setOfficialEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const recaptchaVerifier = React.useRef(null);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const sendVerification = async () => {
    try {
      if (!mobileNumber || !officialEmail || !fullName) {
        setMessage("please enter valid detials");
        return;
      }
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        mobileNumber,
        recaptchaVerifier.current
      );
      setVerificationId(confirmationResult.verificationId);
      setMessage("Verification code has been sent to your phone.");
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  const confirmCode = async () => {
    try {
      const credential = PhoneAuthProvider.credential(
        verificationId,
        verificationCode
      );
      await signInWithCredential(auth, credential);
      alert("Phone authentication successful!");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={app.options}
      />

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

      {/* Button to send verification code */}
      <TouchableOpacity style={styles.primaryButton} onPress={sendVerification}>
        <Text style={styles.buttonText}>Send Verification Code</Text>
      </TouchableOpacity>

      {/* Input for verification code */}
      {verificationId && (
        <View>
          <Text style={styles.label}>Verification Code</Text>
          <View style={styles.inputWithButton}>
            <TextInput
              style={styles.input}
              placeholder="Enter verification code"
              value={verificationCode}
              onChangeText={setVerificationCode}
              keyboardType="number-pad"
            />
          </View>
          <TouchableOpacity style={styles.primaryButton} onPress={confirmCode}>
            <Text style={styles.buttonText}>Confirm Code</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Message or error display */}
      {message ? <Text style={styles.message}>{message}</Text> : null}
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

      {/* Sign up with social icons */}
      <View style={styles.signupWithContainer}>
        <View style={styles.line}></View>
        <Text style={styles.signupWithText}>Sign Up with</Text>
        <View style={styles.line}></View>
      </View>

      <View style={styles.socialIconsContainer}>
        <Icon
          name="twitter"
          size={30}
          color="#000000"
          style={styles.socialIcon}
        />
        <Icon
          name="linkedin"
          size={30}
          color="#000000"
          style={styles.socialIcon}
        />
        <Icon
          name="google"
          size={30}
          color="#000000"
          style={styles.socialIcon}
        />
        <Icon
          name="facebook"
          size={30}
          color="#000000"
          style={styles.socialIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: width * 0.05,
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: width * 0.06,
    fontWeight: "bold",
    marginBottom: height * 0.02,
    color: "#000000",
  },
  label: {
    alignSelf: "flex-start",
    marginBottom: height * 0.005,
    fontSize: width * 0.04,
    fontWeight: "bold",
    color: "#000000",
  },
  inputWithButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: height * 0.02,
  },
  input: {
    flex: 1,
    padding: width * 0.03,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 8,
    fontSize: width * 0.04,
    color: "#000000",
  },
  primaryButton: {
    backgroundColor: "#FFCB47",
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.35,
    borderRadius: 8,
    marginTop: height * 0.02,
    borderColor: "#000000",
    borderWidth: 1.5,
  },
  buttonText: {
    color: "#000000",
    textAlign: "center",
    fontSize: width * 0.045,
    fontWeight: "bold",
  },
  signupWithContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: height * 0.02,
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: "#000000",
    marginHorizontal: width * 0.02,
  },
  signupWithText: {
    fontSize: width * 0.04,
    fontWeight: "bold",
    color: "#000000",
  },
  socialIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
    marginTop: height * 0.01,
  },
  socialIcon: {
    padding: width * 0.02,
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
  },
  message: {
    marginTop: height * 0.02,
    color: "green",
    fontWeight: "bold",
  },
  error: {
    marginTop: height * 0.02,
    color: "red",
    fontWeight: "bold",
  },
});

export default SignupScreen;
