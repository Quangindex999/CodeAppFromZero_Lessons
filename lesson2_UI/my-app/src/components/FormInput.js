import React from "react";
import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";
import { Fontisto } from "@expo/vector-icons";

export default function FormInput({ label, showIcon }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
        {showIcon && (
          <Fontisto style={styles.icon} name="date" color="#000" size={24} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    marginHorizontal: 35,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
  },

  input: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    height: 60,
    borderRadius: 12,
    shadowColor: "#f5f5f5",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  icon: {
    paddingHorizontal: 12,
    color: "#009626",
  },
});
