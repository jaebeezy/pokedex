import React, { useEffect, useState } from "react";

import axios from "axios";

import Pokemon from "./Pokemon";
import Footer from "./Footer";
import Spinner from "./Spinner";

import { Title, Container, Pokedex } from "./styles/components";

// using lodash for startCase method (uppercasing first letter and removing punctuation)
var _ = require("lodash");

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetching all 151 pokemons from pokeapi
    const fetchPokemons = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=151/"
        );
        // loading is done once the data is returned
        setPokemons(response.data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPokemons();
  }, []);

  // fetching the pokemon sprite individually
  const fetchPokemonImage = (index) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      index + 1
    }.png`;
  };

  return (
    <Container>
      <Title>Pokédex</Title>

      {loading ? (
        <Spinner />
      ) : (
        <Pokedex>
          {pokemons.map((idx, val) => (
            <Pokemon
              key={idx.url}
              name={_.startCase(idx.name)}
              image={fetchPokemonImage(val)}
              url={idx.url}
              num={val + 1}
            />
          ))}
        </Pokedex>
      )}

      <Footer />
    </Container>
  );
};

export default App;
