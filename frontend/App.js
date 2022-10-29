import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import SplashScreen from './screens/SplashScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Linking from 'expo-linking';
import MainScreen from './screens/MainScreen';

const urlConfig = {
  screens: {
    MainScreen: 'main_screen'
  }
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <NavigationContainer linking={{
    //   prefixes: [Linking.createURL('ims://app')],
    //   urlConfig
    // }}>
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name='Welcome' component={SplashScreen}/>
          <Stack.Screen name='Main' component={MainScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5%',
  },
});