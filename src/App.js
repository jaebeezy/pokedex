import React, { useEffect, useState } from "react";

import axios from "axios";

import Pokemon from "./Pokemon";
import "./App.css";
import styled from "styled-components";

const Title = styled.h1`
  color: #333;
  font-size: 32px;
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

  // using a different api to fetch the pokemon art
  const fetchPokemonImage = (index) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      index + 1
    }.png`;
  };

  return (
    <div className="App">
      <Title>Pokédex</Title>

      <div>
        {pokemons.map((idx, val) => (
          <Pokemon
            key={idx.url}
            name={idx.name.toUpperCase()}
            image={fetchPokemonImage(val)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
