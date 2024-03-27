
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const OptionsMenu = ({ navigation }) => {
  const handleOptionPress = (option) => {
    // Aqui você pode adicionar a lógica para lidar com a seleção de opções do menu
    // Por exemplo, você pode navegar para diferentes telas com base na opção selecionada
    // Ou executar outras ações relevantes
    console.log('Opção selecionada:', option);  
    // Fechar o menu de opções

    
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.option} onPress={() => handleOptionPress('Opção 1')}>
        <Text>Opção 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => handleOptionPress('Opção 2')}>
        <Text>perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => handleOptionPress('Opcção 3')}>
        <Text>Opção3</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.botao} title="Iniciar" onPress={() => navigation.navigate('Sobre')}>
        <Text>Desenvolvedores</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    width: '50%', // Define a largura desejada do menu
    height: '100%', // Define a altura desejada do menu
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Cor de fundo semi-transparente
    position: 'absolute', // Define a posição absoluta para que o menu possa ser posicionado livremente
    right: 0, // Posiciona o menu à direita
    top: 0, 
  },
  option: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  
  botao:{
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,

    

},

});

export default OptionsMenu;
