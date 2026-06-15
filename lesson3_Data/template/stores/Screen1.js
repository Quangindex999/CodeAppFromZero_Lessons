import React from "react";
import { Pressable, View, Text } from "react-native";
import { useDataContext } from "./MyContext";

export default function Screen1() {
  // const { setSoDu } = useDataContext(); //lấy setSoDu để thay đổi dữ liệu
  const { setSanPham } = useDataContext();
  return (
    // <View>
    //   <Text>Màn hình 1: Chọn món hàng</Text>
    //   <Pressable onPress={() => setSoDu(1000)}>
    //     <Text>Nạp tiền</Text>
    //   </Pressable>
    // </View>
    <View>
      <Text>Màn hình 1: Chọn món hàng</Text>
      <Pressable onPress={() => setSanPham("Táo")}>
        <Text>Chọn Táo</Text>
      </Pressable>
      <Pressable onPress={() => setSanPham("Cam")}>
        <Text>Chọn Cam</Text>
      </Pressable>
    </View>
  );
}
