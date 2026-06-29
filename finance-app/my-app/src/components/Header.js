import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Header({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "rgb(74, 188, 103)",
    height: 100,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 30,
  },
  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
});
