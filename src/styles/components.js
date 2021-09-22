import styled, { keyframes } from "styled-components";
import { rubberBand, flipInX } from "react-animations";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }`;

const rbAnimation = keyframes`${rubberBand}`;

export const Card = styled.div`
  max-width: 200px;
  max-height: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;

  animation: 0.8s ${rbAnimation};

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
`;

export const Title = styled.h1`
  color: #333;
  font-size: 32px;
  animation: 0.8s ${rbAnimation};

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

  animation: 0.3s ${fadeIn} ease-in;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  a {
    font-size: 6px;
    text-decoration: none;
    color: black;
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

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: "Press Start 2P", cursive;
  height: 100%;
  width: 100%;
`;

export const Pokedex = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const bounceAnimation = keyframes`${flipInX}`;

export const Info = styled.div`
  background-color: white;

  z-index: ${(props) => props.order};

  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 470px;
  height: 135px;

  animation: 0.4s ${bounceAnimation};

  box-shadow: 2px 2px 20px rgb(211, 211, 211);
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

  @media (max-width: 768px) {
    flex-direction: column;
    width: 170px;
    height: 300px;
    p {
      font-size: 7px;
      margin: 0.1rem;
    }
  }
`;

const skScaleOut = keyframes`
0% { 
  -webkit-transform: scale(0);
  transform: scale(0);
} 100% {
  -webkit-transform: scale(1.0);
  transform: scale(1.0);
  opacity: 0;
}`;

export const SpinnerContainer = styled.div`
  width: 40px;
  height: 40px;
  margin: 100px auto;
  background-color: #333;

  border-radius: 100%;
  -webkit-animation: ${skScaleOut} 1s infinite ease-in-out;
  animation: ${skScaleOut} 1s infinite ease-in-out;
`;
