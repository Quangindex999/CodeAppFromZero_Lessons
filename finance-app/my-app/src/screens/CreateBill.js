import { useEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import Header from "../components/Header";
import FormInput from "../components/FormInput";
import ButtonCreateBill from "../components/ButtonCreateBill";
import { SafeAreaView } from "react-native-safe-area-context";
import { useBillContext } from "../components/BillContext";
import { useNavigation, useRoute } from "@react-navigation/native";
const CreateBill = () => {
  const route = useRoute(); //khai báo navigation route
  const navigation = useNavigation();

  const { addBill, bills, updateBill } = useBillContext();
  const { billId } = route.params ?? {}; //đọc xem nếu có billId có thì đang sửa ko thì tạo mới
  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const findBill = bills.find((bill) => {
    return bill.id === billId; //tìm và duyệt bill và trả về bill có id đã tìm thấy
  });
  const headerTitle = findBill ? "Edit Bill" : "Income";
  const buttonTitle = findBill ? "Update" : "Create";

  //form có dữ liệu cũ và mỗi lần chạy phụ thuộc vào findBill
  useEffect(() => {
    if (!findBill) return;

    //nếu tìm thấy thì sửa
    setAmount(findBill.amount.toString());
    setTitle(findBill.title);
    setDate(findBill.date);
  }, [findBill]);

  const handleCreateBill = async () => {
    if (!amount.trim() || !title.trim() || !date.trim()) {
      Alert.alert("Vui lòng nhập đầy đủ");
      return;
    }
    const amountNumber = Number(amount);
    if (Number.isNaN(amountNumber)) {
      Alert.alert("Số tiền phải là số");
      return;
    }

    if (amountNumber <= 0) {
      Alert.alert("Số tiền phải lớn hơn 0");
      return;
    }

    //nếu findBill tồn tại thì sửa, ko thì tạo mới
    if (findBill) {
      const billUpdate = {
        id: findBill.id, //cần giữ nguyên nếu ko sẽ là tạo mới
        amount: amountNumber,
        title,
        date,
      };
      await updateBill(billUpdate);
    } else {
      const newBill = {
        id: Date.now(),
        amount: amountNumber,
        title,
        date,
      };
      await addBill(newBill);
    }

    navigation.goBack();
  };

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
