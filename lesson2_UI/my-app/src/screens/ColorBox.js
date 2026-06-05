import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavFunc } from "../navigation/useNavFunc";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const ColorBox = () => {
    return (
        <SafeAreaView style={styles.container}>
        
            <View style={{height: 100, width: '100%', backgroundColor: 'red', justifyContent: "center",
    alignItems: "center"}}>
                <Text style = {styles.text}>Red</Text>
            </View>
            <View style={{height: 100, width: '100%', backgroundColor: 'blue', justifyContent: "center",
    alignItems: "center"}}>
                <Text style = {styles.text}>Blue</Text>
            </View>
            <View style={{height: 100, width: '100%', backgroundColor: 'green', justifyContent: "center",
    alignItems: "center"}}>
                <Text style = {styles.text}>Green</Text>
            </View><View style={{height: 100, width: '100%', backgroundColor: 'orange', justifyContent: "center",
    alignItems: "center"}}>
                <Text style = {styles.text}>Orange</Text>
            </View><View style={{height: 100, width: '100%', backgroundColor: 'yellow', justifyContent: "center",
    alignItems: "center"}}>
                <Text style = {styles.text}>Yellow</Text>
            </View>  
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginTop: 20,
        
    },
   text: {
    color: 'white',
    textAlign: "center",
    fontSize: 24,
   }
});

ColorBox.routeInfo = {
    title: "Color Box",
    path: "/color-box"
}

export default ColorBox