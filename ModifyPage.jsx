import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ModifyPage({ navigation }) {
  const [trainNo, setTrainNo] = useState("");
  const [purpose, setPurpose] = useState("");

  const handleEnter = () => {
    if (trainNo.trim() && purpose.trim()) {
      // Navigate and send data to Compartment page
      navigation.navigate("Compartment", {
        trainNo,
        purpose,
      });
    } else {
      alert("Please enter Train No and Purpose");
    }
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back" size={24} color="white" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.heading}>TRAIN</Text>
      <Text style={styles.subHeading}>Modification</Text>

      {/* Input Fields */}
      <View style={styles.inputBox}>
        <Ionicons name="train-outline" size={20} color="#2C4A7A" />
        <TextInput
          placeholder="Enter Train no"
          style={styles.input}
          value={trainNo}
          onChangeText={setTrainNo}
        />
      </View>

      <View style={styles.inputBox}>
        <Ionicons name="clipboard-outline" size={20} color="#2C4A7A" />
        <TextInput
          placeholder="Purpose"
          style={styles.input}
          value={purpose}
          onChangeText={setPurpose}
        />
      </View>

      {/* Enter Button */}
      <TouchableOpacity style={styles.enterButton} onPress={handleEnter}>
        <Text style={styles.enterText}>ENTER</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  backButton: {
    backgroundColor: "#2C4A7A",
    borderRadius: 10,
    padding: 8,
    width: 40,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 4,
  },
  heading: { fontSize: 28, fontWeight: "bold", color: "#2C4A7A" },
  subHeading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2C4A7A",
    marginBottom: 30,
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
  },
  input: { flex: 1, marginLeft: 10, fontSize: 16 },
  enterButton: {
    backgroundColor: "#2C4A7A",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 10,
  },
  enterText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
