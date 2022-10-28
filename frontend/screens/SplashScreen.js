import { React } from 'react';
import { Platform, StyleSheet, Text, Button, View } from 'react-native';
import RoundedButton from '../library/RoundedButton';

const SplashScreen = () => {
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