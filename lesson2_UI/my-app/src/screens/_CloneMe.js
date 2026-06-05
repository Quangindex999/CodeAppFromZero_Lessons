import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useNavFunc } from '../navigation/useNavFunc';

const CloneMe = () => {
    return (
        <View style={styles.container}>
            <Text style = {styles.title}>Hello World</Text>
            <Text style = {styles.title2}>Hello World</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        paddingTop: 50
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        padding: 20,
        
    },
    title2: {
        fontSize: 18,
        fontFamily: 'sans-serif',
        fontStyle: 'italic',
        fontWeight: '400',
        color: 'red',
        marginTop: 50,
        textAlign: 'center'
    }
})

CloneMe.routeInfo = {
    title: 'Clone Me',
    path: '/clone-me',
};

export default CloneMe;
