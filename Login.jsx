// Login.jsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Modal,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./firebase";
import LottieView from "lottie-react-native";

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [tteId, setTteId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  const handleLogin = async () => {
    if (!email || !tteId || !password) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);

      setSuccessModal(true);

      setTimeout(() => {
        setSuccessModal(false);
        navigation.replace("MainPage"); // ✅ direct to MainPage
      }, 2500);
    } catch (error) {
      Alert.alert("Login Failed", error.message);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      Alert.alert("Input Required", "Please enter your email first.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert(
        "Password Reset Email Sent",
        "Check your inbox for instructions to reset your password."
      );
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={22} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.title}>Login{"\n"}TTE</Text>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <MaterialIcons name="email" size={22} color="#1E3A8A" style={styles.icon} />
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* TTE ID Input */}
      <View style={styles.inputContainer}>
        <MaterialIcons name="badge" size={22} color="#1E3A8A" style={styles.icon} />
        <TextInput
          placeholder="TTE ID"
          style={styles.input}
          value={tteId}
          onChangeText={setTteId}
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <MaterialIcons name="lock" size={22} color="#1E3A8A" style={styles.icon} />
        <TextInput
          placeholder="Password"
          secureTextEntry={!passwordVisible}
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Ionicons name={passwordVisible ? "eye" : "eye-off"} size={20} color="#555" />
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Footer with Register */}
      <Text style={styles.footer}>
        Don’t have an account?{" "}
        <Text style={styles.signupLink} onPress={() => navigation.navigate("Register")}>
          Register
        </Text>
      </Text>

      {/* Forgot Password */}
      <Text style={styles.forgotPassword} onPress={handleForgotPassword}>
        Forgot Password?
      </Text>

      {/* Success Modal */}
      <Modal transparent visible={successModal}>
        <View style={styles.modalContainer}>
          <View style={styles.successBox}>
            <LottieView
              source={{
                uri: "https://lottie.host/6f41f399-46c3-4e1d-b2e3-6584cacf3c56/eDbagwyj9r.json",
              }}
              autoPlay
              loop={false}
              style={{ width: 150, height: 150 }}
            />
            <Text style={styles.successText}>🎉 Welcome Back! Login Successful</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20, paddingTop: 60 },
  backButton: {
    backgroundColor: "#1E3A8A",
    padding: 10,
    borderRadius: 10,
    width: 45,
    alignItems: "center",
    marginBottom: 20,
  },
  title: { fontSize: 28, fontWeight: "bold", color: "#1E3A8A", marginBottom: 30 },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    height: 55,
  },
  icon: { marginRight: 10 },
  input: { flex: 1, fontSize: 16 },
  button: {
    backgroundColor: "#1E3A8A",
    paddingVertical: 15,
    borderRadius: 50,
    marginVertical: 20,
    alignItems: "center",
    elevation: 3,
  },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  footer: { textAlign: "center", fontSize: 14, color: "#555", marginTop: 10 },
  signupLink: { color: "#1E3A8A", fontWeight: "bold" },
  forgotPassword: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 14,
    fontWeight: "bold",
    color: "#E53935",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  successBox: {
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 20,
    alignItems: "center",
    width: 280,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 6,
  },
  successText: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: "600",
    color: "#1E3A8A",
    textAlign: "center",
  },
});
