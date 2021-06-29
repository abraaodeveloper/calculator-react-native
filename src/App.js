import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Dimensions, TextInput, BackHandler } from 'react-native';
import Btn from './components/Btn';

export default (props) => {

    const [values, setValues] = useState([0]);

    function handlerClickInBtns(currentValue) {
        const lastSimbol = values[values.length - 1];

        AddCaracterToDisplay(currentValue);
    }

    function _isOperation(value) {
        return (
            value == "-" ||
            value == "+" ||
            value == "*" ||
            value == "/")
    }

    function AddCaracterToDisplay(currentValue) {
        const lastSimbol = values[values.length - 1];

        // add operation
        if (_isOperation(currentValue)) {
            if (_isOperation(lastSimbol)) {
                values[values.length - 1] = currentValue;
                setValues([...values]);
            } else {
                values.push(currentValue);
                setValues([...values]);
            }

            // add number
        } else {
            if (_isOperation(lastSimbol)) {
                values.push(currentValue)
                setValues([...values]);
            } else {
                values[values.length - 1] = (lastSimbol != 0 ? lastSimbol : "") + currentValue;
                setValues([...values]);
            }
        }
    }

    function calculate() {
        if (_isOperation(values[values.length - 1])) values.pop();
        const expression = values.join("");
        setValues([eval(expression)]);
    }

    const clearDisplay = () => setValues([0]);
    function clearLastCaracter() {
        const newValue = [...values]
        newValue.pop();
        setValues(newValue);
    }

    return (
        <SafeAreaView style={style.Container}>
            <View style={style.Display}><Text style={style.TextDisplay}>{values.join(" ")}</Text></View>
            <View style={style.Btns}>
                <Btn title="AC" double onClick={clearDisplay} />
                <Btn title="DEL" onClick={clearLastCaracter} />
                <Btn title="/" isOperation onClick={handlerClickInBtns} />
                <Btn title="7" onClick={handlerClickInBtns} />
                <Btn title="8" onClick={handlerClickInBtns} />
                <Btn title="9" onClick={handlerClickInBtns} />
                <Btn title="*" isOperation onClick={handlerClickInBtns} />
                <Btn title="4" onClick={handlerClickInBtns} />
                <Btn title="5" onClick={handlerClickInBtns} />
                <Btn title="6" onClick={handlerClickInBtns} />
                <Btn title="-" isOperation onClick={handlerClickInBtns} />
                <Btn title="1" onClick={handlerClickInBtns} />
                <Btn title="2" onClick={handlerClickInBtns} />
                <Btn title="3" onClick={handlerClickInBtns} />
                <Btn title="+" isOperation onClick={handlerClickInBtns} />
                <Btn title="0" double onClick={handlerClickInBtns} />
                <Btn title="." onClick={handlerClickInBtns} />
                <Btn title="=" isOperation onClick={calculate} />
            </View>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    Display: {
        flex: 1,
        backgroundColor: "#fcfcfc",
        margin: 1,
        alignItems: "flex-end",
        justifyContent: "center",
    },
    TextDisplay: {
        fontSize: 50,
        padding: 20,
        textAlign: 'right'
    },
    Btns: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    Container: {
        backgroundColor: "#979fa7",
        flex: 1,
    }
});
