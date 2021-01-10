import React from "react";

import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 10vh;

  p {
    font-size: 6px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>Created by Jae Young</p>
      <p>(c) 2021</p>
    </FooterContainer>
  );
};

export default Footer;
