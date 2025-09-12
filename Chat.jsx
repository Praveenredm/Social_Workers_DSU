import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Chat() {
  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <View style={styles.topContainer}>
        <Image
          source={{
            uri: "https://randomuser.me/api/portraits/men/32.jpg", // Replace with actual image
          }}
          style={styles.profileImage}
        />
      </View>

      {/* Chat Bubbles */}
      <View style={styles.messageContainer}>
        <View style={styles.messageBubble}>
          <Text style={styles.messageText}>person entered without ticket</Text>
        </View>
        <View style={styles.messageBubble}>
          <Text style={styles.messageText}>Compartment number S3</Text>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="train-outline" size={22} color="#2C4A7A" />
        <TextInput placeholder="Search" style={styles.searchInput} />
        <TouchableOpacity>
          <Ionicons name="search" size={22} color="#2C4A7A" />
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={22} color="#fff" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="clipboard-outline" size={22} color="#fff" />
          <Text style={styles.navText}>Complaint</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="notifications-outline" size={22} color="#fff" />
          <Text style={styles.navText}>Notify</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="mail-outline" size={22} color="#fff" />
          <Text style={styles.navText}>Inbox</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={22} color="#fff" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 10 },
  topContainer: { alignItems: "flex-end", marginVertical: 10 },
  profileImage: { width: 100, height: 100, borderRadius: 10 },

  messageContainer: { marginVertical: 20 },
  messageBubble: {
    backgroundColor: "#2C4A7A",
    padding: 12,
    borderRadius: 10,
    marginVertical: 6,
    alignSelf: "flex-start",
  },
  messageText: { color: "#fff", fontSize: 16 },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    borderRadius: 15,
    padding: 10,
    marginTop: "auto",
    marginBottom: 60, // leave space above nav bar
  },
  searchInput: { flex: 1, marginHorizontal: 8, fontSize: 16 },

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
  navText: { color: "#fff", fontSize: 12, marginTop: 2 },
});
