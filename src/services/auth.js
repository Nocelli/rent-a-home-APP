import api from "./api";

export async function logIn(user) {
    try {
        const response = await api.post('/login',user)
        return response
    } 
    catch (error) {
        return error
    }
}

export async function SingUp(user) {
    try {
        const response = await api.post('/register', user)
        return response
    } 
    catch (error) {
        return error
    }
}
