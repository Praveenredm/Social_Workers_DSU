import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Compartment({ navigation }) {
  const [totalCompartments, setTotalCompartments] = useState(14);
  const [general, setGeneral] = useState("");
  const [sleeper, setSleeper] = useState("");
  const [tier3, setTier3] = useState("");
  const [tier2, setTier2] = useState("");
  const [tier1, setTier1] = useState("");

  // Functions to handle increment and decrement
  const incrementCompartments = () => {
    setTotalCompartments(totalCompartments + 1);
  };

  const decrementCompartments = () => {
    if (totalCompartments > 0) {
      setTotalCompartments(totalCompartments - 1);
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
      <Text style={styles.heading}>Compartment</Text>
      <Text style={styles.subHeading}>Details</Text>

      {/* Number Input with Up/Down */}
      <View style={styles.numberRow}>
        <Text style={styles.label}>Enter Total no. of compartments</Text>
        <View style={styles.numberBox}>
          <Text style={styles.numberText}>{totalCompartments}</Text>
          <View style={styles.arrowContainer}>
            <TouchableOpacity onPress={incrementCompartments}>
              <Ionicons name="chevron-up" size={20} color="#2C4A7A" />
            </TouchableOpacity>
            <TouchableOpacity onPress={decrementCompartments}>
              <Ionicons name="chevron-down" size={20} color="#2C4A7A" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Input Fields */}
      <TextInput
        placeholder="Enter Total no. of General"
        style={styles.inputBox}
        keyboardType="numeric"
        value={general}
        onChangeText={setGeneral}
      />
      <TextInput
        placeholder="Enter Total no. of Sleeper"
        style={styles.inputBox}
        keyboardType="numeric"
        value={sleeper}
        onChangeText={setSleeper}
      />
      <TextInput
        placeholder="Enter Total no. of 3-tier AC"
        style={styles.inputBox}
        keyboardType="numeric"
        value={tier3}
        onChangeText={setTier3}
      />
      <TextInput
        placeholder="Enter Total no. of 2-Tier"
        style={styles.inputBox}
        keyboardType="numeric"
        value={tier2}
        onChangeText={setTier2}
      />
      <TextInput
        placeholder="Enter Total no. of 1-Tier"
        style={styles.inputBox}
        keyboardType="numeric"
        value={tier1}
        onChangeText={setTier1}
      />

      {/* View Button */}
      <TouchableOpacity style={styles.viewButton}>
        <Text style={styles.viewText}>VIEW</Text>
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home-outline" size={22} color="white" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="document-text-outline" size={22} color="white" />
          <Text style={styles.navText}>Complaint</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="notifications-outline" size={22} color="white" />
          <Text style={styles.navText}>Notify</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="mail-outline" size={22} color="white" />
          <Text style={styles.navText}>Inbox</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={22} color="white" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
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
  },
  heading: { fontSize: 28, fontWeight: "bold", color: "#2C4A7A" },
  subHeading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2C4A7A",
    marginBottom: 20,
  },
  numberRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  label: { fontSize: 16, fontWeight: "500" },
  numberBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  numberText: { fontSize: 18, fontWeight: "bold", marginRight: 8 },
  arrowContainer: { justifyContent: "center" },
  inputBox: {
    backgroundColor: "#F2F2F2",
    borderRadius: 10,
    padding: 14,
    marginBottom: 15,
    fontSize: 16,
  },
  viewButton: {
    backgroundColor: "#2C4A7A",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 10,
  },
  viewText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#2C4A7A",
    paddingVertical: 12,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: { alignItems: "center" },
  navText: { color: "white", fontSize: 12, marginTop: 2 },
});
