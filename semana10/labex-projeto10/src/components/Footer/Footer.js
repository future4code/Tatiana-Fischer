import React from "react";
import styled from "styled-components";

const FooterContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  /* background-color: #141717; */
  color: #dee5e5;
  font-size: 12px;

  /* margin-top: 400px; */
  margin-bottom: 0;
  height: 150px;
`;

const FooterIcons = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0;
  width: 40vw;
`;

const TitleFooter = styled.h6`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterIcons>
        <TitleFooter>TWITER</TitleFooter>
        <TitleFooter>YOUTUBE</TitleFooter>
        <TitleFooter>INSTAGRAM</TitleFooter>
        <TitleFooter>LINKEDIN</TitleFooter>
      </FooterIcons>

      <p>LABEX © 2020</p>
    </FooterContainer>
  );
};

export default Footer;
