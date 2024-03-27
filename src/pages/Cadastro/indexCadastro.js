import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native-web";
import styles from './styleCadastro.js';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Cadastro() {
    const navigation = useNavigation();
    
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [alertMessage, setAlertMessage] = useState("");

    const handleCadastro = () => {
        if (senha !== confirmarSenha) {
          //setAlertMessage("As senhas não coincidem. Por favor, verifique.");
          setTimeout(() => {
            setAlertMessage("");
          }, 5000); // Limpa a mensagem após 5 segundos
        } else {
          // Lógica de cadastro aqui
          //setAlertMessage("Cadastro bem-sucedido! Redirecionando para a saudação...");
          setTimeout(() => {
            navigation.navigate('Saudacao', {
              nome,
              email,
              telefone,
            });
          }, 2000); // Navega para Saudacao após 2 segundos
        }
      };
      
      

    return (
        <View style={styles.container}>
            <View style={{ width: '50%', height: '25%', backgroundColor: 'white', marginLeft: '27%', marginTop: '5%' }}>
                <Image source={require('./../../../assets/coala.gif')} style={{ width: '100%', height: '100%' }} />
            </View>
            <StatusBar style="auto" />
            <View style={{ width: '97%', height: '68%', marginTop: '5%', marginLeft: '2%', borderWidth: 3, borderColor: 'white' }}>
                <View style={{ width: '96%', height: '100%', marginLeft: '2%', backgroundColor: '#EEE8AA' }}>
                    <TextInput
                        style={{ width: '100%', height: '50%', marginTop: '7%', borderWidth: 2, borderColor: 'white', backgroundColor: '#BDB76B', placeholderTextColor: 'black' }}
                        placeholder="Digite o Nome"
                        keyboardType="numeric"
                        onChangeText={(text) => setNome(text)}
                    />
                    <TextInput
                        style={{ width: '90%', height: '50%', marginTop: '7%', borderWidth: 2, borderColor: 'white', backgroundColor: '#BDB76B', placeholderTextColor: 'black' }}
                        value={email}
                        placeholder="Digite o e-mail"
                        keyboardType="numeric"
                        onChangeText={(text) => setEmail(text)}
                    />
                    <TextInput
                        style={{ width: '90%', height: '50%', marginTop: '7%', borderWidth: 2, borderColor: 'white', backgroundColor: '#BDB76B', placeholderTextColor: 'blue' }}
                        placeholder="Digite o telefone"
                        keyboardType="numeric"
                        onChangeText={(text) => setTelefone(text)}
                    />
                    <TextInput
                        style={{ width: '90%', height: '50%', marginTop: '7%', borderWidth: 2, borderColor: 'white', backgroundColor: '#BDB76B', placeholderTextColor: 'blue' }}
                        placeholder="Digite a senha"
                        secureTextEntry={true}
                        onChangeText={(text) => setSenha(text)}
                    />
                    <TextInput
                        style={{ width: '30%', height: '50%', marginTop: '5%', borderWidth: 2, borderColor: 'white', backgroundColor: '#BDB76B', placeholderTextColor: 'blue' }}
                        placeholder="Confirme a senha"
                        secureTextEntry={true}
                        onChangeText={(text) => setConfirmarSenha(text)}
                    />
                    <TouchableOpacity
                        style={{
                            width: 210, height: 50, backgroundColor: '#748255',
                            alignItems: "center", marginLeft: '17%', marginTop: '10%', marginBottom: '10%',
                            borderRadius: 8,
                        }}
                        onPress={handleCadastro}
                    >
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10, color: 'white', textAlign: 'center', fontFamily: 'Verdana' }}>Cadastrar</Text>
                    </TouchableOpacity>
                    {alertMessage ? (
                        <Text style={{ color: 'red', textAlign: 'center', marginTop: 10 }}>{alertMessage}</Text>
                    ) : null}
                </View>
            </View>
        </View>
    );
}
