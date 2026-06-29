import { useContext, createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const BillContext = createContext();

export const BillContextProvider = ({ children }) => {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    loadBills();
  }, []);

  //lưu dữ liệu khi mở app
  const loadBills = async () => {
    const savedBill = await AsyncStorage.getItem("bills");

    if (savedBill) {
      setBills(JSON.parse(savedBill));
    }
  };

  //kho thêm mới dữ liệu
  const addBill = async (newBill) => {
    const updateBills = [...bills, newBill]; //tạo dữ liệu mới từ object sẵn có

    setBills(updateBills);

    await AsyncStorage.setItem("bills", JSON.stringify(updateBills));
  };

  //kho sửa dữ liệu
  const updateBill = async (updatedBill) => {
    const newBills = bills.map((bill) => {
      if (bill.id === updatedBill.id) return updatedBill; //nếu id object trùng với id cần sửa thì cho phép sửa, không thì trả về danh sách bill đã có

      return bill;
    });
    setBills(newBills);
    await AsyncStorage.setItem("bills", JSON.stringify(newBills));
  };

  //xoá dữ liệu
  const deleteBill = async (id) => {
    const updateBills = bills.filter((bill) => {
      return bill.id !== id; //duyệt object chỉ giữ lại id giống, khác id thì xoá
    });
    setBills(updateBills); //cập nhật lại danh sách bills
    await AsyncStorage.setItem("bills", JSON.stringify(updateBills));
  };

  //tính tổng tiền
  const totalBills = bills.reduce((currentTotal, bill) => {
    return currentTotal + Number(bill.amount); //convert sang số để tính tổng
  }, 0);

  return (
    <BillContext.Provider
      value={{ bills, addBill, totalBills, deleteBill, updateBill }}
    >
      {children}
    </BillContext.Provider>
  );
};

export const useBillContext = () => useContext(BillContext);
