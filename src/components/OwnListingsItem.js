import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ListingItem } from '../components/ListingItem'
import { EditableListing } from '../components/EditableListing'
import { Feather } from '@expo/vector-icons';
import { createAlert } from '../utils/createAlert'
import api from '../services/api';

export const OwnListingItem = ( props ) => {
    const [isEditing, setIsEditing] = useState(false)
    const [wasDeleted, setWasDeleted] = useState(false)
    const [item, setItem] = useState(props.item)

    async function handleDelete() {
        try {
            await api.delete(`/listings/${item._id}`)
            setWasDeleted(true)

        } catch (error) {
            console.log(error);
            createAlert(error.response.data.error)
        }
    }



    function handleEdit() {
        setIsEditing(value => !value)
    }

    if (wasDeleted)
        return null

    if (isEditing)
        return <EditableListing item={item} setIsEditing={setIsEditing} setItem={setItem} />

    return (
        <ListingItem
            key={item._id}
            title={item.title}
            description={item.description}
            price={item.price}
            listingType={item.listingType}
            available={item.available}
            whatsapp={item.whatsapp}
            user={item.user}
        >
            <View style={styles.extraOptionsContainer}>
                <TouchableOpacity style={styles.extraOptionsButtom} onPress={handleEdit}>
                    <Feather name="edit" size={24} color="#333" />
                    <Text style={styles.extraOptionsText}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.extraOptionsButtom} onPress={handleDelete}>
                    <Feather name="trash-2" size={24} color="#ff0000" />
                    <Text style={styles.extraOptionsText}>Excluir</Text>
                </TouchableOpacity>
            </View>
        </ListingItem>
    )
}

export function renderOwnListingItem({ item }) {
    return <OwnListingItem item={item} />
}

const styles = StyleSheet.create({
    extraOptionsContainer: {
        flexDirection: 'row',
        textAlign: "right",
        justifyContent: 'space-around',
        borderBottomColor: '#5a5a5faa',
        borderBottomWidth: 1,
        margin: 5
    },
    extraOptionsButtom: {
        alignItems: "center",
        marginBottom: 5
    },
    extraOptionsText: {
        fontSize: 12,
        fontWeight: "bold",
        color: '#333'
    },
});

