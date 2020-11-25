import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInputWithTitle } from '../components/TextInputWithTitle'
import { DatePicker } from '../components/DatePicker'
import { ListingTypeSelect } from '../components/ListingTypeSelect'
import { createAlert } from '../utils/createAlert'
import api from '../services/api';


export const EditableListing = (props) => {

    const [isLoading, setIsLoading] = useState(false)
    const [title, setTitle] = useState(props.item.title)
    const [description, setDescription] = useState(props.item.description)
    const [price, setPrice] = useState(props.item.price)
    const [whatsapp, setWhatsapp] = useState(props.item.whatsapp)
    const [available, setAvailable] = useState(props.item.available)
    const [listingType, setListingType] = useState(props.item.listingType)


    async function handleConfirmEdit() {
        setIsLoading(true)
        if (!title || !description || !price || !whatsapp) {
            createAlert('Por favor preencha todos os campos!')
            return
        }

        try {
            const response = await api.put(`/listings/${props.item._id}`, { title, description, price, whatsapp, available, listingType })

            if (!response) {
                createAlert('Tente novamente mais tarde')
                return
            }
            setIsLoading(false)
            props.setItem(response.data.listing)
            props.setIsEditing(false)

        } catch (error) {
            console.log(error);
            createAlert(error.response.data.error)
            setIsLoading(false)
            props.setIsEditing(false)
        }
    }

    return (
        <View style={styles.contentContainer}>
            {
                isLoading ?
                    <Text style={styles.loading}>Atualizando anúncio...</Text> :
                    <>
                        <View>
                            <TextInputWithTitle title='Título' value={title} setValue={setTitle} styleInput={styles.textField} styleTitle={styles.textFieldTitle} placeholderTextColor={'#33333388'} />
                            <TextInputWithTitle title='Descrição' value={description} setValue={setDescription} styleInput={styles.textField} styleTitle={styles.textFieldTitle} placeholderTextColor={'#33333388'} />
                            <TextInputWithTitle title='Preço' value={price ? price.toString() : ''} setValue={setPrice} keyboardType={'numeric'} styleInput={styles.textField} styleTitle={styles.textFieldTitle} placeholderTextColor={'#33333388'} />
                            <TextInputWithTitle title='WhatsApp' value={whatsapp} setValue={setWhatsapp} keyboardType={'phone-pad'} styleInput={styles.textField} styleTitle={styles.textFieldTitle} placeholderTextColor={'#33333388'} />
                            <DatePicker date={available} setDate={setAvailable} />
                            <ListingTypeSelect listingType={listingType} setListingType={setListingType} />

                        </View>
                        <View style={styles.buttomsContainer}>
                            <TouchableOpacity style={styles.buttom} onPress={handleConfirmEdit} disabled={isLoading}>
                                <AntDesign name="check" size={24} color="green" />
                                <Text style={styles.extraOptionsText}>Confirmar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttom} onPress={props.setIsEditing}>
                                <AntDesign name="close" size={24} color="red" />
                                <Text style={styles.extraOptionsText}>Cancelar</Text>
                            </TouchableOpacity>
                        </View>
                    </>

            }
        </View>
    )
}


const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        borderRadius: 2,
        padding: 8,
        backgroundColor: '#ffffffaa'
    },
    buttomsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 8,
        borderColor: '#5a5a5faa',
        borderTopWidth: 1,
    },
    buttom: {
        alignItems: "center",
        marginBottom: 5,
    },
    buttom: {
        alignItems: "center",
        marginBottom: 5
    },
    extraOptionsText: {
        fontSize: 12,
        fontWeight: "bold",
        color: '#333'
    },
    textFieldTitle: {
        color: '#0f0f05',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'left',
        lineHeight: 20,
        fontFamily: 'Roboto',
    },
    textField: {
        height: 40,
        backgroundColor: '#00BFA688',
        borderRadius: 3,
        marginBottom: 8,
        paddingHorizontal: 12,
        fontSize: 16,
        marginTop: 5,
        color: '#545454',
        fontFamily: 'Roboto',
        fontWeight: 'bold'
    },
    loading: {
        alignSelf: "center",
        color: '#333',
        fontSize: 22,
        fontWeight: "bold",
        paddingHorizontal: 20
    },
});

