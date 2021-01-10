import React, { useState, useEffect } from "react";

import axios from "axios";

import styled from "styled-components";

const Info = styled.div`
  background-color: pink;

  position: absolute;

  z-index: 2;
  height: 200px;
  width: 200px;
`;

const PokemonInfo = ({ url, name }) => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(url);
        setLoading(true);
        setPokemonData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPokemonData();

    return () => {
      setPokemonData([]);
    };
  }, []);

  return (
    <Info>
      <p>Name: {name}</p>
      <p>Height: {pokemonData.height}</p>
      <p>Weight: {pokemonData.weight}</p>
      <p>Base experience:{pokemonData.base_experience}</p>
      <p>
        Stats:
        {pokemonData.stats && pokemonData.stats.map((idx) => idx.base_stat)}
      </p>
    </Info>
  );
};

export default PokemonInfo;
