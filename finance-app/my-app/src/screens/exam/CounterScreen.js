import { Pressable, Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
const CounterScreen = () => {
  const [count, setCount] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.count}> {count} </Text>
      <View style={styles.buttons}>
        <Pressable
          style={styles.buttonIncrement}
          onPress={() => setCount((current) => current + 1)}
        >
          <Text style={styles.buttonText}> + </Text>
        </Pressable>
        <Pressable style={styles.buttonReset} onPress={() => setCount(0)}>
          <Text style={styles.buttonText}> Reset </Text>
        </Pressable>
        <Pressable
          style={styles.buttonDecrement}
          onPress={() =>
            setCount((current) => (current > 0 ? current - 1 : current))
          }
        >
          <Text style={styles.buttonText}> - </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  count: {
    fontSize: 50,
    fontWeight: "bold",
    fontFamily: "Arial",
  },
  buttons: {
    flexDirection: "row",
    gap: 20,
    marginTop: 30,
  },
  buttonIncrement: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
  },
  buttonReset: {
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 5,
  },
  buttonDecrement: {
    backgroundColor: "#FF3B30",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Arial",
  },
});

CounterScreen.routeInfo = {
  title: "Counter Screen",
  path: "/counter-screen",
};

export default CounterScreen;
