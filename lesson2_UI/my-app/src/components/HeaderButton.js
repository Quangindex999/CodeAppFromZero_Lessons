import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
export default function HeaderButton() {
  return (
    <View style={styles.headerButtonsRow}>
      <Pressable style={styles.headerButton}>
        <Text style={styles.headerButtonText}>Income</Text>
        <Ionicons name="chevron-down-sharp" color="#fff" size={16} />
      </Pressable>
      <Pressable style={styles.headerButton}>
        <Text style={styles.headerButtonText}>Month</Text>
        <Ionicons name="chevron-down-sharp" color="#fff" size={16} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  headerButtonsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  headerButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 15,
  },
  headerButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
});
