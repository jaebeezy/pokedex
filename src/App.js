import React, { useEffect, useState, useRef, useCallback } from "react";

import axios from "axios";

import Pokemon from "./components/Pokemon";
import Footer from "./components/Footer";
import Spinner from "./components/Spinner";

import { Title, Container, Pokedex } from "./styles/components";

// using lodash for startCase method (uppercasing first letter and removing punctuation)
var _ = require("lodash");

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const openPokemonRef = useRef(new Set());

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
      setError(true);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  // this is to track how many pokemon are currently open on the page
  // this can be used to dynamically calculate an appropriate z-index
  // value to ensure the most recent pokemon is at the top
  const openPokemon = useCallback((pokeNumber) => {
    const set = openPokemonRef.current;
    if (set.has(pokeNumber)) {
      set.delete(pokeNumber);
    } else {
      set.add(pokeNumber);
    }

    return set.size;
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
        error ? (
          <button onClick={() => fetchPokemons()}>Refetch</button>
        ) : (
          <Spinner />
        )
      ) : (
        <Pokedex>
          {pokemons.map((idx, val) => (
            <Pokemon
              key={idx.url}
              name={_.startCase(idx.name)}
              image={fetchPokemonImage(val)}
              url={idx.url}
              num={val + 1}
              onOpenClose={openPokemon}
            />
          ))}
        </Pokedex>
      )}

      <Footer />
    </Container>
  );
};

export default App;
