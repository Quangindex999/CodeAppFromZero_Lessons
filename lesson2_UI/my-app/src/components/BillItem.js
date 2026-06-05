import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

export default function BillItem({ title, date, amount, showIcon }) {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>

      <Text style={styles.amount}>{amount}</Text>
      {/* <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Text style={styles.icon}>
            {showIcon && <Ionicons name="add" color="#fff" size={24} />}
          </Text>
        </Pressable>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  date: {
    fontSize: 14,
    color: "#ccc",
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
  },
  // button: {
  //   width: 60,
  //   height: 60,
  //   backgroundColor: "rgb(74, 188, 103)",
  //   borderRadius: 50,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // icon: {
  //   fontSize: 24,
  //   fontWeight: "light",
  //   color: "#fff",
  // },
});
