import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.searchBox}>
                    <View style={styles.logo} />
                    <View style={styles.searchInput} />
                </View>
                <View style={styles.tabContainer}>
                    <View style={styles.tabItem} />
                    <View style={styles.tabItem} />
                    <View style={styles.tabItem} />
                    <View style={styles.tabItem} />
                    <View style={styles.tabItem} />
                </View>
                <View style={styles.actionContainer}>
                    <View style={styles.actionItem} />
                    <View style={styles.actionItem} />
                    <View style={styles.actionItem} />
                    <View style={styles.actionItem} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        backgroundColor: 'rgb(36,37,38)',
        padding: 5,
    },
    searchBox: {
        flexDirection: 'row',
    },
    tabContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginHorizontal: 70,
    },
    actionContainer: {
        flexDirection: 'row',
    },
    logo: {
        width: 54,
        height: 54,
        borderRadius: 54 / 2,
        backgroundColor: 'blue',
    },
    searchInput: {
        height: 54,
        borderRadius: 54 / 2,
        backgroundColor: 'rgb(58,59,60)',
        width: 200,
        marginLeft: 10,
    },
    actionItem: {
        width: 54,
        height: 54,
        borderRadius: '50%',
        backgroundColor: 'rgb(58,59,60)',
        marginRight: 10,
    },
    tabItem: {
        width: 54,
        height: 54,
        borderRadius: '50%',
        backgroundColor: 'rgb(58,59,60)',
        marginRight: 10,
    }
})

Home.routeInfo = {
    title: 'Home Page',
    path: '/home',
};

export default Home;
