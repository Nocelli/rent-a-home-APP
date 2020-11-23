import React from 'react'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useAuth } from '../components/AuthContext'
import { Center } from '../components/Center'
import api from '../services/api'

const SignIn = () => {
    const { logIn, signed } = useAuth()

    async function handleLogIn() {
        try {
            const response = await logIn({
             "email": "rafaelnocelli@gmail.com" ,
             "password": "24242424"})
             
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Center>
            <Text>
                Não logado
            </Text>
            <TouchableOpacity onPress={handleLogIn}>
                <Text>
                    Logar
                </Text>
            </TouchableOpacity>
        </Center>
    )
}

export default SignIn