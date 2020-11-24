import React from 'react'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'
import { createStackNavigator } from '@react-navigation/stack'

const AuthStack = createStackNavigator();

const AuthRoutes = ({ }) => (
    <AuthStack.Navigator headerMode='none'>
        <AuthStack.Screen name='SignIn' component={SignIn} />
        <AuthStack.Screen name='SignUp' component={SignUp} />
    </AuthStack.Navigator>
)

export default AuthRoutes