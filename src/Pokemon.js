import React, { useEffect } from "react";

import styled from "styled-components";

const Card = styled.div`
  max-width: 200px;
  max-height: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Pokemon = ({ name, url, image }) => {
  return (
    <Card onClick={() => console.log(name)}>
      <img src={image} alt={`${name}`} width="96" height="96"></img>
      <p>{name}</p>
    </Card>
  );
};

export default Pokemon;
