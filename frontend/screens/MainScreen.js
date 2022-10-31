import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CardRow from '../library/CardRow';
import RoundedButton from '../library/RoundedButton';




const MainScreen = ({navigation}) =>{

    const [alerts, setAlerts] = useState([
        {text: "Milk expired", key: 1},
        {text: "Eggs running low", key: 2},
        {text: "Bread expires in 2 days", key: 3},
        {text: "Out of ham for 4 days", key: 4},
        {text: "Julia used the last of the ham", key: 5},
        {text: "Julia bough soap and shampoo", key: 6},
        {text: "Juan bought flour and sugar", key: 7},
    ])


    return  (
        <View style={styles.container}>


            <View style={styles.header}>
                {/* <CardRow text='hello'/> */}

            </View>


            <View style={styles.alerts}>
                <Text style={styles.heading}>Alerts</Text>
                <FlatList
                    data={alerts}
                    renderItem={({item}) => (
                        <CardRow text={item.text} height={20}/>
                    )}
                />
            </View>


            <View style={styles.inventory}>
                <Text style={styles.heading}>Inventory</Text>
                <RoundedButton 
                    text='Inventory' flex={1}
                    color='#F9F9F9'
                    textColor='black'
                    padding={20}
                    action={() => navigation.navigate('Inventory')}
                    />
                <RoundedButton 
                    text='Shopping lists' flex={1}
                    color='#F9F9F9'
                    textColor='black'
                    padding = {20}
                    />
            </View>


        </View>
    );
}


const styles = StyleSheet.create({
    // overall container
    container: {
        flex: 1,
        backgroundColor: 'whitesmoke',
        paddingTop: 5,
        paddingBottom: 40,
        padding: 5
    },
    // text headings for each segment
    heading: {
        fontWeight: 'bold',
        color: 'darkslategrey',
        fontSize: 15,
        paddingBottom: 5
    },
    // relative sizes for the segment (colors for debugging)
    header: {
        backgroundColor: 'powderblue',
        flex: '15%'
    },
    alerts: {
        flex: '55%'
    },
    inventory: {
        flex: '30%'
    }
});

export default MainScreen;