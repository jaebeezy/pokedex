import React, { useState } from "react";

import PokemonInfo from "./PokemonInfo";

import { Card } from "../styles/components";

const Pokemon = ({ name, url, image, num, onOpenClose }) => {
  const [hidden, setHidden] = useState(true);
  const [orderOpened, setOrderOpened] = useState(1);

  // handling hidden components
  const handleClickHidden = () => {
    setHidden(!hidden);
    const numberOpen = onOpenClose(num);
    setOrderOpened(numberOpen);
  };

  return (
    <Card onClick={() => handleClickHidden()}>
      <img
        src={image}
        alt={`${name}`}
        tabIndex={`${num}`}
        onKeyPress={() => handleClickHidden()}
      ></img>
      <p>{name}</p>
      {!hidden ? (
        <PokemonInfo
          name={name}
          url={url}
          image={image}
          num={num}
          order={orderOpened}
        />
      ) : null}
    </Card>
  );
};

export default Pokemon;
