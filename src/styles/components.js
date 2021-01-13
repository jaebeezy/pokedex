import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }`;

export const Card = styled.div`
  max-width: 200px;
  max-height: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;

  border: 0.5px solid transparent;

  &:hover {
    cursor: pointer;
  }

  p {
    font-size: 8px;
  }

  img {
    width: 96px;
    height: 96px;

    &:hover {
      transform: scale(1.15);
    }
  }

  animation: 0.5s ${fadeIn} ease-in;
`;

export const Title = styled.h1`
  color: #333;
  font-size: 32px;
  animation: 0.7s ${fadeIn} ease-in;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 10vh;

  animation: 0.7s ${fadeIn} ease-in;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  p {
    font-size: 6px;
  }
`;

const typeColor = {
  fire: "#fd7d25",
  water: "#4492C4",
  grass: "#9BCC50",
  poison: "#B97FC9",
  bug: "#729F3F",
  normal: "#A4ACAF",
  ground: "#AB9842",
  flying: "#96d6e8",
  fairy: "#FDB9E9",
  fighting: "#D56723",
  rock: "#dbaa76",
  psychic: "#F366B9",
  electric: "#EED536",
  steel: "#9FB7B8",
  ice: "#51C4E7",
  ghost: "#7B62A3",
  dragon: "#F16E57",
};

export const Type = styled.a`
  border: 1px solid #ececec;
  border-radius: 10px;
  background-color: ${({ color }) => typeColor[color] || `${color}`};
  padding: 5px 10px 5px 10px;
  text-transform: capitalize;
  margin: 0.1rem;
  font-size: 10px;
`;
