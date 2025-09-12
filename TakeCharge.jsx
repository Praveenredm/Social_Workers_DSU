import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

export default function TakeCharge({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back" size={24} color="#1E3A8A" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Take{"\n"}Charge !</Text>

      {/* Input fields */}
      <View style={styles.inputBox}>
        <FontAwesome5 name="train" size={18} color="#1E3A8A" style={styles.icon} />
        <TextInput placeholder="Enter Train no" style={styles.input} />
      </View>

      <View style={styles.inputBox}>
        <Ionicons name="person" size={18} color="#1E3A8A" style={styles.icon} />
        <TextInput placeholder="Enter TTE ID" style={styles.input} />
      </View>

      <View style={styles.inputBox}>
        <Ionicons name="lock-closed" size={18} color="#1E3A8A" style={styles.icon} />
        <TextInput placeholder="Enter Password" secureTextEntry style={styles.input} />
      </View>

      {/* Submit button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Chat")} // 👈 Navigate to Chat.jsx
      >
        <Text style={styles.buttonText}>Take Charge</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  backButton: {
    backgroundColor: "#E8ECF4",
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    elevation: 3,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1E3A8A",
    marginBottom: 30,
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 20,
    elevation: 2,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  button: {
    backgroundColor: "#1E3A8A",
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 10,
    elevation: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
