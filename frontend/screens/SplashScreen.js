import { React } from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import CircularIconButton from '../library/CircularIconButton';
import RoundedButton from '../library/RoundedButton';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Linking from 'expo-linking';

const SplashScreen = ({navigation}) => {
    const mainScreenURL = 'ims://app/main_screen';
    return  (
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>Home Inventory Management</Text>
            </View>
            <Text style={styles.subtitle}>INSO4116 Team E</Text>
            <RoundedButton
                text='Login'
                color='steelblue'
                />
            <Text>or</Text>
            <RoundedButton
                text='Sign Up'
                color='steelblue'
                />
            <RoundedButton
                text='Skip to Main View (Debug) >'
                color='salmon'
                padding={15}
                action={() => navigation.navigate('Main')}
                />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleWrapper: {
        paddingBottom: 10,
        borderBottomColor: 'steelblue',
        borderBottomWidth: 2,
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 45,
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10,
    },  

});


export default SplashScreen;