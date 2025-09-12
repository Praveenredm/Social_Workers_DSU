// Register.jsx
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
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import LottieView from "lottie-react-native";

export default function Register() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [tteId, setTteId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleRegister = async () => {
    if (!email || !name || !tteId || !password || !confirmPassword) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(userCredential.user, { displayName: name });

      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
        navigation.replace("MainPage"); // ✅ go to MainPage
      }, 2500);
    } catch (error) {
      Alert.alert("Registration Failed", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={22} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.title}>Create{"\n"}a Profile</Text>

      {/* Inputs */}
      <View style={styles.inputContainer}>
        <MaterialIcons name="email" size={22} color="#1E3A8A" style={styles.icon} />
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons name="person" size={22} color="#1E3A8A" style={styles.icon} />
        <TextInput
          placeholder="Full Name"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons name="badge" size={22} color="#1E3A8A" style={styles.icon} />
        <TextInput
          placeholder="TTE ID"
          style={styles.input}
          value={tteId}
          onChangeText={setTteId}
        />
      </View>

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

      <View style={styles.inputContainer}>
        <MaterialIcons name="lock" size={22} color="#1E3A8A" style={styles.icon} />
        <TextInput
          placeholder="Confirm Password"
          secureTextEntry={!confirmPasswordVisible}
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity
          onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
        >
          <Ionicons
            name={confirmPasswordVisible ? "eye" : "eye-off"}
            size={20}
            color="#555"
          />
        </TouchableOpacity>
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Create Profile</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        I Already Have an Account{" "}
        <Text style={styles.loginLink} onPress={() => navigation.navigate("Login")}>
          Login
        </Text>
      </Text>

      {/* Success Animation */}
      <Modal transparent visible={showSuccess}>
        <View style={styles.modalContainer}>
          <View style={styles.successBox}>
            <LottieView
              source={{ uri: "https://lottie.host/6f41f399-46c3-4e1d-b2e3-6584cacf3c56/eDbagwyj9r.json" }}
              autoPlay
              loop={false}
              style={{ width: 150, height: 150 }}
            />
            <Text style={styles.successText}>🎉 Profile Registered Successfully!</Text>
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
  footer: { textAlign: "center", fontSize: 14, color: "#555" },
  loginLink: { color: "#1E3A8A", fontWeight: "bold" },
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
