import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




const CardRow = ({text, height, flex}) => {

    if (!height) height = 15;
    if (!flex) flex = 0;

    const styles = StyleSheet.create({
        card: {
            flex: flex,
            shadowColor: 'lightgray',
            shadowOpacity: 1,
            shadowRadius: 2,
            shadowOffset: {width: 0, height: 1},
            margin: 3,
            backgroundColor: 'white',
            paddingTop: height,
            paddingBottom: height,
            padding: 10,
            borderRadius: 10,
            justifyContent: 'center',
        },
        text: {
            fontSize: 16
        }
    });

    return  (
        <View style={styles.card}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}

export default CardRow;