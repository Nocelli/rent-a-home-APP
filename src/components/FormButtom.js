import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'


export const FormButtom = ({ callback, title, isLoading }) => {
    return (
        <TouchableOpacity style={styles.formButtom} onPress={callback} disabled={isLoading}>
            <Text style={styles.formButtomText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    formButtom: {
        backgroundColor: '#00BFA6',
        borderRadius: 25,
        padding: 12,
        paddingHorizontal: 18,
        margin: 12,
        textAlign: 'center',
        alignSelf: 'center'
    },
    formButtomText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 24,
    }
});

