import React, { memo } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import AntDesign from "react-native-vector-icons/AntDesign";

//memo: remember the BillItem component
//only re-render when props change
const BillItem = memo(({ title, date, amount, onDelete, onEdit }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <View>
        <Text style={styles.amount}>{amount}</Text>
        <Pressable style={styles.btnDelete} onPress={onDelete}>
          <Fontisto name="trash" color="#ff0000" size={18} />
        </Pressable>
        <Pressable style={styles.btnEdit} onPress={onEdit}>
          <AntDesign name="edit" color="#0048ff" size={18} />
        </Pressable>
      </View>
    </View>
  );
});

export default BillItem;

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
  btnDelete: {
    borderWidth: 1,
    borderColor: "red",
    padding: 10,
    borderRadius: 8,
  },
  btnEdit: {
    borderWidth: 1,
    borderColor: "blue",
    padding: 10,
    borderRadius: 8,
  },
});
