import React from "react";
import { View, StyleSheet } from "react-native";
import { DataProvider } from "./MyContext";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";

export default function App() {
  return (
    <DataProvider>
      <View style={styles.container}>
        <Screen1 />
        <Screen2 />
      </View>
    </DataProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
