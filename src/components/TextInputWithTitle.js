import React, { useRef } from 'react'
import { Text, TextInput, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


export const TextInputWithTitle = ({ styleTitle, styleInput, title, setValue, value, keyboardType, placeholder, secureTextEntry }) => {

    const inputRef = useRef(null)

    function focusInput() {
        inputRef.current.focus()
    }

    return (
        <TouchableWithoutFeedback onPress={focusInput}>
            <Text style={styleTitle ? styleTitle : styles.textFieldTitle}>{title}</Text>
            <TextInput
                ref={inputRef}
                style={styleInput ? styleInput : styles.textField}
                placeholder={placeholder ? placeholder : 'Digite aqui...'}
                onChangeText={setValue}
                value={value}
                placeholderTextColor="#a0a0a5"
                selectionColor='#c0c0c5'
                keyboardType={keyboardType ? keyboardType : 'default'}
                secureTextEntry={secureTextEntry}
            />
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    textFieldTitle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'left',
        lineHeight: 20,
        fontFamily: 'Roboto',
    },
    textField: {
        height: 40,
        backgroundColor: '#006053',
        borderRadius: 3,
        marginBottom: 8,
        paddingHorizontal: 12,
        fontSize: 16,
        marginTop: 5,
        color: '#e0e0e5',
        fontFamily: 'Roboto'
    }
});