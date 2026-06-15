import React from "react";
import { Pressable, View, Text } from "react-native";
import { useDataContext } from "./MyContext";

export default function Screen2() {
  //   const { soDu } = useDataContext(); //lấy soDu hiển thị ra màn hình
  const { sanPham } = useDataContext();

  //   if (sanPham === "") {
  //     return <Text>Bạn chưa chọn gì cả</Text>;
  //   }
  return (
    // <View>
    //   <Text>Lấy số dư để hiển thị</Text>
    //   <Text>Tổng số dư: {soDu}</Text>
    // </View>
    // <View>
    //   <Text>Sản phẩm bạn đã chọn: {sanPham}</Text>
    // </View>
    // Toán tử ba ngôi:
    <View>
      {sanPham ? (
        <Text>Sản phẩm đã chọn: {sanPham}</Text>
      ) : (
        <Text>Bạn chưa chọn gì cả</Text>
      )}
    </View>
  );
}
