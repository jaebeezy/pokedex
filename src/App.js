import React, { useEffect, useState } from "react";

import axios from "axios";

import Pokemon from "./Pokemon";
import Footer from "./Footer";
import styled from "styled-components";
import { Title } from "./styles/components";

// using lodash for startCase method (uppercasing first letter and removing punctuation)
var _ = require("lodash");

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: "Press Start 2P", cursive;
  height: 100%;
  width: 100%;
`;

const Pokedex = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
`;

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // fetching all 151 pokemons from pokeapi
    const fetchPokemons = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=151/"
        );
        // loading is done once the data is returned
        setLoading(true);
        setPokemons(response.data.results);
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

      <Pokedex>
        {pokemons.map((idx, val) => (
          <Pokemon
            key={idx.url}
            name={_.startCase(idx.name)}
            image={fetchPokemonImage(val)}
            url={idx.url}
          />
        ))}
      </Pokedex>
      <Footer />
    </Container>
  );
};

export default App;
