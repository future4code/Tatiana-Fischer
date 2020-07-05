import { useHistory } from "react-router-dom";
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

const MenuIcon = styled.h6`
  margin-right: 36px;
  cursor: pointer;
`;

//////////////////////////////////////////////////////////////////////////////////
const Header = () => {
  ///////////opção de voltar para a home
  const history = useHistory();
  const goToHome = () => {
    history.push("/");
  };
  //NÃO ESTÁ FUNCIONANDO

  return (
    <HeaderContainer>
      <section>
        <Logo>LabeX</Logo>
      </section>

      <MenuIcon onClick={goToHome}>Home</MenuIcon>
    </HeaderContainer>
  );
};

export default Header;
