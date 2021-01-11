import React, { useState, useEffect } from "react";

import axios from "axios";

import styled from "styled-components";

const Info = styled.div`
  background-color: white;
  border: 2px solid blue;

  position: absolute;

  z-index: 2;

  display: flex;
  flex-direction: row;
  align-items: center;

  a {
    border: 1px solid #ececec;
    border-radius: 10px;
    background-color: white;
    padding: 5px 10px 5px 10px;
    text-transform: capitalize;
  }

  img {
    width: 96px;
    height: 96px;
  }

  p {
    text-transform: capitalize;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const PokemonInfo = ({ url, name, image }) => {
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
  }, [url]);

  return (
    <Info>
      <div>
        <p>{name}</p>
        <img src={image} alt={name}></img>
      </div>
      <div>
        {pokemonData.types &&
          pokemonData.types.map((idx) => {
            return <a key={idx.type.name}>{idx.type.name}</a>;
          })}
      </div>
      <div>
        <p>Height: {pokemonData.height / 10}m</p>
        <p>Weight: {pokemonData.weight / 10}kg</p>
        <p>Base experience: {pokemonData.base_experience}</p>
      </div>
      <div>
        {pokemonData.stats &&
          pokemonData.stats.map((idx) => {
            return (
              <p key={idx.stat.name}>
                {idx.stat.name}: {idx.base_stat}
              </p>
            );
          })}
      </div>

      {console.log(pokemonData)}
    </Info>
  );
};

export default PokemonInfo;
