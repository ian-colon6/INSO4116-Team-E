import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const ListItem = ({item, deleteItem, displayInfo}) => {
  return (
    <TouchableOpacity style={styles.listItem} onPress={ () =>
        Alert.alert("Information", "Expiration date: October 30th, 2022", [{ text: "OK" }])}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
        <Icon name="remove" size={20} color="salmon" 
            onPress={ () => deleteItem(item.id)}
        />
      </View>
      <StatusBar style="auto" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem:{
    padding:20,
    backgroundColor:'lightblue',
    borderBottomWidth: 1,
    borderColor:'white',
  },
  listItemView:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: 'center',
  },
  listItemText:{
    fontSize:18,
    color:'white'
  }
});

export default ListItem;