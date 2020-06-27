import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 100px auto;
  width: 450px;
  height: 600px;

  background-color: #dee5e5;
  color: #141717;
  opacity: 0.85;
  border-radius: 8px;

  font-size: 18px;

  :hover {
    background-color: white;
  }
`;
const MainTitle = styled.h3`
  /* color: #1929c4; */
  padding-bottom: 10px;
  margin-top: 0;
  font-size: 36px;
`;
const Inputs = styled.input`
  border-radius: 8px;
  border: none;
  padding: 16px;
  height: 24px;
  width: 250px;
  margin: 10px;
  background-color: #ebebeb;
  border: 1px solid #a3a3a3;
  cursor: pointer;
  :hover {
    border: 1px solid #272d2d;
  }
  font-size: 18px;
`;

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/tatiana";

const LoginPage = () => {
  ///////////pegar os valores dos inputs

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const history = useHistory();
  ///////////opção de voltar para a home
  const goToHome = () => {
    history.push("/");
  };

  //////////fazer login e mudar de página

  const login = async (event) => {
    event.preventDefault();
    const loginBody = {
      email: form.email,
      password: form.password,
    };
    try {
      const response = await axios.post(`${baseUrl}/login`, loginBody);

      window.localStorage.setItem("token", response.data.token);
      alert("Logado com sucesso!");
      history.push("/trips-list");
    } catch (error) {
      console.log(error);
      alert("Não foi possível realizar o Login!");
    }
  };

  // //se fez login, é direcionado para a página de lista de viagens
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token !== null) {
      history.push("/trips-list");
    }
  }, [history]);

  return (
    <FormLogin onSubmit={login}>
      <MainTitle>Faça Login</MainTitle>
      <label>E-mail:</label>
      <Inputs
        type="email"
        name="email"
        value={form.email}
        placeholder="Escreva seu login"
        onChange={handleInputChange}
        required
      />

      <label>Senha:</label>
      <Inputs
        type="password"
        name="password"
        value={form.password}
        placeholder="Escreva sua senha"
        onChange={handleInputChange}
        required
      />

      <section>
        <button>Login</button>
        <button onClick={goToHome}>VOLTAR HOME</button>
      </section>
    </FormLogin>
  );
};

export default LoginPage;
