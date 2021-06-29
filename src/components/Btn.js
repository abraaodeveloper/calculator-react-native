import React from 'react';
import { StyleSheet, Button, Text, Dimensions, View, TouchableHighlight } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default ({ title, double, isOperation, onClick}) => {

    getStyles = () => {
        if(double){
            if(isOperation){
                return [style.Btn, style.Double, style.Operation];
            }else{
                return [style.Btn, style.Double];
            }
        }else if(isOperation){
            return [style.Btn, style.Operation];
        }else{
            return [style.Btn];
        }
    }

    return (
        <TouchableHighlight onPress={() => onClick(title)} style={getStyles()}>
            <Text style={style.Txt}>{title}</Text>
        </TouchableHighlight>
    );
}

const style = StyleSheet.create({
    Btn: {
        width: Dimensions.get('window').width / 4 - 2,
        height: Dimensions.get('window').width / 4 - 2,
        backgroundColor: "#fcfcfc",
        alignItems: "center",
        justifyContent: "center",
        margin: 1
    },
    Double: {
        width: (Dimensions.get('window').width / 4 - 1) * 2
    },
    Operation:{
        backgroundColor: "#fa8231",
    },
    Txt: {
        fontSize: 30
    }
});
