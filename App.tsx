
import React,{useState} from "react";
import {
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput
} from 'react-native'

import { styles } from './styles'

const App = () => {
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
                    />

                </View>
                <View style={styles.inputArea}>
                    <Text style={styles.inputLabel}>
                        Senha:
                    </Text>
                    <TextInput style={styles.inputField}
                        placeholder="Digite sua senha"
                        secureTextEntry
                    />
                </View>
                <View style={styles.aditionals}>
                    <TouchableOpacity style={styles.forgotBtnArea}>
                        <Text style={styles.forgotBtnText}>
                            Esqueci minha senha
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        Entrar
                    </Text>
                </TouchableOpacity>
                <View style={styles.signUpArea}>
                    <Text style={styles.signUptext}>
                        Não tem uma conta?
                    </Text>
                    <TouchableOpacity>
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