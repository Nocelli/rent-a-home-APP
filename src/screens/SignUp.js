import React from 'react'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useAuth } from '../components/AuthContext'
import { Center } from '../components/Center'

const SignUp = () => {
    const { logIn, signed } = useAuth()

    async function handleSignUp() {
        try {
            
             
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Center>
            <Text>
                Não logado
            </Text>
            <TouchableOpacity onPress={handleSignUp}>
                <Text>
                    Cadastrar
                </Text>
            </TouchableOpacity>
        </Center>
    )
}

export default SignUp