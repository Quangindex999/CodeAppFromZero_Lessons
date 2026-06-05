import React from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { useNavFunc } from "../navigation/useNavFunc";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    console.log(email, password);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Example@gmail.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          placeholder="abcd12345@#"
          autoCapitalize="none"
        />
        <Button style={styles.button} title="Login" onPress={handleLogin} />
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
    gap: 10,
  },
  title: {
    fontSize: 24,
    fontFamily: "Arial",
    fontWeight: "bold",
  },
  form: {
    backgroundColor: "white",
    width: "90%",
    padding: 30,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },

  label: {
    fontSize: 16,
    fontFamily: "Arial",
    marginTop: 15,
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 10,
    fontSize: 16
  },
  button: {
    marginTop: 20,
    borderRadius: 8,
  },
});

LoginScreen.routeInfo = {
  title: "LoginScreen",
  path: "/login-screen",
};

export default LoginScreen;
