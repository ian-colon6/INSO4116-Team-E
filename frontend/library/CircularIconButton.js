import { React } from 'react';
import { StyleSheet, Platform, TouchableOpacity, Text, Button, View } from 'react-native';

const CircularIconButton = ({radius, borderThickness, color, icon}) => {
    
    if (!borderThickness) borderThickness = 0;
    
    return (
        <View style={{
            width: radius + borderThickness,
            height: radius + borderThickness,
            backgroundColor: 'white',
            shadowRadius: 4,
            shadowColor: 'gray',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 1,
            borderRadius: (radius + borderThickness) / 2,
            alignItems: 'center',
            justifyContent: 'center',
            margin: 10,
            }}>
            <TouchableOpacity style={{
                width: radius,
                height: radius,
                borderRadius: radius / 2,
                backgroundColor: color,
                }}/>
        </View>
        
    );
}

  

export default CircularIconButton;