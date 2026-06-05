import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "../components/Header";
import FormInput from "../components/FormInput";
import ButtonCreateBill from "../components/ButtonCreateBill";
import { SafeAreaView } from "react-native-safe-area-context";
const CreateBill = () => {
  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      <Header title={"Incomes"} />
      <View style={styles.card}>
        <View>
          <FormInput label={"Số tiền"} />
          <FormInput label={"Nội dung"} />
          <FormInput label={"Thời gian"} showIcon={true} />
        </View>
        <View>
          <ButtonCreateBill />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "rgb(74, 188, 103)",
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: "space-between",
  },
});

CreateBill.routeInfo = {
  title: "CreateBill",
  path: "/create-bill",
};

export default CreateBill;
