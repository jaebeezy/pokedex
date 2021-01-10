import React, { useState, useEffect } from "react";

import styled from "styled-components";

const Info = styled.div`
  background-color: pink;

  position: absolute;

  z-index: 2;
  height: 200px;
  width: 200px;
`;

const PokemonInfo = ({ base_experience, name, height, weight, stats }) => {
  return (
    <Info>
      <p>Name: {name}</p>
      <p>Height: {height}</p>
      <p>Weight: {weight}</p>
      <p>Base experience:{base_experience}</p>
      <p>{stats.map((stat) => stat.base_stat)}</p>
    </Info>
  );
};

export default PokemonInfo;
