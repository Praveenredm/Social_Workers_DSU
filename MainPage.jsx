// MainPage.jsx
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function MainPage() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Image
          source={{
            uri: "https://i.pravatar.cc/100?img=12", // Replace with real user image
          }}
          style={styles.profileImage}
        />
        <Text style={styles.username}>Logesh</Text>
        <Ionicons name="notifications-outline" size={24} color="#fff" />
      </View>

      {/* Card Buttons */}
      <View style={styles.grid}>
        {/* Row 1 */}
        <View style={styles.row}>
          <View style={styles.card}>
            <Image
              source={{ uri: "https://cdn-icons-png.flaticon.com/512/697/697932.png" }}
              style={styles.cardImage}
            />
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.cardButtonText}>INCHARGE</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.card}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/744/744465.png",
              }}
              style={styles.cardImage}
            />
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.cardButtonText}>MODIFY</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Row 2 */}
        <View style={styles.row}>
          <View style={styles.card}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/2088/2088617.png",
              }}
              style={styles.cardImage}
            />
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.cardButtonText}>PAST ACTIVITIES</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.card}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/709/709496.png",
              }}
              style={styles.cardImage}
            />
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.cardButtonText}>FINE CHARGED</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E3A8A",
    padding: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "space-between",
  },
  profileImage: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  username: { color: "#fff", fontSize: 18, fontWeight: "bold", flex: 1 },
  grid: { flex: 1, padding: 20 },
  row: { flexDirection: "row", justifyContent: "space-between", marginBottom: 25 },
  card: {
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
    alignItems: "center",
    padding: 15,
    width: "45%",
    elevation: 4,
  },
  cardImage: { width: 90, height: 90, borderRadius: 15, marginBottom: 10 },
  cardButton: {
    backgroundColor: "#1E3A8A",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 5,
  },
  cardButtonText: { color: "#fff", fontWeight: "bold", textAlign: "center" },
});
