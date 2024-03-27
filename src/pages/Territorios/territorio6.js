import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {
  // Suponha que você tenha uma lista de últimos lançamentos de filmes
  const latestMovies = [
    {
      title: "Filme 1",
      imageUrl: require("./../../../assets/Elefante.jpg"),
    },
    {
      title: "Filme 2",
      imageUrl: require("./../../../assets/Elefante.jpg"),
    },
    {
      title: "Filme 3",
      imageUrl: require("./../../../assets/Elefante.jpg"), // Substitua pelo caminho correto e nome da imagem
    },
    // Adicione mais filmes conforme necessário
  ];

  return (
    <div>
      <h1>Últimos Lançamentos</h1>
      <Carousel>
        {latestMovies.map((movie, index) => (
          <div key={index}>
            <img src={movie.imageUrl} alt={movie.title} />
            <p>{movie.title}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
