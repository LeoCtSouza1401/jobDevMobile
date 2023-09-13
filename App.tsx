
import React, { useState, useSyncExternalStore } from "react";
import {
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput
} from 'react-native'

import { styles } from './styles'
import { isEmptyStatement } from "typescript";

const App = () => {
    const [emailField, setEmailField] = useState<string>(' ')
    const [passwordField, setPasswordField] = useState<string>(' ')


    const [status, setStatus] =  useState(' ')

    const handleForgetButton = () => {

    }

    const handleLoginButton = () => {
        if(emailField == ''){
            alert('Email vazio')
        }if(passwordField == ''){
            alert('Senha vazia')
        }else{
            alert('Login concluído')
        }
        
    }

    const handleSignUpButton = () => {

    }

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <Image source={require('./assets/logo.png')} style={styles.logo} />
                <Text style={styles.h1}> Login </Text>
                <Text style={styles.h2}> Bem Vindo(a)! Digite seus dados abaixo.</Text>

                <View style={styles.inputArea}>
                    <Text style={styles.inputLabel}>
                        Email:
                    </Text>
                    <TextInput style={styles.inputField}
                        placeholder="Digite seu email"
                        placeholderTextColor="#999"
                        value={emailField}
                        onChangeText={t => setEmailField(t)}
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />

                </View>
                <View style={styles.inputArea}>
                    <Text style={styles.inputLabel}>
                        Senha:
                    </Text>
                    <TextInput style={styles.inputField}
                        placeholder="Digite sua senha"
                        placeholderTextColor="#999"
                        secureTextEntry
                        value={passwordField}
                        onChangeText={(text) => { setPasswordField(text) }}
                    />
                    <Text>
                        Credenciais inválidas
                    </Text>
                </View>
                <View style={styles.aditionals}>
                    <TouchableOpacity onPress={handleForgetButton} style={styles.forgotBtnArea}>
                        <Text style={styles.forgotBtnText}>
                            Esqueci minha senha
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={handleLoginButton} style={styles.button}>
                    <Text style={styles.buttonText}>
                        Entrar
                    </Text>
                </TouchableOpacity>
                <View style={styles.signUpArea}>
                    <Text style={styles.signUptext}>
                        Não tem uma conta?
                    </Text>
                    <TouchableOpacity onPress={handleSignUpButton}>
                        <Text style={styles.signUpBtnText}>
                            Cadastre-se
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footerArea}>
                    <Text style={styles.footertext}>
                        Criado por Leonardo
                    </Text>
                </View>

            </View>
        </ScrollView>
    );
}

export default App;