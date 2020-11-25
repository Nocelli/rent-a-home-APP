import React from 'react'
import { View, Text, StyleSheet, Linking } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';


function getIcon(listingType) {
    if (listingType === 'home')
        return <Ionicons name={'md-home'} size={52} color={'#003932'} />
    else if (listingType === 'apartment')
        return <MaterialCommunityIcons name="home-modern" size={52} color={'#003932'} />
    else
        return <Ionicons name={'md-planet'} size={52} color={'#003932'} />
}

export const ListingItem = ({ title, description, price, listingType, available, whatsapp, children }) => {

    function sendWhatsapp() {
        const message = `Olá estou interessado em ${title}`
        Linking.openURL(`whatsapp://send?phone=+55${whatsapp}&text=${message}`)
    }
    const date = new Date(available)

    return (
        <View style={styles.contentContainer}>
            <View style={styles.titleContainer}>
                {getIcon(listingType)}
                <Text style={styles.titleText}>{title}</Text>
            </View>
            <Text style={styles.descriptionText}>{description}</Text>
            <View style={styles.extrainfoContainer}>
                <Text style={styles.availableText}>Disponível a partir de: {date.toLocaleDateString().split('/')[1] + '/' + date.toLocaleDateString().split('/')[0] + '/' + date.toLocaleDateString().split('/')[2]}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.priceText}>Valor: </Text>
                    <Text style={styles.priceNumberText}>R$ {(price).toFixed(2).replace('.',',')}
                    </Text>
                </View>
            </View>
            <TouchableOpacity style={styles.whatsappButton} onPress={sendWhatsapp}>
                <Ionicons name="logo-whatsapp" size={42} color="#25D366" />
                <Text style={styles.whatsappNumber}>{whatsapp}</Text>
            </TouchableOpacity>
            {children}
        </View>
    )
}

export function renderListingItem({ item }) {
    return (<ListingItem
        key={item.imdbID}
        title={item.title}
        description={item.description}
        price={item.price}
        listingType={item.listingType}
        available={item.available}
        whatsapp={item.whatsapp}
    />)
}


const styles = StyleSheet.create({
    extrainfoContainer: {
        textAlign: "left",
        marginTop: 10
    },
    whatsappButton: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
    },
    whatsappNumber: {
        paddingLeft: 20,
        fontWeight: "bold",
        color: '#333',
        fontSize: 24
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    contentContainer: {
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        borderRadius: 2,
        padding: 8,
        backgroundColor: '#ffffffaa'
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 22,
        color: '#003932',
        paddingLeft: 25
    },
    priceText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#333',
    },
    priceNumberText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#001311',
    },
    availableText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#333',
    },
    descriptionText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#006053',
        textAlign: 'left'
    },
});

