import React, { useState, useEffect } from "react";

import PokemonInfo from "./PokemonInfo";

import axios from "axios";

import { Card } from "./styles/components";

const Pokemon = ({ name, url, image }) => {
  const [loading, setLoading] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);

  // get request for specific info on pokemon clicked
  const fetchPokemonData = async () => {
    setPokemonData([]);
    try {
      const response = await axios.get(url);
      console.log(response.data);
      setLoading(true);
      setPokemonData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // handling hidden components
  const handleClickHidden = () => {
    setHidden(!hidden);
  };

  return (
    <Card onClick={() => fetchPokemonData() && handleClickHidden()}>
      <img src={image} alt={`${name}`}></img>
      <p>{name}</p>
      {!hidden ? (
        <PokemonInfo
          base_experience={pokemonData.base_experience}
          name={name}
          height={pokemonData.height}
          weight={pokemonData.weight}
          stats={pokemonData.stats}
        />
      ) : null}
    </Card>
  );
};

export default Pokemon;
