import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useNavFunc } from "../../navigation/useNavFunc";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const onPress = () => {
    console.log("Pressed!");
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.title2}>Hello World</Text>
        <Image
          style={styles.catImage}
          source={{
            uri: "https://cdn.pixabay.com/photo/2026/05/27/04/29/04-29-48-584_1280.jpg",
          }}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.clickMe}>Click me</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    padding: 20,
  },
  title2: {
    fontSize: 18,
    fontFamily: "sans-serif",
    fontStyle: "italic",
    fontWeight: "400",
    color: "red",
    marginTop: 50,
    textAlign: "center",
  },
  catImage: {
    width: 200,
    height: 200,
    marginTop: 50,
    alignSelf: "center",
    borderRadius: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#3992f2ff",
    borderRadius: 10,
    padding: 20,
    margin: 20,
    alignSelf: "center",
  },
  clickMe: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "sans-serif",
  },
});

HomeScreen.routeInfo = {
  title: "Home Screen",
  path: "/home-screen",
};

export default HomeScreen;
