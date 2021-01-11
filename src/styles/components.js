import styled, { css, keyframes } from "styled-components";

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
    border: 0.5px solid black;
    cursor: pointer;
  }

  p {
    font-size: 8px;
  }

  img {
    width: 96px;
    height: 96px;
  }

  animation: 1.4s ${fadeIn} ease-in;
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
