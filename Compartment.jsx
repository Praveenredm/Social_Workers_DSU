import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Compartment({ navigation }) {
  const [totalCompartments, setTotalCompartments] = useState(14);
  const [general, setGeneral] = useState(0);
  const [sleeper, setSleeper] = useState(0);
  const [tier3, setTier3] = useState(0);
  const [tier2, setTier2] = useState(0);
  const [tier1, setTier1] = useState(0);

  // Reusable increment/decrement
  const increment = (setter, value) => setter(value + 1);
  const decrement = (setter, value) => {
    if (value > 0) setter(value - 1);
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

      {/* Total Compartments */}
      <View style={styles.numberRow}>
        <Text style={styles.label}>Total Compartments</Text>
        <View style={styles.numberBox}>
          <Text style={styles.numberText}>{totalCompartments}</Text>
          <View style={styles.arrowContainer}>
            <TouchableOpacity
              onPress={() => increment(setTotalCompartments, totalCompartments)}
            >
              <Ionicons name="chevron-up" size={20} color="#2C4A7A" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => decrement(setTotalCompartments, totalCompartments)}
            >
              <Ionicons name="chevron-down" size={20} color="#2C4A7A" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* General */}
      <TouchableOpacity
        style={styles.optionRow}
        onPress={() => navigation.navigate("General")}
      >
        <Text style={styles.label}>General</Text>
        <View style={styles.numberBox}>
          <Text style={styles.numberText}>{general}</Text>
          <View style={styles.arrowContainer}>
            <TouchableOpacity onPress={() => increment(setGeneral, general)}>
              <Ionicons name="chevron-up" size={20} color="#2C4A7A" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => decrement(setGeneral, general)}>
              <Ionicons name="chevron-down" size={20} color="#2C4A7A" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>

      {/* Sleeper */}
      <TouchableOpacity
        style={styles.optionRow}
        onPress={() => navigation.navigate("Sleeper")}
      >
        <Text style={styles.label}>Sleeper</Text>
        <View style={styles.numberBox}>
          <Text style={styles.numberText}>{sleeper}</Text>
          <View style={styles.arrowContainer}>
            <TouchableOpacity onPress={() => increment(setSleeper, sleeper)}>
              <Ionicons name="chevron-up" size={20} color="#2C4A7A" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => decrement(setSleeper, sleeper)}>
              <Ionicons name="chevron-down" size={20} color="#2C4A7A" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>

      {/* 3-Tier AC */}
      <TouchableOpacity
        style={styles.optionRow}
        onPress={() => navigation.navigate("ThreeTierAC")}
      >
        <Text style={styles.label}>3-Tier AC</Text>
        <View style={styles.numberBox}>
          <Text style={styles.numberText}>{tier3}</Text>
          <View style={styles.arrowContainer}>
            <TouchableOpacity onPress={() => increment(setTier3, tier3)}>
              <Ionicons name="chevron-up" size={20} color="#2C4A7A" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => decrement(setTier3, tier3)}>
              <Ionicons name="chevron-down" size={20} color="#2C4A7A" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>

      {/* 2-Tier */}
      <TouchableOpacity
        style={styles.optionRow}
        onPress={() => navigation.navigate("TwoTier")}
      >
        <Text style={styles.label}>2-Tier</Text>
        <View style={styles.numberBox}>
          <Text style={styles.numberText}>{tier2}</Text>
          <View style={styles.arrowContainer}>
            <TouchableOpacity onPress={() => increment(setTier2, tier2)}>
              <Ionicons name="chevron-up" size={20} color="#2C4A7A" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => decrement(setTier2, tier2)}>
              <Ionicons name="chevron-down" size={20} color="#2C4A7A" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>

      {/* 1-Tier */}
      <TouchableOpacity
        style={styles.optionRow}
        onPress={() => navigation.navigate("OneTier")}
      >
        <Text style={styles.label}>1-Tier</Text>
        <View style={styles.numberBox}>
          <Text style={styles.numberText}>{tier1}</Text>
          <View style={styles.arrowContainer}>
            <TouchableOpacity onPress={() => increment(setTier1, tier1)}>
              <Ionicons name="chevron-up" size={20} color="#2C4A7A" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => decrement(setTier1, tier1)}>
              <Ionicons name="chevron-down" size={20} color="#2C4A7A" />
            </TouchableOpacity>
          </View>
        </View>
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
  optionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: "#F2F2F2",
    borderRadius: 10,
  },
  label: { fontSize: 16, fontWeight: "500" },
  numberBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  numberText: { fontSize: 18, fontWeight: "bold", marginRight: 8 },
  arrowContainer: { justifyContent: "center" },
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
