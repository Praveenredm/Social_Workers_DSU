// TwoTierAc.js
import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function TwoTierAc({ navigation }) {
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Example seat arrangement (2-tier left side berths)
  const seats = ["A1", "A2", "A3", "A4", "B1", "B2", "B3", "B4", "C1", "C2"];

  // Reserved & Emergency exit seats
  const reservedSeats = ["B2", "C1"];
  const exitSeats = ["A1", "C2"];

  const toggleSeat = (seat) => {
    if (reservedSeats.includes(seat)) return; // reserved seats cannot be selected
    if (exitSeats.includes(seat)) return; // exit seats are fixed

    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>AC 2-Tier</Text>
      </View>

      {/* Legends */}
      <View style={styles.legends}>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: "#2563eb" }]} />
          <Text>Selected</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: "#6b7280" }]} />
          <Text>Emergency Exit</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: "#d1d5db" }]} />
          <Text>Reserved</Text>
        </View>
      </View>

      {/* Seat Layout */}
      <ScrollView contentContainerStyle={styles.seatContainer}>
        {seats.map((seat, index) => {
          const isReserved = reservedSeats.includes(seat);
          const isExit = exitSeats.includes(seat);
          const isSelected = selectedSeats.includes(seat);

          return (
            <View key={seat} style={styles.row}>
              {/* Left side seat */}
              <TouchableOpacity
                style={[
                  styles.seat,
                  isReserved && { backgroundColor: "#d1d5db" },
                  isExit && { backgroundColor: "#6b7280" },
                  isSelected && { backgroundColor: "#2563eb" },
                ]}
                onPress={() => toggleSeat(seat)}
                disabled={isReserved || isExit}
              >
                <Text style={styles.seatText}>{seat}</Text>
              </TouchableOpacity>

              {/* Empty middle aisle */}
              <View style={styles.aisle} />

              {/* Empty right side */}
              <View style={styles.rightEmpty} />
            </View>
          );
        })}
      </ScrollView>

      {/* Footer Buttons */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.footerBtn, { backgroundColor: "#d1d5db" }]}
        >
          <Text style={styles.footerText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.footerBtn, { backgroundColor: "#2563eb" }]}
        >
          <Text style={[styles.footerText, { color: "#fff" }]}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f8ff" },
  header: { flexDirection: "row", alignItems: "center", padding: 20 },
  backBtn: { backgroundColor: "#1e3a8a", padding: 10, borderRadius: 10 },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginLeft: 15,
    color: "#1e3a8a",
  },
  legends: { flexDirection: "row", justifyContent: "center", marginBottom: 10 },
  legendItem: { flexDirection: "row", alignItems: "center", marginHorizontal: 10 },
  legendDot: { width: 12, height: 12, borderRadius: 6, marginRight: 5 },
  seatContainer: { padding: 20 },
  row: { flexDirection: "row", alignItems: "center", marginBottom: 15 },
  seat: {
    width: 200,
    height: 45,
    backgroundColor: "#e5e7eb",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  seatText: { fontWeight: "bold", color: "#1e3a8a" },
  aisle: { flex: 1 },
  rightEmpty: { width: 80, height: 45 },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  footerBtn: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: "center",
  },
  footerText: { fontSize: 16, fontWeight: "bold" },
});
