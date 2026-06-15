## 1, React useEffect:

```javascript
import { useEffect } from "react";
import { useState } from "react";
import { Pressable, View, Text, TextInput } from "react-native";

//bài tập ví dụ 5
const Emergency = () => {
  const [status, setStatus] = useState("OFF");

  useEffect(() => {
    let interval = null;

    if (status === "ON") {
      alert("Cảnh báo: Hệ thống đã kích hoạt!");
      interval = setInterval(() => {
        console.log("Đèn đang sáng");
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [status]);

  return (
    <View>
      <Text style={{ color: status === "ON" ? "red" : "grey" }}>
        Trạng thái {status}
      </Text>

      <Pressable onPress={() => setStatus("ON")}>
        <Text>ON</Text>
      </Pressable>

      <Pressable onPress={() => setStatus("OFF")}>
        <Text>OFF</Text>
      </Pressable>
    </View>
  );
};
//bài tập ví dụ 4
// const ManageStorage = () => {
//   const [stock, setStock] = useState(10);

//   useEffect(() => {
//     if (stock === 0) {
//       alert("Kho đã hết sạch hàng");
//     } else if (stock < 3) {
//       alert("Cảnh báo: Kho sắp hết hàng");
//     } else {
//       console.log("Số lượng còn trong kho: " + stock);
//     }
//     return () => console.log("Ket thuc chuong trinh");
//   }, [stock]);

//   return (
//     <View>
//       <Text>Số lượng kho: {stock}</Text>
//       <Pressable onPress={() => setStock(stock - 1)}>
//         <Text>Bán 1 cái</Text>
//       </Pressable>
//     </View>
//   );
// };
//bài tập ví dụ 3
// const AlertNumber = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (count > 5) {
//       alert("Số lớn quá rồi đấy");
//     } else {
//       console.log("Số hiện tại là" + count);
//     }
//   }, [count]);

//   return (
//     <View>
//       <Text>{count}</Text>
//       <Pressable onPress={() => setCount(count + 1)}>
//         <Text>Increase</Text>
//       </Pressable>
//     </View>
//   );
// };

//bài tập ví dụ 2
// const ModifyTitle = () => {
//   const [name, setName] = useState("");

//   useEffect(() => {
//     console.log("Chào bạn, " + name);
//   }, [name]);

//   return (
//     <View>
//       <TextInput
//         placeholder="enter your name"
//         onChangeText={setName}
//         value={name}
//       />
//     </View>
//   );
// };
//bài tập ví dụ 1

// const Timer = () => {
//   const [time, setTime] = useState(0);
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTime((prev) => prev + 1);
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <View>
//       <Text>Time: {time}</Text>
//     </View>
//   );
// };

// const CompFunction = () => {

//     useEffect(() => {
//         alert('x')
//     }, [])

//     return (
//         <View>
//         </View>
//     )
// }
```

## 2, Stores, ContextData:

- Mang tính chất 1 cơ sở dữ liệu
- Truy cập được ở tất cả các màn

```javascript
import React, { createContext, useContext, useState } from "react";

const DataContext = createContext({});

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const values = useContext(DataContext);
  return values;
};
```

## 3, AsyncStorage:

- Sử dụng khi cần lưu dữ liệu qua nhiều phiên đăng nhập
- Async Await

```bash
expo install @react-native-async-storage/async-storage
```

```javascript
import AsyncStorage from "@react-native-async-storage/async-storage";

// Lưu data
await AsyncStorage.setItem("KEY", "value"); // value phải ở dạng string

// Lấy data
let data = await AsyncStorage.getItem("KEY"); // value lấy được ở dạng string, phải parse ra nếu cần
```
