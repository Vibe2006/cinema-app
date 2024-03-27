//Carregamento
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TouchableOpacity } from "react-native-web";
import styles from './styleCarregamento.js';
import { useNavigation, useRoute } from "@react-navigation/native";

export default function Carregamento() {
    const navigation = useNavigation();
    const route = useRoute();
   

    


    // Obtendo os parâmetros da rota
    const { nome, email, telefone } = route.params || {};

    const Teste = () => {
        if (telefone != undefined) {
            navigation.navigate('Saudacao');
        } else {
            navigation.navigate('Cadastro');
        }
    };

    const LoginEntrada = () => {
        navigation.navigate('Login');
    };
    

    return (
        <View style={styles.container}>
            <View style={styles.carregamento}>
                <View style={styles.img}>
                    <Image source={require('./../../../assets/carrega.gif')} style={{ width: 200, height: 200, marginBottom:'80%' }} /> 
                </View>

                <View style={styles.ViewButton}>
                    <TouchableOpacity style={styles.Button} onPress={() => LoginEntrada()}>
                        <Text style={styles.ButtonTxt}>Iniciar</Text>
                    </TouchableOpacity>
                </View>

                {/* Exibindo os dados fornecidos pelo usuário */}
                
               
            </View>

            
            
            <StatusBar style="auto"/>
        </View>
    );
}
