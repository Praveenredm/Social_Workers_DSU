// MainPage.jsx
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";

export default function MainPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.username}>Praveen</Text>
        <Ionicons name="notifications-outline" size={24} color="#fff" />
      </View>

      {/* Card Buttons */}
      <View style={styles.grid}>
        {/* Row 1 */}
        <View style={styles.row}>
          <View style={styles.card}>
            <LottieView
              source={{
                uri: "https://lottie.host/b3e3e8b1-24a3-4572-b356-393ad54842fc/p2wxYrOO3Y.json",
              }}
              autoPlay
              loop
              style={styles.lottie}
            />
            <TouchableOpacity
              style={styles.cardButton}
              onPress={() => navigation.navigate("TakeCharge")}
            >
              <Text style={styles.cardButtonText}>INCHARGE</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.card}>
            <LottieView
              source={{
                uri: "https://lottie.host/9135beef-b037-428f-a118-9c4e186895ae/KDve3X7IXO.json",
              }}
              autoPlay
              loop
              style={styles.lottie}
            />
            <TouchableOpacity
              style={styles.cardButton}
              onPress={() => navigation.navigate("ModifyPage")}
            >
              <Text style={styles.cardButtonText}>MODIFY</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Row 2 */}
        <View style={styles.row}>
          <View style={styles.card}>
            <LottieView
              source={{
                uri: "https://lottie.host/e80880dd-6630-455e-bf27-2bbede84c846/9MO0MXNDwd.json",
              }}
              autoPlay
              loop
              style={styles.lottie}
            />
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.cardButtonText}>PAST ACTIVITIES</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.card}>
            <LottieView
              source={{
                uri: "https://lottie.host/92f1d3a3-8aaf-4e3c-ba42-9e7b8bcfd83f/yffTXm8PSn.json",
              }}
              autoPlay
              loop
              style={styles.lottie}
            />
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.cardButtonText}>FINE CHARGED</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Info Box */}
        <View style={styles.infoBox}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
            }}
            style={styles.profileImage}
          />
          <View style={styles.infoText}>
            <Text style={styles.infoTitle}>TTE ID: 123456</Text>
            <Text style={styles.infoSubtitle}>Username: Praveen</Text>
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
  username: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  grid: { flex: 1, padding: 20 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  card: {
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
    alignItems: "center",
    padding: 15,
    width: "45%",
    elevation: 4,
  },
  lottie: { width: 90, height: 90, marginBottom: 10 },
  cardButton: {
    backgroundColor: "#1E3A8A",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginTop: 5,
  },
  cardButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
  },
  infoBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f4ff",
    borderRadius: 15,
    padding: 15,
    marginTop: 20,
    elevation: 3,
  },
  profileImage: { width: 50, height: 50, borderRadius: 25, marginRight: 15 },
  infoText: { flexDirection: "column" },
  infoTitle: { fontSize: 16, fontWeight: "bold", color: "#1E3A8A" },
  infoSubtitle: { fontSize: 14, color: "#333" },
});
