import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { TextInputWithTitle } from '../components/TextInputWithTitle'
import { DatePicker } from '../components/DatePicker'
import { ListingTypeSelect } from '../components/ListingTypeSelect'
import { ScrollView } from 'react-native-gesture-handler'
import { FormButtom } from '../components/FormButtom'
import { createAlert } from '../utils/createAlert'
import api from '../services/api'

const CreateListing = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [available, setAvailable] = useState(new Date(Date.now()))
    const [listingType, setListingType] = useState('home')

    async function handlePostToAPI() {
        if (!title || !description || !price || !whatsapp) {
            createAlert('Por favor preencha todos os campos!')
            return
        }
        try {
            const response = await api.post('/listings', { title, description, price, whatsapp, available, listingType })
            if (!response) {
                createAlert('Tente novamente mais tarde')
                return
            }
            createAlert('Anúncio criado com sucesso!', 'Tudo pronto!')
            setTitle('')
            setDescription('')
            setPrice(0)
            setWhatsapp('')
            setListingType('home')
        } catch (error) {
            console.log(error);
            createAlert(error.response.data.error)
        }
    }

    async function handleCreateListing() {
        setIsLoading(true)
        await handlePostToAPI()
        setIsLoading(false)
    }

    return (

        <View style={styles.contentContainer}>
            <View style={styles.blobLeft} opacity={0.9} />
            <View style={styles.blobRight} />
            {
                isLoading ?
                    <Text style={styles.loading}>Criando anúncio...</Text> :
                    <>
                        <ScrollView style={styles.scrollView}>
                            <View style={styles.formContainer}>
                                <TextInputWithTitle title='Título' value={title} setValue={setTitle} styleInput={styles.textField} placeholderTextColor={'#ffffff88'} />
                                <TextInputWithTitle title='Descrição' value={description} setValue={setDescription} styleInput={styles.textField} placeholderTextColor={'#ffffff88'} />
                                <TextInputWithTitle title='Preço' value={price ? price.toString() : ''} setValue={setPrice} keyboardType={'numeric'} styleInput={styles.textField} placeholderTextColor={'#ffffff88'} />
                                <TextInputWithTitle title='WhatsApp' value={whatsapp} setValue={setWhatsapp} keyboardType={'phone-pad'} styleInput={styles.textField} placeholderTextColor={'#ffffff88'} />
                                <DatePicker date={available} setDate={setAvailable} />
                                <ListingTypeSelect listingType={listingType} setListingType={setListingType} />
                                <FormButtom callback={handleCreateListing} title={'Criar anúncio'} isLoading={isLoading} />
                            </View>
                        </ScrollView>
                    </>
            }
        </View>

    )
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        backgroundColor: '#f0f0f5'
    },
    blobLeft: {
        backgroundColor: '#00BFA6',
        position: 'absolute',
        width: 500,
        height: 500,
        borderRadius: 250,
        zIndex: 0,
        left: -300,
    },
    blobRight: {
        backgroundColor: '#00BFA6aa',
        position: 'absolute',
        width: 300,
        height: 300,
        borderRadius: 250,
        zIndex: 0,
        left: 250,
    },
    formContainer: {
        marginTop: 45,
        width: '70%',
        alignSelf: 'center',
    },
    scrollView: {
        width: '100%',
    },
    textField: {
        height: 40,
        backgroundColor: '#00000011',
        borderWidth: 1,
        borderColor: '#00000000',
        borderBottomColor: '#f0f0f5',
        borderRadius: 3,
        marginBottom: 8,
        paddingHorizontal: 12,
        fontSize: 16,
        marginTop: 0,
        color: '#333',
        fontWeight: "bold",
        fontFamily: 'Roboto'
    },
    loading: {
        alignSelf: "center",
        color: '#333',
        fontSize: 22,
        fontWeight: "bold",
        marginTop: 100,
        borderRadius: 2,
        padding: 30,
        backgroundColor: '#ffffffaa'
    },
});

export default CreateListing