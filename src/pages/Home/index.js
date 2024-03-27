//HOME
import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// importa os icones
import Icon from 'react-native-vector-icons/FontAwesome'; // Por exemplo, para usar ícones da biblioteca FontAwesome
import { FaShoppingCart } from 'react-icons/fa';

// importa as fonts
import * as Font from 'expo-font';


// import css
import styles from './style.js';

// Importe as imagens diretamente, sem a necessidade de acessar a propriedade default
import dunaImage from "./../../../assets/duna.png";
import farofaImage from "./../../../assets/farofa.png";
import madameImage from "./../../../assets/madame2.jpg";
import cartaz1 from "./../../../assets/cartaz1.jpg";
import cartaz2 from "./../../../assets/cartaz2.jpg";


// conteudo 1
import filme1 from "./../../../assets/filme1.jpg";
import filme2 from "./../../../assets/fime2.jpg";
import filme3 from "./../../../assets/filme3.jpg";
import filme4 from "./../../../assets/filme4.jpg";
import filme5 from "./../../../assets/filme 5.jpg";
import filme11 from "./../../../assets/filme11.jpg";


// conteudo 2
import filme6 from "./../../../assets/filme6.jpg";
import filme7 from "./../../../assets/filme7.jpg";
import filme8 from "./../../../assets/filme8.jpg";
import filme9 from "./../../../assets/filme9.png";
import filme10 from "./../../../assets/filme10.jpg";
import filme12 from "./../../../assets/filme12.png";

// combos
import combo1 from "./../../../assets/combo1.jpg";
import combo2 from "./../../../assets/combo2.jpg";
import combo7 from "./../../../assets/combo7.jpg";
import combo6 from "./../../../assets/combo6.jpg";
import combo5 from "./../../../assets/combo5.png";



import { TouchableOpacity, View, Image,Text} from "react-native-web";
import { Dimensions, ScrollView, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
var {width , height} = Dimensions.get('window');
// const[modal,setModal]= useState(0)
// const[animal,setFIlme]= useState(0)
const Home = () => {
  const movies = [
    {imageUrl: filme1},
    {imageUrl: filme2},
    {imageUrl: filme3},
    {imageUrl: filme4},
    {imageUrl: filme5},
    {imageUrl: filme11},
    
    // Adicione mais filmes conforme necessário
  ];

  const movies2 = [
    {imageUrl: filme6},
    {imageUrl: filme7},
    {imageUrl: filme8},
    {imageUrl: filme9},
    {imageUrl: filme10},
    {imageUrl: filme12},
    
    
    // Adicione mais filmes conforme necessário
  ];
  

  // Suponha que você tenha uma lista de últimos lançamentos de filmes
  const latestMovies = [
    {
      // title: "Duna ll",
      imageUrl: dunaImage,
    },
    {
      // title: "Madame Teia",
      imageUrl: madameImage,
    },
    {
      // title: "Faroeiros",
      imageUrl: farofaImage, // Substitua pelo caminho correto e nome da imagem
    },
    {
      // title: "Faroeiros",
      imageUrl: cartaz1, // Substitua pelo caminho correto e nome da imagem
    },
    {
      // title: "Faroeiros",
      imageUrl: cartaz2, // Substitua pelo caminho correto e nome da imagem
    },
    // Adicione mais filmes conforme necessário
  ];


  const latestMovies2 = [
    {

      imageUrl: combo1,
    },
    {
  
      imageUrl: combo2,
    },
    {
   
      imageUrl: combo5,
    },
    {
   
      imageUrl: combo7,
    },
    {
   
      imageUrl: combo6,
    },

  ];

  // Verifique se há uma imagem na primeira posição e, se não houver, substitua por uma imagem padrão
  if (!latestMovies[0].imageUrl) {
    latestMovies[0].imageUrl = dunaImage; // Substitua pelo caminho da imagem padrão
  }
  // function carregar(modal){
  //   setVisivel(true);
  //   setFIlme(modal);
  // }
let movieName = 'Ant-Man and the Wasp: Quatumania';
const navigation = useNavigation();
  return (
    
    

    <View style={styles.container}>
      <Icon name="map-marker" size={20} style={styles.icon} />
      <Text style={styles.textoIcon}>São Paulo, Brasil</Text>

      <FaShoppingCart size={20}  style={styles.iconCompra} />


        <View style={styles.destaque}>
        <Carousel 
  showArrows={false} 
  emulateTouch={true} 
  showStatus={false} 
  autoPlay={true} 
  interval={5000} 
  showThumbs={false} 
  showIndicators={false} 
  infiniteLoop={true} // Defina esta propriedade como true
>
  {latestMovies.map((movie, index) => (
    <div key={index}>
      <img src={movie.imageUrl} alt={movie.title} />
      <p>{movie.title}</p>
    </div>
  ))}
</Carousel>
        </View>
        
        

        <View style={styles.conteudo}>
  <Text style={styles.texto}>Filmes em Cartaz</Text>
  <Carousel
    showArrows={false}
    showStatus={false}
    showThumbs={false}
    emulateTouch={true}
    showIndicators={false}
    autoPlay={true}
    interval={7000}
    infiniteLoop={true}
    style={{ display: "flex", justifyContent: "center" }}
  >
    {/* Renderização dos filmes em pares */}
    {movies.reduce((pairs, movie, index) => {
      if (index % 2 === 0) {
        pairs.push(
          <div key={index} style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <div style={styles.movieContainer}>
              <img src={movies[index].imageUrl} alt={movies[index].title} style={styles.movieImage} />
              <p style={styles.movieTitle}>{movies[index].title}</p>
            </div>
            {movies[index + 1] && (
              <div style={styles.movieContainer}>
                <img src={movies[index + 1].imageUrl} alt={movies[index + 1].title} style={styles.movieImage} />
                <p style={styles.movieTitle}>{movies[index + 1].title}</p>
              </div>
            )}
          </div>
        );
      }
      return pairs;
    }, [])}
  </Carousel>
</View>


        <View style={styles.conteudo2}>
        <Carousel
  showArrows={false}
  showStatus={false}
  showThumbs={false}
  emulateTouch={true}
  showIndicators={false}
  autoPlay={true}
  interval={7000}
  infiniteLoop={true}
  style={{ display: "flex", justifyContent: "center" }}
>
  {/* Renderização dos filmes em pares */}
  {movies2.reduce((pairs, movie, index) => {
    if (index % 2 === 0) {
      pairs.push(
        <div key={index} style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
          <div style={styles.movieContainer}>
            <img src={movies2[index].imageUrl} alt={movies2[index].title} style={styles.movieImage} />
            <p style={styles.movieTitle}>{movies2[index].title}</p>
          </div>
          {movies2[index + 1] && (
            <div style={styles.movieContainer}>
              <img src={movies2[index + 1].imageUrl} alt={movies2[index + 1].title} style={styles.movieImage} />
              <p style={styles.movieTitle}>{movies2[index + 1].title}</p>
            </div>
          )}
        </div>
      );
    }
    return pairs;
  }, [])}
</Carousel>

        </View>
         
        <View style={styles.combo}>
          <Carousel showArrows={false} emulateTouch={true} showStatus={false} autoPlay={true} interval={5000} showThumbs={false} showIndicators={false}  infiniteLoop={true}>
            {latestMovies2.map((movie, index) => (
              <div key={index}>
                {/* Use a propriedade "src" diretamente */}
                <img src={movie.imageUrl} alt={movie.title} />
                <p>{movie.title}</p>
              </div>
            ))}
          </Carousel>
        </View>
        

   </View>

  );
};


export default Home;

