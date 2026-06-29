import {
  Pressable,
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState([
    { text: "Learn React Native", key: "1", done: false },
    { text: "Build a Todo App", key: "2", done: false },
    { text: "Learn Basic", key: "3", done: false },
  ]);
  const [data, setData] = useState("");
  const handleAddTodo = () => {
    setTodo((prevTodo) => {
      return [
        ...prevTodo,
        {
          text: data,
          key: Date.now().toString(),
          done: false,
        },
      ];
    });
    setData("");
  };
  const handleToggle = (key) => {
    setTodo((prevTodo) => {
      return prevTodo.map((item) => {
        if (item.key === key) {
          return { ...item, done: !item.done };
        }
        return item;
      });
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new todo"
          onChangeText={setData}
          value={data}
        />
        <Pressable style={styles.button} onPress={handleAddTodo}>
          <Text style={styles.buttonText}>Add</Text>
        </Pressable>
      </View>
      <View style={styles.list}>
        <FlatList
          data={todo}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => handleToggle(item.key)}
              style={styles.listItems}
            >
              <Text
                style={{
                  textDecorationLine: item.done ? "line-through" : "none",
                }}
              >
                {item.text}
              </Text>
            </Pressable>
          )}
          keyExtractor={(item) => item.key}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 28,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    marginBottom: 20,
  },
  form: {
    flexDirection: "row",
    width: "90%",
    gap: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  list: {
    width: "100%",
    paddingHorizontal: 20,
  },
  listItems: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 5,
    fontSize: 16,
  },
});

TodoList.routeInfo = {
  title: "TodoList",
  path: "todo-list",
};

export default TodoList;
