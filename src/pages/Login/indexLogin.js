import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native-web";
import styles from './styleLogin.js';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {
    const navigation = useNavigation();
    
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [alertMessage, setAlertMessage] = useState("");

    const handleLogin = () => {
        // Lógica de validação do e-mail e senha aqui
        // Se a validação falhar, exiba uma mensagem de erro
        // Caso contrário, navegue para a próxima tela
        
        // Exemplo de validação básica:
        if (email.trim() === "" || senha.trim() === "") {
            setAlertMessage("Por favor, preencha todos os campos.");
        } else {
            // Simulação de login bem-sucedido
            setTimeout(() => {
                navigation.navigate('Home', {
                    email,
                });
            }, 2000); // Navega para Saudacao após 2 segundos
        }
    };

    return (
        <View style={styles.container}>
            <View style={{ width: '50%', height: '25%', backgroundColor: '#b81414', marginLeft: '27%', marginTop: '10%' }}>
                <Image source={require('./../../../assets/Login.png')} style={{ width: '100%', height: '100%' }} />
            </View>
            <StatusBar style="auto" />
            <View style={{ width: '97%', height: '50%', marginTop: '15%', marginLeft: '2%', borderWidth: 3, borderColor: 'white' }}>
                <View style={{ width: '96%', height: '100%', marginLeft: '2%', backgroundColor: '#b81414' }}>
                    
                    <TextInput
                        style={{ width: '100%', height: '10%', marginTop: '7%', borderWidth: 2, borderColor: 'white', backgroundColor: 'white', placeholderTextColor: 'black', marginLeft:1 }}
                        value={email}
                        placeholder="Digite o e-mail"
                        keyboardType="email-address"
                        onChangeText={(text) => setEmail(text)}
                    />
                    
                    <TextInput
                        style={{ width: '100%', height: '10%', marginTop: '7%', borderWidth: 2, borderColor: 'white', backgroundColor: 'white', placeholderTextColor: 'black', marginLeft:1 }}
                        placeholder="Digite a senha"
                        secureTextEntry={true}
                        onChangeText={(text) => setSenha(text)}
                    />
                   
                    <TouchableOpacity
                        style={{
                            width: 210, height: 50, backgroundColor: 'black',
                            alignItems: "center", marginLeft: '17%', marginTop: '20%',
                            borderRadius: 8,
                        }}
                        onPress={handleLogin}
                    >
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10, color: 'white', textAlign: 'center', fontFamily: 'Verdana' }}>Login</Text>
                    </TouchableOpacity>
                    {alertMessage ? (
                        <Text style={{ color: 'red', textAlign: 'center', marginTop: 10 }}>{alertMessage}</Text>
                    ) : null}
                </View>
            </View>
        </View>
    );
}
