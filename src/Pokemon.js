import React, { useState, useEffect } from "react";

import PokemonInfo from "./PokemonInfo";

import { Card } from "./styles/components";

const Pokemon = ({ name, url, image }) => {
  const [loading, setLoading] = useState(false);
  const [hidden, setHidden] = useState(true);

  // handling hidden components
  const handleClickHidden = () => {
    setHidden(!hidden);
  };

  return (
    <Card onClick={() => handleClickHidden()}>
      <img src={image} alt={`${name}`}></img>
      <p>{name}</p>
      {!hidden ? <PokemonInfo name={name} url={url} /> : null}
    </Card>
  );
};

export default Pokemon;
