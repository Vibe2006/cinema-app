//HOME
import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './styleSaudacao.js';
// Importe as imagens diretamente, sem a necessidade de acessar a propriedade default
import dunaImage from "./../../../assets/duna.png";
import farofaImage from "./../../../assets/farofa.png";
import madameImage from "./../../../assets/madame2.jpg";
import { TouchableOpacity, View } from "react-native-web";
// const[modal,setModal]= useState(0)
// const[animal,setFIlme]= useState(0)
const Home = () => {
  // Suponha que você tenha uma lista de últimos lançamentos de filmes
  const latestMovies = [
    {
      title: "Filme 1",
      imageUrl: dunaImage,
    },
    {
      title: "Filme 2",
      imageUrl: madameImage,
    },
    {
      title: "Filme 3",
      imageUrl: farofaImage, // Substitua pelo caminho correto e nome da imagem
    },
    // Adicione mais filmes conforme necessário
  ];

  // Verifique se há uma imagem na primeira posição e, se não houver, substitua por uma imagem padrão
  if (!latestMovies[0].imageUrl) {
    latestMovies[0].imageUrl = dunaImage; // Substitua pelo caminho da imagem padrão
  }
  // function carregar(modal){
  //   setVisivel(true);
  //   setFIlme(modal);
  // }
  return (
    <View style={styles.container}>
    
        <h1>Últimos Lançamentos</h1>
        <Carousel showArrows={false} emulateTouch={true} showStatus={false} autoPlay={true} interval={3000} showThumbs={false} showIndicators={false}>
          {latestMovies.map((movie, index) => (
            <div key={index}>
              {/* Use a propriedade "src" diretamente */}
              <img src={movie.imageUrl} alt={movie.title} />
              <p>{movie.title}</p>
            </div>
          ))}
        </Carousel>
          <View style={styles.button}>
            {/* Tentando colocar botao pipoca */}
          {/* <TouchableOpacity style={styles.button} title="territorio1"  onPress={() =>  carregar(0)}>
              <Image source={require('./../../../assets/pipoca.png')} style={{ width: 160, height: 160,  borderRadius:200/2 }} /> 
            </TouchableOpacity> */}
          </View>

   </View>

  );
};

export default Home;
