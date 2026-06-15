## 1, React useState:

- State là gì
- Cú pháp khai báo state và thay đổi state
- Luồng chạy của code khi có sự thay đổi state

```javascript
import { useState } from "react";
import { Pressable, View, Text } from "react-native";

//bài tập ví dụ 5
const Profile = () => {
  const [user, setUser] = useState({ name: "Quang", age: 20 });

  const toggleChangeName = () => {
    setUser({ ...user, name: "Pixel" });
  };

  const toggleBirthday = () => {
    setUser({ ...user, age: user.age + 1 });
  };

  return (
    <View>
      <Text>
        Tên: {user.name}, tuổi: {user.age}
      </Text>
      <Pressable onPress={toggleChangeName}>
        <Text>Đổi tên</Text>
      </Pressable>
      <Pressable onPress={toggleBirthday}>
        <Text>Sinh nhật</Text>
      </Pressable>
    </View>
  );
};

//bài tập ví dụ 4

// const StyleController = () => {
//   const [style, setStyle] = useState({ fontSize: 16, color: "black" });

//   const toggleZoom = () => {
//     setStyle({ ...style, fontSize: style.fontSize + 2 });
//   };

//   const toggleChangeColor = () => {
//     setStyle({ ...style, color: "red" });
//   };

//   return (
//     <View>
//       <Text style={{ fontSize: style.fontSize, color: style.color }}>
//         Đây là văn bản
//       </Text>
//       <Pressable onPress={toggleZoom}>
//         <Text>Phóng to</Text>
//       </Pressable>
//       <Pressable onPress={toggleChangeColor}>
//         <Text>Đổi màu</Text>
//       </Pressable>
//     </View>
//   );
// };

//Bài tập ví dụ 3
// const FontSizeModify = () => {
//   const [size, setSize] = useState(16);

//   const IncreaseFontSize = () => {
//     setSize(size + 2);
//   };
//   const DecreaseFontSize = () => {
//     setSize(size - 2);
//   };
//   return (
//     <View>
//       <Text style={{ fontSize: size }}>Đây là văn bản</Text>
//       <Pressable onPress={IncreaseFontSize}>
//         <Text>Phóng to</Text>
//       </Pressable>
//       <Pressable onPress={DecreaseFontSize}>
//         <Text>Thu nhỏ</Text>
//       </Pressable>
//     </View>
//   );
// };

//Bài tập ví dụ 2

// const CountLike = () => {
//   const [count, setCount] = useState(0);

//   const toggleHandle = () => {
//     setCount(count + 1);
//   };
//   return (
//     <View>
//       <Text>{count}</Text>
//       <Pressable onPress={toggleHandle}>
//         <Text>Like</Text>
//       </Pressable>
//       <Pressable onPress={() => setCount(0)}>
//         <Text>Reset</Text>
//       </Pressable>
//     </View>
//   );
// };

//Bài tập ví dụ 1
// const AccountBalance = () => {
//   const [balance, setBalance] = useState(0);

//   const toggleIncrease = () => {
//     setBalance(balance + 10);
//   };
//   const toggleDecrease = () => {
//     setBalance(balance - 5);
//   };
//   return (
//     <View>
//       <Text>{balance}</Text>
//       <Pressable onPress={toggleIncrease}>
//         <Text>Nạp 10k</Text>
//       </Pressable>
//       <Pressable onPress={toggleDecrease}>
//         <Text>Tiêu 5k</Text>
//       </Pressable>
//     </View>
//   );
// };

// const CompFunction = () => {
//     const [count, setCount] = useState(0)

//     return (
//         <View>
//             <Text>{count}</Text>
//             <Pressable onPress={() => setCount(count + 1)}/>
//         </View>
//     )
// }
```
