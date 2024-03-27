

import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:'center',
       //  backgroundColor: 'green',
    },
    territorio:{
        flex :2,
        flexDirection:"row",
        justifyContent:"space-around",

    },

    buttonTer:{
        flex: 2,
        marginBootom: 5,
        marginTop:20,
        width:150,
        height:200,
        marginLeft:30,
        marginRight:30,
        alignItems:"center",
        

    },
    imgTer:{
      
        width: 150, 
        height: 150,
        borderRadius : 10,
    
    },
    textAnimal:{
        flex: 12,
        fontSize:15,
        fontFamily:'century gothic',
        margin:20,
        fontWeight:'bold',

    },
    modal:{
        flex: 1,
        backgroundColor: "#748255",
         alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        height: "100%",
       
      },

      textTitulo:{
        flex: 2,
        marginTop: 30,
        fontSize:30,
        fontFamily:'century gothic',
        margin:20,
        fontWeight:'bold',
        color: 'white',

    },
    text:{
        flex: 12,
        fontSize:18,
        fontFamily:'century gothic',
        margin:20,
        padding:10,
    },
    imgModal:{
        flex: 1,
        width: 400, 
        height: 200,
        borderRadius : 5,
        marginTop: 45,
    },
    Button:{
        BorederColor: 'black',
        width:240,
        height:45,
        backgroundColor:'#98a16f',
        alignItems:"center",
        borderRadius : 8,
        marginBottom:'20%'
    },
    ButtonTxt:{
        fontSize: 20,
        fontWeight:'bold',
        marginTop:7,
        color:' white',
        textAlign:'center',
        fontFamily: 'Verdana'

    },
})