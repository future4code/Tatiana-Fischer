import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 100px auto;
  width: 35vw;
  height: 70vh;

  background-color: #dee5e5;
  opacity: 0.95;
  border-radius: 8px;

  font-size: 18px;
`;

const ContainerEmailAndPassword = styled.section`
  display: flex;
  flex-direction: column;
`;

const Inputs = styled.input`
  border-radius: 8px;
  border: none;
  padding: 16px;
  height: 24px;
  width: 250px;
  margin: 10px;
`;
function LoginPage() {
  const history = useHistory();

  const goToHome = () => {
    history.push("/");
  };

  const goToListTrips = () => {
    history.replace("/trips-list");
  };
  return (
    <ContainerLogin>
      <ContainerEmailAndPassword>
        <label>E-mail:</label>
        <Inputs type="email" placeholder="Escreva seu login" />
      </ContainerEmailAndPassword>
      <ContainerEmailAndPassword>
        <label>Senha:</label>
        <Inputs type="password" placeholder="Escreva sua senha" />
      </ContainerEmailAndPassword>
      <section>
        <button onClick={goToListTrips}>Login</button>
        <button onClick={goToHome}>VOLTAR HOME</button>
      </section>
    </ContainerLogin>
  );
}

export default LoginPage;
