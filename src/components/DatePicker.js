import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export const DatePicker = ({ setDate, date }) => {
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        setShow(false);
        const currentDate = selectedDate || date;
        setDate(currentDate);
    };

    const showDatepicker = () => {
        setShow(true);
    };

    return (
        <View>
            <View>
                <Text style={styles.dateText} >{date.toLocaleDateString().split('/')[1] + '/' + date.toLocaleDateString().split('/')[0] + '/' + date.toLocaleDateString().split('/')[2]}</Text>
                <TouchableOpacity style={styles.formButtom} onPress={showDatepicker}>
                    <Text style={styles.formButtomText}>{'Disponibilidade do imóvel'}</Text>
                </TouchableOpacity>
            </View>
            {show && (
                <DateTimePicker
                    minimumDate={Date.now()}
                    testID="dateTimePicker"
                    value={date}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    dateText: {
        marginTop: 5,
        backgroundColor: '#f0f0f5ee',
        fontSize: 18,
        textAlign: 'center',
        borderRadius: 3,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        fontWeight: "bold",
        padding: 5,
        color: '#333'
    },
    formButtom: {
        backgroundColor: '#00BFA6',
        borderRadius: 3,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        padding: 12,
        marginTop: 0,
        margin: 25,
        textAlign: 'center',
        width: '100%',
        alignSelf: 'center'
    },
    formButtomText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 24,

    }
})