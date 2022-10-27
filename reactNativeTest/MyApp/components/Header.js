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
    height:60,
    padding:15,
    backgroundColor: 'darkslateblue'
  },
  text: {
    color: 'white',
    fontSize: 23,
    textAlign: 'center',
  },
});
