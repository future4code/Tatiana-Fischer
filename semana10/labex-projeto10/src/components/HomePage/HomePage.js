import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

const ContainerHome = styled.div`
  color: #dee5e5;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* background-color: #1929c4;//azul */
  width: 90vw;
  height: 85vh;
  margin: auto;
`;

const CardUserAndLogin = styled.div`
  background-color: #dee5e5; //branco
  opacity: 0.8;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  border-radius: 8px;
  color: #141717; //preta
  height: 300px;
  width: 400px;
  :hover {
    background-color: white;
  }
`;

const Buttons = styled.button`
  border-radius: 8px;
  background-color: #1929c4;
  color: #dee5e5;
  border: none;
  padding: 20px;
  font-size: 16px;
  cursor: pointer;
`;
//////////////////////////////////////////////////////////////////////////////////
function HomePage() {
  const history = useHistory();

  const goToRegister = () => {
    history.push("/register");
  };

  const goToLogin = () => {
    history.push("/login");
  };

  return (
    <ContainerHome>
      <CardUserAndLogin>
        <h3>Sou Viajante</h3>
        <Buttons onClick={goToRegister}> QUERO VIAJAR</Buttons>
      </CardUserAndLogin>
      <CardUserAndLogin>
        <h3>Sou Administrador</h3>
        <Buttons onClick={goToLogin}>FAZER LOGIN</Buttons>
      </CardUserAndLogin>
    </ContainerHome>
  );
}

export default HomePage;
