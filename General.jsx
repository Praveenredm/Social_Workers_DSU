// General.jsx
import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function General({ navigation }) {
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Example seat arrangement
  const seats = [
    ["A1", "A2", "A3", "A4"],
    ["B1", "B2", "B3", "B4"],
    ["C1", "C2", "C3", "C4"],
    ["D1", "D2", "D3", "D4"],
    ["E1", "E2", "E3", "E4"],
    ["F1", "F2", "F3", "F4"],
  ];

  // Reserved seats
  const reservedSeats = ["C1", "C2", "D3", "E4", "F2", "B4"];

  const toggleSeat = (seat) => {
    if (reservedSeats.includes(seat)) return; // reserved seats cannot be selected

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
        <Text style={styles.headerTitle}>General</Text>
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
    width: 55,
    height: 55,
    backgroundColor: "#e5e7eb",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginHorizontal: 8,
  },
  seatText: { fontWeight: "bold", color: "#1e3a8a" },
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
