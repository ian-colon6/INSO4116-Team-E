import { React } from 'react';
import { Platform, TouchableOpacity, Text, Button, View } from 'react-native';

const RoundedButton = ({text, color, textColor, padding, action}) => {
    if (!padding || padding < 10) padding = 10;
    if (!textColor) textColor = 'white';

    return (
        <TouchableOpacity onPress={action} style={{
            shadowColor: 'gray',
            shadowOpacity: 1,
            shadowRadius: 2,
            shadowOffset: {width: 0, height: 1},
            marginTop: 10,
            backgroundColor: color,
            padding: padding,
            borderRadius: 10
        }}>
            <Text style={{
                color: textColor,
                fontSize: 16
            }}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}


export default RoundedButton;