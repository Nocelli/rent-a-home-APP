import React, { useState } from 'react'
import { KeyboardAvoidingView, Text, View, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { TextInputWithTitle } from '../components/TextInputWithTitle'
import { AntDesign } from '@expo/vector-icons';
import { useAuth } from '../components/AuthContext';
import { createAlert } from '../utils/createAlert'

const SignUp = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [name, setName] = useState('')
    const { signUp } = useAuth()

    async function handleSignUp() {
        try {
            if(password == passwordConfirmation){
                const response = await signUp({name,email,password})
                if (!response)
                    createAlert()
            }
            else{
                createAlert('As senhas não são iguais', "Erro ao cadastrar")
            }
            

        } catch (error) {
            createAlert(error.response.data.error)
        }
    }

    function navigateSignUp() {
        navigation.navigate('SignIn')
    }

    return (
        <View style={styles.contentContainer}>
            <View style={styles.blobTopLeft} />
            <View style={styles.blobBottom} />

            <View style={styles.navContainer}>
                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={navigateSignUp}>
                    <AntDesign name="arrowleft" size={24} color="#fff" />
                    <Text style={styles.navText}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.textTitle}>Cadastro</Text>
            </View>

            <KeyboardAvoidingView behavior="position" style={styles.formContainer}>
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
                <TextInputWithTitle
                    title='Confirme a senha'
                    setValue={setPasswordConfirmation}
                    value={passwordConfirmation}
                    secureTextEntry={true}
                />
                <TextInputWithTitle
                    title='Nome ou apelido'
                    setValue={setName}
                    value={name}
                />

                <TouchableOpacity style={styles.formButtom} onPress={handleSignUp}>
                    <Text style={styles.formButtomText}>Cadastrar</Text>
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
        height: 600,
        borderRadius: 250,
        zIndex: 0,
        left: -70,
        bottom: -100,
    },
    formContainer: {
        margin: 50,
        marginTop: '60%',
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


export default SignUp