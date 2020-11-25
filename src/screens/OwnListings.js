import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { renderOwnListingItem } from '../components/OwnListingsItem'
import { createAlert } from '../utils/createAlert'
import api from '../services/api'

const OwnListings = ({ navigation }) => {

    const [listings, setListings] = useState([])
    const [isLoading, setIsLoading] = useState(false)


    async function handleGetListings() {
        try {
            const response = await api.get('/listings/user')

            if (!response)
                return createAlert('Tente novamente em alguns minutos!')

            setListings(response.data.listing)
        } catch (error) {
            createAlert(error.response.data.error)
            console.log(error);
        }
    }

    async function getListings() {
        setIsLoading(true)
        await handleGetListings()
        setIsLoading(false)
    }

    useEffect(() => {
        getListings()
    }, [])

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            if (!isLoading)
                getListings()
        })

        return unsubscribe
    }, [navigation])

    return (
        <View style={styles.contentContainer}>
            <View style={styles.blobLeft} opacity={0.75} />
            <View style={styles.blobRight} opacity={0.75} />
            <View style={styles.listContainer}>
                <Text style={styles.titleText}>Meus anúncios</Text>
                {
                    isLoading ?
                        <Text style={styles.loading}>Carregando...</Text> :
                        listings[0] ? (
                            <>
                                <FlatList
                                    data={listings}
                                    keyExtractor={listings => String(listings._id)}
                                    style={styles.resultsContainer}
                                    renderItem={renderOwnListingItem}
                                />
                            </>) :
                            (
                                <Text
                                    style={styles.loading}>
                                    Não há nada aqui,
                                    crie alguns anúncios para começar.
                                </Text>
                            )
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        backgroundColor: '#f0f0f5'
    },
    listContainer: {
        marginTop: 30,
        justifyContent: 'center'
    },
    loading: {
        alignSelf: "center",
        color: '#333',
        fontSize: 18,
        fontWeight: "bold",
        paddingHorizontal: 20
    },
    resultsContainer: {
        marginTop: 20,
        marginBottom: 30
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#333',
        alignSelf: 'center'
    },
    blobLeft: {
        backgroundColor: '#00BFA6',
        position: 'absolute',
        width: 300,
        height: 300,
        borderRadius: 150,
        zIndex: 0,
        left: 150,
        top: -50
    },
    blobRight: {
        backgroundColor: '#00BFA6aa',
        position: 'absolute',
        width: 500,
        height: 500,
        borderRadius: 250,
        zIndex: 0,
        left: -150,
        top: 120
    },
});

export default OwnListings