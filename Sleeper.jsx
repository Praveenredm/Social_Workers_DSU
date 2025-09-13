// Sleeper.jsx
import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Sleeper({ navigation }) {
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Sleeper layout (longer rows compared to General)
  const seats = [
    ["S1", "S2", "S3", "S4"],
    ["S5", "S6", "S7", "S8"],
    ["S9", "S10", "S11", "S12"],
    ["S13", "S14", "S15", "S16"],
    ["S17", "S18", "S19", "S20"],
    ["S21", "S22", "S23", "S24"],
  ];

  // Reserved seats
  const reservedSeats = ["S4", "S7", "S10", "S15", "S18", "S22"];

  const toggleSeat = (seat) => {
    if (reservedSeats.includes(seat)) return; // reserved cannot be selected

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
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Sleeper Class</Text>
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
        {/* Exit Row Label */}
        <Text style={styles.exitRow}>ⓘ Exit row</Text>

        {seats.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.seatRow}>
            {row.map((seat) => {
              const isReserved = reservedSeats.includes(seat);
              const isSelected = selectedSeats.includes(seat);

              return (
                <TouchableOpacity
                  key={seat}
                  style={[
                    styles.seat,
                    isReserved && { backgroundColor: "#d1d5db" },
                    isSelected && { backgroundColor: "#2563eb" },
                  ]}
                  onPress={() => toggleSeat(seat)}
                  disabled={isReserved}
                >
                  <Text style={styles.seatText}>{seat}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}

        {/* Exit Row Label */}
        <Text style={styles.exitRow}>ⓘ Exit row</Text>
      </ScrollView>

      {/* Footer Buttons */}
      <View style={styles.footer}>
        <TouchableOpacity style={[styles.footerBtn, { backgroundColor: "#d1d5db" }]}>
          <Text style={styles.footerText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.footerBtn, { backgroundColor: "#2563eb" }]}>
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
  headerTitle: { fontSize: 28, fontWeight: "bold", marginLeft: 15, color: "#1e3a8a" },
  legends: { flexDirection: "row", justifyContent: "center", marginBottom: 10 },
  legendItem: { flexDirection: "row", alignItems: "center", marginHorizontal: 10 },
  legendDot: { width: 12, height: 12, borderRadius: 6, marginRight: 5 },
  seatContainer: { alignItems: "center", padding: 20 },
  seatRow: { flexDirection: "row", marginBottom: 15 },
  seat: {
    width: 65,
    height: 55,
    backgroundColor: "#e5e7eb",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginHorizontal: 8,
  },
  seatText: { fontWeight: "bold", color: "#1e3a8a" },
  exitRow: { color: "#6b7280", fontSize: 12, marginVertical: 5 },
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
