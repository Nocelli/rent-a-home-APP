import React from 'react'
import Dashboard from '../screens/Dashboard'
import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator();

const AppRoutes = ({ }) => (
    <AppStack.Navigator headerMode='none'>
        <AppStack.Screen name='Dashboard' component={Dashboard} />
    </AppStack.Navigator>
)

export default AppRoutes