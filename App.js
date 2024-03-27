import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity  } from 'react-native';
import{NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Ionicons } from '@expo/vector-icons';

import Carregamento from './src/pages/Carregamento/indexCarregamento';
import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre/indexSobre';
import Cadastro from './src/pages/Cadastro/indexCadastro';
import Saudacao from './src/pages/Saudacao/indexSaudacao';
import Login from './src/pages/Login/indexLogin';
import OptionsMenu from './src/pages/OptionsMenu/OptionsMenu'; 

import Territorios from './src/pages/Territorios/territorio1';
import Territorios2 from './src/pages/Territorios/territorio2';
import Territorios3 from './src/pages/Territorios/territorio3';
import Territorios4 from './src/pages/Territorios/territorio4';
import Territorios5 from './src/pages/Territorios/territorio5';
import Territorios6 from './src/pages/Territorios/territorio6';



const Stack = createNativeStackNavigator();

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   Chiller: require('./assets/fonts/FontsFree-Net-CHILLER.ttf"'), // Caminho para o arquivo TTF da fonte Chiller
  // });
  // if (!fontsLoaded) {
  //   return null; // Aguarde até que as fontes sejam carregadas antes de renderizar o aplicativo
  // }
  
  return (
    <NavigationContainer>
      <Stack.Navigator>

        {/* //Criei uma pasta p/ organizaer */}
        <Stack.Screen name="Carregamento" component={Carregamento}
          options={{
            title: "movie thriller",
            headerTitleStyle:{fontWeight:'bold',fontSize:30,color: 'white',marginLeft: 50,fontFamily: 'Verdana',},
            headerStyle:{backgroundColor: "black",alignItems:"center",},
            // headerTIntColor:"#0000FF",
            headerShown: false,
          }}
        />

        {/* <Stack.Screen name="Home" component={Home}
          options={{
            title: "movie thriller",
            headerTitleStyle:{fontWeight:'bold',fontSize:30,color: 'white',marginLeft: 50,fontFamily: 'Verdana',},
            headerStyle:{backgroundColor: "black",alignItems:"center",},
            // headerTIntColor:"#0000FF",
            headerShown: false,
          }}
        /> */}
       <Stack.Screen name="Home" component={Home}
          options={({ navigation }) => ({
            title: "movie thriller" ,
            headerTitleStyle:{
              fontWeight: 'bold',
              fontSize: 30,
              color: '#FF6400',
              fontFamily: 'Chiller',
              // marginLeft:'50%',
              textAlign: 'center', // Centralizar o texto horizontalmente
              flexGrow: 1, // Permitir que o título ocupe o espaço disponível
            },
            headerStyle:{alignItems:"center",height: "100%", backgroundColor:'black'} , 
            // headerTIntColor:"#0000FF",
            headerLeft: () => (
              <TouchableOpacity
                style={{ marginLeft: 10 }}
                onPress={() => navigation.navigate('OptionsMenu')} // Navegue para a tela do menu de opções ao pressionar
              >
                <Ionicons name="menu-outline" size={24} color="white" />
              </TouchableOpacity>
            ),

          //headerShown: false,
        })}/>

   

        <Stack.Screen name="Sobre" component={Sobre}
          options={{
            title: "Movie thriller",
            headerTitleStyle:{fontWeight:'bold',fontSize:30,color: 'white', fontFamily: 'Verdana',},
            headerStyle:{alignItems:"center",height: "100%", backgroundColor:'red'} , 
            // headerTIntColor:"#0000FF",
          }}
        />
        <Stack.Screen name="Cadastro" component={Cadastro}
          options={{
            title: "Cadastro",
            headerTitleStyle:{fontWeight:'bold',fontSize:30,color: 'white',marginLeft: 150,fontFamily: 'Verdana',},
            headerStyle:{backgroundColor: "#748255",alignItems:"center",}          
            //           // headerTIntColor:"#0000FF",
          }}
        />
        <Stack.Screen name="Login" component={Login}
          options={{
            title: "Login",
            headerTitleStyle:{fontWeight:'bold',fontSize:30,color: 'white',marginLeft: 150,fontFamily: 'Verdana',},
            headerStyle:{backgroundColor: "black",alignItems:"center",} ,        
            headerLeft: null,   
            headerShown: false,
          }}
        />
         <Stack.Screen name="Saudacao" component={Saudacao}
          options={{
            title: "movie thriller",
            headerTitleStyle:{fontWeight:'bold',fontSize:30,color: 'white',marginLeft: 50,fontFamily: 'Verdana',},
            headerStyle:{backgroundColor: "black",alignItems:"center",},
            // headerTIntColor:"#0000FF",
            headerShown: false,
          }}
        />
         {/* <Stack.Screen name="Saudacao" component={Saudacao}
          options={({ navigation }) => ({
            title: "movie thriller",
            headerTitleStyle:{fontWeight:'bold',fontSize:30,color: 'white', fontFamily: 'Verdana',},
            headerStyle:{alignItems:"center",height: "100%", backgroundColor:'red'} , 
            // headerTIntColor:"#0000FF",
            headerLeft: () => (
              <TouchableOpacity
                style={{ marginLeft: 10 }}
                onPress={() => navigation.navigate('OptionsMenu')} // Navegue para a tela do menu de opções ao pressionar
              >
                <Ionicons name="menu-outline" size={24} color="black" />
              </TouchableOpacity>
            ),

          //headerShown: false,
        })}/> */}

        <Stack.Screen
          name="OptionsMenu"
          component={OptionsMenu}
          options={{ title: 'Opções' }}
        />
         <Stack.Screen name="Territorio1" component={Territorios}
        options={{
          title: "Territorio 1",
          headerTitleStyle:{fontWeight:'bold',fontSize:30,color: 'white',marginLeft: 130,fontFamily: 'Verdana',},
          headerStyle:{backgroundColor: "#748255",alignItems:"center",},
          // headerTIntColor:"#0000FF",
        }}
        />
        <Stack.Screen name="Ter2" component={Territorios2}
        options={{
          title: "Territorio 2",
          headerTitleStyle:{fontWeight:'bold',fontSize:30,color: 'white',marginLeft: 130,fontFamily: 'Verdana',},
          headerStyle:{backgroundColor: "#748255",alignItems:"center",},
          // headerTIntColor:"#0000FF",
        }}
        />
        <Stack.Screen name="Ter3" component={Territorios3}
        options={{
          title: "Territorio 3",
          headerTitleStyle:{fontWeight:'bold',fontSize:30,color: 'white',marginLeft: 130,fontFamily: 'Verdana',},
          headerStyle:{backgroundColor: "#748255",alignItems:"center",},
          // headerTIntColor:"#0000FF",
        }}
        />
         <Stack.Screen name="Ter4" component={Territorios4}
        options={{
          title: "Territorio 4",
          headerTitleStyle:{fontWeight:'bold',fontSize:30,color: 'white',marginLeft: 130,fontFamily: 'Verdana',},
          headerStyle:{backgroundColor: "#748255",alignItems:"center",},
          // headerTIntColor:"#0000FF",
        }}
        />
        <Stack.Screen name="Ter5" component={Territorios5}
        options={{
          title: "Territorio 5",
          headerTitleStyle:{fontWeight:'bold',fontSize:30,color: 'white',marginLeft: 130,fontFamily: 'Verdana',},
          headerStyle:{backgroundColor: "#748255",alignItems:"center",},
          // headerTIntColor:"#0000FF",
        }}
        />
         <Stack.Screen name="Ter6" component={Territorios6}
        options={{
          title: "Territorio 6",
          headerTitleStyle:{fontWeight:'bold',fontSize:30,color: 'white',marginLeft: 130,fontFamily: 'Verdana',},
          headerStyle:{backgroundColor: "#748255",alignItems:"center",},
          // headerTIntColor:"#0000FF",
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}