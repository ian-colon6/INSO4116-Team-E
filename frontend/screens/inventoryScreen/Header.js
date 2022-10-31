import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, FlatList} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Inventory</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height:100,
    padding:15,
    backgroundColor: 'powderblue',
    justifyContent:'center',
  },
  text: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    
  },
});
