//DESENVOLVEDORES

import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Text, View, Image,Button,TouchableOpacity,} from "react-native-web";

export default StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:'center',
        backgroundColor: 'black',
    },
    img:{
        flex: 1,
       //alignItems:"center",
        //justifyContent:'center',
        //marginBottom:2,        
        //marginTop:"55%",
        width:"100%",
        borderRadius:0,
    },
    ButtonTxt:{
        fontSize: 23,
        fontWeight:'bold',
        marginTop:-115,
        color: 'white',
        fontFamily: 'Verdana',
        marginLeft:170,
    },
   tituloDev:{
    color: 'white',
    fontFamily: 'Verdana',
   }

 

})