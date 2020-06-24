import React from "react";
import styled from "styled-components";

const FooterContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background-color: #141717;
  color: #dee5e5;
  font-size: 10px;

  /* margin-top: 400px; */
  margin-bottom: 0;
  height: 200px;
`;

const FooterIcons = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0;
  width: 40vw;

  cursor: pointer;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterIcons>
        <p>TWITER</p>
        <p>YOUTUBE</p>
        <p>INSTAGRAM</p>
        <p>LINKEDIN</p>
      </FooterIcons>

      <p>LABEX © 2020</p>
    </FooterContainer>
  );
};

export default Footer;
