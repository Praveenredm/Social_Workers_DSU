import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Lottie Animation and Title */}
      <View style={styles.header}>
        <LottieView
          source={{
            uri: "https://lottie.host/29c68029-cedf-4734-9a18-9be2ee42bd25/tlyktvHf1v.json",
          }}
          autoPlay
          loop
          style={styles.lottie}
        />

        <Text style={styles.title}>SMART TRAIN TICKET{"\n"}VERIFICATION</Text>
        <Text style={styles.subtitle}>EXPRESS</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>LOGIN TTE</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.buttonText}>NEW REGISTER TTE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 60,
  },
  header: {
    alignItems: "center",
  },
  lottie: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1E3A8A",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 8,
    color: "#000",
  },
  buttonContainer: {
    width: "80%",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#1E3A8A",
    paddingVertical: 15,
    borderRadius: 50,
    marginVertical: 10,
    alignItems: "center",
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});
