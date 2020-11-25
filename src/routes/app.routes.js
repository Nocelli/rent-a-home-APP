import React from 'react'
import OwnListings from '../screens/OwnListings'
import Listings from '../screens/Listings'
import CreateListing from '../screens/CreateListing'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';

const AppStack = createBottomTabNavigator()

const AppRoutes = ({ }) => (
    <AppStack.Navigator
        
        initialRouteName='Meus anúncios'
        screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
                let iconName = 'ios-alert';

                if (route.name === 'Anúncios') {
                    iconName = 'md-clipboard'
                } else if (route.name === 'Meus anúncios') {
                    iconName = 'md-contact'
                } else if (route.name === 'Novo anúncio') {
                    iconName = 'md-add-circle'
                }
                return <Ionicons name={iconName} size={size} color={color} />;
            }
        })}
        tabBarOptions={{
            activeTintColor: '#00BFA6',
            inactiveTintColor: 'gray',
        }}

    >
        <AppStack.Screen name='Anúncios' component={Listings} />
        <AppStack.Screen name='Meus anúncios' component={OwnListings} />
        <AppStack.Screen name='Novo anúncio' component={CreateListing} />
    </AppStack.Navigator>
)

export default AppRoutes