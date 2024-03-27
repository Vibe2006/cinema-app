import { StyleSheet } from "react-native";
import { Button } from "react-native-web";

export default StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:'center',
        backgroundColor: '#b81414', 
        height: '100%', 
        //overflowY: hidden,

    },
    carregamento:{
        width:'96%', 
        height:'67%', 
        marginLeft:'0,5%', 
        marginTop:'50%',
        height: '70%', 
    },
    img:{
        flex: 1,
        alignItems:"center",
        justifyContent:'center',
        marginBottom:3,        
        marginTop:"70%",
        width:"100%",

    },
    ViewButton:{
        flex: 1,
        alignItems:"center",
        justifyContent:'center',
        marginTop:"20%",
        
    },
    Button:{
        BorederColor: 'black',
        width:240,
        height:45,
        backgroundColor:'black',
        alignItems:"center",
        borderRadius : 8,
        marginBottom:'20%'
    },
    ButtonTxt:{
        fontSize: 20,
        fontWeight:'bold',
        marginTop:7,
        color:'white',
        textAlign:'center',
        fontFamily: 'Verdana'

    },
  
  
    
})
