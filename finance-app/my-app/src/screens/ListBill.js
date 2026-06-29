import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BillItem from "../components/BillItem";
import HeaderButton from "../components/HeaderButton";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useBillContext } from "../components/BillContext";
const ListBill = () => {
  const navigation = useNavigation();

  const { bills, totalBills, deleteBill } = useBillContext();
  console.log("Bills:", bills);

  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      <HeaderButton />
      <View style={styles.headerArea}>
        <Text style={styles.headerAreaText}>Total</Text>
        <Text style={styles.headerAreaAmount}>
          {totalBills}
          <Text style={{ fontSize: 16, color: "#b5b5b5", fontWeight: "light" }}>
            .00
          </Text>
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.headerList}>Histrory</Text>
        {/*
          hiển thị danh sách dữ liệu vừa tạo
        */}
        {bills.map((bill) => {
          return (
            <BillItem
              key={bill.id}
              title={bill.title}
              date={bill.date}
              amount={bill.amount}
              onDelete={() => deleteBill(bill.id)}
              onEdit={
                () => navigation.navigate("CreateBill", { billId: bill.id }) //cần biết id nào cần sửa
              }
            />
          );
        })}
      </View>
      <Pressable
        style={styles.fab}
        onPress={() => navigation.navigate("CreateBill")}
      >
        <Ionicons name="add" color="#fff" size={24} />
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "rgb(74, 188, 103)",
  },

  headerArea: {
    height: 170,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 30,
  },
  headerAreaText: {
    fontSize: 18,
    color: "#fff",
    fontFamily: "sans-serif",
  },
  headerAreaAmount: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    gap: 20,
  },
  headerList: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 40,
    marginTop: 20,
  },
  fab: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "rgb(74, 188, 103)",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 30,
    right: 30,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

ListBill.routeInfo = {
  title: "ListBill",
  path: "/list-bill",
};

export default ListBill;
