import React, { createContext, useState, useEffect, useContext } from "react";
import { AsyncStorage } from 'react-native'
import api from '../services/api'
import * as auth from '../services/auth'

const AuthContext = createContext({ signed: true });

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=> {
    loadStorageData()
  },[])

  async function loadStorageData() {
    const savedUser = await AsyncStorage.getItem('Auth:user')
    const savedToken = await AsyncStorage.getItem('Auth:token')

    api.defaults.headers['x-token'] = savedToken

    if(savedToken && savedUser){
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }

  async function logIn(user) {
    const response = await auth.logIn(user)
    setUser(response.data.user)
    api.defaults.headers['x-token'] = response.headers['x-token']

    await AsyncStorage.setItem('Auth:user', JSON.stringify(response.user))
    await AsyncStorage.setItem('Auth:token', response.headers['x-token'])
  }

  async function logOut() {
    await AsyncStorage.clear()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, logIn, logOut, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(){
  const context = useContext(AuthContext)
  return context
}