import { StyleSheet } from "react-native";

export default StyleSheet.create({
    
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:'center',
        backgroundColor: '#111111',
    },
    button:{
        flex:1,
        alignItems:"center",
        justifyContent:'center',
    },
    
    img:{
        flex: 1,
        alignItems:"center",
        justifyContent:'center',
        marginBottom:2,        
        marginTop:"55%",
        width:"100%",
    },
    VwButtons:{
        flex:2,
        alignItems:"center",
        justifyContent:'center',
    },

    Button:{
        width:130,
        height:45,
        backgroundColor:'#748255',
        alignItems:"center",
        borderRadius : 8,
        marginBootom: 10,
        marginTop:5,


    },

    ButtonTxt:{
        fontSize: 20,
        fontWeight:'bold',
        marginTop:7,
        color:' white',
        textAlign:'center',
        fontFamily: 'Verdana',

    },

    // nome:{
    //     fontFamily: 'Arial',
    //     color:'red',
    // },
     
    vNome:{
        color:'#748255',
        fontSize: 40,
        marginTop:40,
        fontWeight: 'bold', //Mexi na grossura da letra
    }
      
})