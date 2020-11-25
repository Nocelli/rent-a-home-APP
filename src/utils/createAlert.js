import { Alert } from 'react-native'

export const createAlert = (msg, title) =>
Alert.alert(
    (title ? title : "Erro no sistema"),
    (msg ? msg : "Por favor tente novamente mais tarde"),
    [
        { text: "OK" }
    ]
)