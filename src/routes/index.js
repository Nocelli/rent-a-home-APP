import React from 'react'
import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'
import { useAuth } from '../components/AuthContext'
import { Center } from '../components/Center'
import { ActivityIndicator } from 'react-native'

const Routes = () => {
    const { signed , loading  } = useAuth()

    if(loading){
        return (
          <Center>
            <ActivityIndicator size='large' color='#333' />
          </Center>
        )
      }

    return signed ? <AppRoutes/> : <AuthRoutes/>
}

export default Routes