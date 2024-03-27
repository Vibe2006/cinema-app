// DESENVOLVEDORES
import { StatusBar } from "expo-status-bar";
import { Text, View, Image,Button,TouchableOpacity } from "react-native-web";
import styles from './styleSobre.js';
import { useNavigation } from "@react-navigation/native";

export default function Sobre(){
    const navigation = useNavigation();

    return(
        //FAVOR NÃO MEXER, Foi criado uma view para cada DEV e Adicionado uma img
        <View style = {styles.container}>
           <h1 style={styles.tituloDev}>DEVS</h1>
            <View style={styles.img}>
                    <Image source={require('./../../../assets/Ana.jpeg')} style={{ width: 160, height: 160,  borderRadius:200/2 }} /> 
                    <Text style={styles.ButtonTxt}> Ana Carolina</Text>
                </View>
            
            <View style={styles.img}>
                <Image source={require('./../../../assets/Ester.jpeg')} style={{ width: 160, height: 160, borderRadius:200/2 }} /> 
                <Text style={styles.ButtonTxt}>Ester Maysa</Text>
            </View>
            <View style={styles.img}>
                <Image source={require('./../../../assets/Gaby.jpeg')} style={{ width: 160, height: 160, borderRadius:200/2 }} /> 
                 <Text style={styles.ButtonTxt}>Gabrielly Vasconcelos</Text>
            </View>
            <View style={styles.img}>
                    <Image source={require('./../../../assets/Vinicius.jpeg')} style={{ width: 160, height: 160, borderRadius:200/2 }} /> 
                     <Text style={styles.ButtonTxt}>Vinicius Augusto</Text>
                </View>
            
        </View>
     


    );
}