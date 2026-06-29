import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
export default function ButtonCreateBill({ onPress, title }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: 35,
  },
  button: {
    height: 60,
    backgroundColor: "#009626",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  buttonText: {
    color: "#fff",
    fontWeight: 500,
    fontSize: 18,
  },
});
