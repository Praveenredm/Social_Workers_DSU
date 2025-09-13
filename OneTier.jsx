// OneTierAc.js
import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function OneTierAc({ navigation }) {
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Example seat arrangement for 1-tier (fewer and wider berths)
  const seats = ["A1", "A2", "A3", "A4", "A5"];

  // Reserved & Exit row seats
  const reservedSeats = ["A3"];
  const exitSeats = ["A1", "A5"];

  const toggleSeat = (seat) => {
    if (reservedSeats.includes(seat)) return;
    if (exitSeats.includes(seat)) return;

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
        <Text style={styles.headerTitle}>AC 1-Tier</Text>
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
        {seats.map((seat) => {
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

              {/* Right side (empty space) */}
              <View style={styles.rightEmpty} />
            </View>
          );
        })}
      </ScrollView>

      {/* Footer */}
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
  row: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  seat: {
    width: 220,
    height: 50,
    backgroundColor: "#e5e7eb",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  seatText: { fontWeight: "bold", color: "#1e3a8a" },
  aisle: { flex: 1 },
  rightEmpty: { width: 80, height: 50 },
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
