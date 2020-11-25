import React from 'react'
import { View, StyleSheet, Text, BackHandler } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export const ListingTypeSelect = ({ listingType, setListingType }) => {


    function handleTypeChoice(choice){
        setListingType(choice)
    }


    return (
        <View style={styles.contentContainer}>
            <TouchableOpacity style={styles.contentType} onPress={()=> handleTypeChoice('home')}>
                <Text>
                    <Ionicons name={'md-home'} size={70} color={listingType === 'home' ? '#00BFA6' : '#33333355'} />
                </Text>
                <Text style={{...styles.contentText, color: (listingType === 'home' ? '#00BFA6' : '#33333355')}}>
                    Casa
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.contentType} onPress={()=> handleTypeChoice('apartment')}>
                <Text>
                    <MaterialCommunityIcons name="home-modern" size={70} color={listingType === 'apartment' ? '#00BFA6' : '#33333355'} />
                </Text>
                <Text style={{...styles.contentText, color: (listingType === 'apartment' ? '#00BFA6' : '#33333355')}}>
                    Apartamento
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.contentType} onPress={()=> handleTypeChoice('others')} >
                <Text>
                    <Ionicons name={'md-planet'} size={70} color={listingType === 'others' ? '#00BFA6' : '#33333355'} />
                </Text>
                <Text style={{...styles.contentText, color: (listingType === 'others' ? '#00BFA6' : '#33333355')}}>
                    Outros
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-around'
    },
    contentType: {
        flex: 1,
        alignItems: "center",
    },
    contentText: {
        flex: 1,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16,
        marginTop: -10,
        color: '#33333355',
        borderColor: '#000',
    }
});

