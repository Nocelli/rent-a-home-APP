import React from 'react'
import { Text } from 'react-native'
import { Center } from '../components/Center'
import { useAuth } from '../components/AuthContext'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Dashboard = () => {
    const { logOut } = useAuth()

    async function handleLogOut() {
        await logOut()
    }

    return (
        <Center>
            <Text>
                LOGADO
            </Text>
            <TouchableOpacity onPress={handleLogOut}>
                <Text>
                    Deslogar
                </Text>
            </TouchableOpacity>
        </Center>
    )
}

export default Dashboard