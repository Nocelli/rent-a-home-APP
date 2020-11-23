import axios from 'axios'
import { AsyncStorage } from 'react-native'

const api = axios.create({
    baseURL: "https://giant-deer-98.loca.lt"
})

api.interceptors.response.use(async function (response) {
    if(response.headers['x-token']){
        api.defaults.headers['x-token'] = response.headers['x-token']
        await AsyncStorage.setItem('Auth:token', response.headers['x-token'])
    }

    return response;
  })

export default api