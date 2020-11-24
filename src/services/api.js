import axios from 'axios'
import { AsyncStorage } from 'react-native'

const api = axios.create({
    baseURL: "https://wise-fish-87.loca.lt"
})

api.interceptors.response.use(async function (response) {
    console.log(response);
    if(response.headers['x-token']){
        api.defaults.headers['x-token'] = response.headers['x-token']
        await AsyncStorage.setItem('Auth:token', response.headers['x-token'])
    }

    return response;
  })

export default api