import { useEffect, useState, useCallback, useMemo } from "react";
import { Alert, StyleSheet, View } from "react-native";
import Header from "../components/Header";
import { FormInput, ButtonCreateBill } from "../components";
import { SafeAreaView } from "react-native-safe-area-context";
import { useBillContext } from "../components/BillContext";
import { useNavigation, useRoute } from "@react-navigation/native";

const CreateBill = () => {
  const route = useRoute(); //Declare navigation route
  const navigation = useNavigation();

  const { addBill, bills, updateBill } = useBillContext();
  const { billId } = route.params ?? {}; // check billId if it exists then edit, otherwise create
  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  // find bill to edit(if any)
  //useMemo to memoize the findBill function
  const findBill = useMemo(() => {
    return bills.find((bill) => bill.id === billId);
  }, [bills, billId]); //only re-run the function when bills or billId change
  const headerTitle = findBill ? "Edit Bill" : "Income";
  const buttonTitle = findBill ? "Update" : "Create";

  // Pre-fill form with existing data when editing
  useEffect(() => {
    if (!findBill) return;
    setAmount(findBill.amount.toString());
    setTitle(findBill.title);
    setDate(findBill.date);
  }, [findBill]);

  const handleCreateBill = useCallback(async () => {
    // validation
    if (!amount.trim() || !title.trim() || !date.trim()) {
      Alert.alert("Please fill in all fields");
      return;
    }
    const amountNumber = Number(amount);
    if (Number.isNaN(amountNumber)) {
      Alert.alert("Amount must be a number");
      return;
    }
    if (amountNumber <= 0) {
      Alert.alert("Amount must be greater than 0");
      return;
    }

    if (findBill) {
      const billUpdate = {
        id: findBill.id, // keep the id to update the correct bill
        amount: amountNumber,
        title,
        date,
      };
      await updateBill(billUpdate);
    } else {
      const newBill = {
        id: Date.now(), // create a new id
        amount: amountNumber,
        title,
        date,
      };
      await addBill(newBill);
    }

    navigation.goBack(); // go back to the previous screen
  }, [amount, title, date, findBill, navigation, addBill, updateBill]); //only create a new function when dependency array change

  return (
    <SafeAreaView style={styles.screen} edges={["top"]}>
      <Header title={headerTitle} />
      <View style={styles.card}>
        <View>
          <FormInput
            label={"Số tiền"}
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
          />
          <FormInput label={"Nội dung"} value={title} onChangeText={setTitle} />
          <FormInput
            label={"Thời gian"}
            showIcon={true}
            value={date}
            onChangeText={setDate}
          />
        </View>
        <View>
          <ButtonCreateBill title={buttonTitle} onPress={handleCreateBill} />
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
