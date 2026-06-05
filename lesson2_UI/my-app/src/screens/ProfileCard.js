import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Pressable, Alert } from "react-native";
import { useNavFunc } from "../navigation/useNavFunc";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const ProfileCard = () => {
  const handlePress = () => {
    Alert.alert("Followed")
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style = {styles.innerContainer}>
          <Image
            style={styles.profileImage}
            source={{
              uri: "https://img.magnific.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4841.jpg",
            }}
          ></Image>
          <Text style={styles.name}>Nguyễn Quang</Text>
          <Text style={styles.info}>Age: 20</Text>
          <Text style={styles.info}>Major: IT</Text>
          <Text style={styles.info}>Location: Hanoi, Vietnam</Text>
          <Pressable onPress={handlePress} style={styles.containerButton}>
            <Text style={styles.button}>Follow</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  innerContainer: {
    gap: 15,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: "center",
    marginTop: 70,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    fontFamily: "sans-serif",
  },
  info: {
    fontSize: 18,
    color: "grey",
    fontStyle: "italic",
    fontFamily: "sans-serif",
  },
  containerButton: {
    backgroundColor: "#3992f2ff",
    borderRadius: 10,
    padding: 18,
    margin: "auto",
  },
  button: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

ProfileCard.routeInfo = {
  title: "Profile Card",
  path: "/profile-card",
};
export default ProfileCard;
