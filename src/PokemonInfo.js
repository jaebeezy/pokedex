import React, { useState, useEffect } from "react";

import axios from "axios";

import Spinner from "./Spinner";

import styled from "styled-components";
import { Type } from "./styles/components";

const Info = styled.div`
  background-color: white;
  border: 2px solid blue;

  z-index: 2;

  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    text-transform: capitalize;
    margin: 0.2rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.25rem;
  }
`;

const PokemonInfo = ({ url, name, image, num }) => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(url);

        setPokemonData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPokemonData();
    setLoading(false);
    return () => {
      setPokemonData([]);
    };
  }, [url]);

  return (
    <Info>
      <div>
        <img src={image} alt={name}></img>
        <p>#{num}</p>
        <p>{name}</p>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {pokemonData.types &&
            pokemonData.types.map((idx) => {
              return (
                <Type color={idx.type.name} key={idx.type.name}>
                  {idx.type.name}
                </Type>
              );
            })}

          <p>Height: {pokemonData.height / 10}m</p>
          <p>Weight: {pokemonData.weight / 10}kg</p>
          <p>Base experience: {pokemonData.base_experience}</p>
        </div>
      )}
      {loading ? (
        <Spinner />
      ) : (
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
      )}
    </Info>
  );
};

export default PokemonInfo;
