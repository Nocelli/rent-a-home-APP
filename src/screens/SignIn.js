import React, { useState } from 'react'
import { KeyboardAvoidingView, Text, View, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useAuth } from '../components/AuthContext'
import { AntDesign } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { createAlert } from '../utils/createAlert'
import { TextInputWithTitle } from '../components/TextInputWithTitle';


const SignIn = ({ navigation }) => {
    const { logIn } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleLogIn() {
        try {
            const response = await logIn({ email, password })
            if (!response)
                createAlert("Erro ao logar","Senha ou email incorreto!")

        } catch (error) {
            createAlert(error.response.data.error)
        }
    }

    function navigateSignUp() {
        navigation.navigate('SignUp')
    }

    return (
        <View style={styles.contentContainer}>
            <View style={styles.blobTopLeft} />
            <View style={styles.blobBottom} />

            <View style={styles.navContainer}>
                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={navigateSignUp}>
                    <AntDesign name="arrowleft" size={24} color="#fff" />
                    <Text style={styles.navText}>Cadastro</Text>
                </TouchableOpacity>
                <Text style={styles.textTitle}>Login</Text>
            </View>

            <KeyboardAvoidingView
                behavior={Platform.Os == "ios" ? "padding" : "position"}
                style={styles.formContainer}
            >
                <TextInputWithTitle
                    title='Email'
                    setValue={setEmail}
                    value={email}
                    keyboardType={'email-address'}
                />
                <TextInputWithTitle
                    title='Senha'
                    setValue={setPassword}
                    value={password}
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.formButtom} onPress={handleLogIn}>
                    <Text style={styles.formButtomText}>Logar</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        backgroundColor: '#e0e0e5'
    },
    blobTopLeft: {
        backgroundColor: '#00BFA6',
        position: 'absolute',
        width: 350,
        height: 350,
        borderRadius: 175,
        zIndex: -2,
        left: -100,
        top: -200,
    },
    blobBottom: {
        backgroundColor: '#003932',
        position: 'absolute',
        width: 500,
        height: 500,
        borderRadius: 250,
        zIndex: 0,
        left: -70,
        bottom: -135,
    },
    formContainer: {
        margin: 50,
        marginTop: '110%',
        position: 'absolute',
        width: '70%'
    },
    navContainer: {
        margin: 30,
        zIndex: -1
    },
    navText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 16,
        textAlign: 'left',
        lineHeight: 24,
        paddingLeft: 10
    },
    textTitle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 36,
        textAlign: 'left',
        lineHeight: 24,
        paddingTop: 35
    },
    formButtom: {
        backgroundColor: '#00BFA6',
        borderRadius: 25,
        padding: 12,
        marginTop: 50,
        margin: 25,
        textAlign: 'center',
        width: '50%',
        alignSelf: 'center'
    },
    formButtomText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 24,

    }
});


export default SignIn