import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  /* background-color: #1e2323; */
  color: #dee5e5;
  margin: auto;
`;

const Logo = styled.h1`
  margin-left: 36px;
`;

const Menu = styled.h3`
  margin-right: 36px;
`;
const Header = () => {
  return (
    <HeaderContainer>
      <section>
        <Logo>LabeX</Logo>
      </section>

      <Menu>Home</Menu>
    </HeaderContainer>
  );
};

export default Header;
