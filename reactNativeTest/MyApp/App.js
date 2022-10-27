import { StatusBar } from 'expo-status-bar';
import Header from './components/Header'
import React, {useState} from 'react';
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'
import { StyleSheet, Text, View, Image, FlatList, Alert} from 'react-native';


export default function App() {
  const [items, setItems] = useState([
    {id: Math.floor(Math.random()*100) + 1, text: 'Milk'},
    {id: Math.floor(Math.random()*100) + 1, text: 'Eggs'},
    {id: Math.floor(Math.random()*100) + 1, text: 'Bread'},
    {id: Math.floor(Math.random()*100) + 1, text: 'Juice'}
  ]);

  const displayInfo = (text) => {
    Alert.alert("Item information", "Expiration date: 31/october/2022", [{ text: "OK" }] )
  }

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  const addItem = (text) => {
    if(!text){
      Alert.alert("Error", "Enter an item", [{ text: "OK" }]);
    }
    else{
      setItems(prevItems => {
        return[{id: Math.floor(Math.random()*100) + 1, text}, ...prevItems];
      });
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem}/>
      <FlatList 
        data={items} 
        renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem}/>}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  }
});
