import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import AdmMenu from "../AdmMenu/AdmMenu";
import axios from "axios";

const FormCreateTrip = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;

  margin: 100px auto;
  width: 900px;
  height: 900px;

  background-color: #141717;

  opacity: 0.8;
  border-radius: 8px;
  border: 0.5px solid #dee5e5;
  color: #dee5e5;
  font-size: 24px;

  margin-bottom: 200px;

  :hover {
    opacity: 0.9;
  }
`;

const MainTitle = styled.h3`
  padding-bottom: 10px;
  margin-top: 0;
  font-size: 36px;
`;
const Inputs = styled.input`
  border-radius: 8px;
  border: none;
  padding: 16px;
  height: 24px;
  width: 350px;
  margin: 10px;
  background-color: #ebebeb;
  border: 1px solid #a3a3a3;
  cursor: pointer;
  :hover {
    border: 3px solid #80407f;
  }
  font-size: 18px;
  color: #141717;
`;

const PlanetSelect = styled.select`
  border-radius: 8px;
  border: none;
  padding: 16px;
  height: 24px;
  width: 250px;
  margin: 10px;
  background-color: #ebebeb;
  border: 3px solid #a3a3a3;
  cursor: pointer;
  :hover {
    border: 2px solid #80407f;
  }
  font-size: 18px;
  color: #141717;
`;

const Buttons = styled.button`
  border-radius: 8px;
  background-color: #80407f;
  color: #dee5e5;
  border: none;
  padding: 20px;
  font-size: 16px;
  cursor: pointer;
`;
/////////////////////////////////////////////////////////

const CreateTripPage = () => {
  //estado inicial para todos os inputs
  const [form, setForm] = useState({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  //pegar valores do input
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  //impedir que entrem sem ter um token
  const history = useHistory();
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token === null) {
      history.push("/login");
    }
  }, [history]);

  //////////Criar nova viagem
  const baseUrl =
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/tatiana";

  const createNewTrip = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem("token");

    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      durationInDays: form.durationInDays,
    };

    const axiosConfig = {
      headers: {
        auth: token,
      },
    };

    try {
      const response = await axios.post(`${baseUrl}/trips`, body, axiosConfig);
      console.log(response);
      alert("Viagem espacial criada com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <AdmMenu />
      <FormCreateTrip onSubmit={createNewTrip}>
        <MainTitle>CRIAR NOVA VIAGEM ESPACIAL:</MainTitle>
        <label>Nome:</label>
        <Inputs
          name="name"
          value={form.name}
          onChange={handleInputChange}
          type="text"
          required
          placeholder="Digite o nome da viagem espacial"
          pattern="[A-Za-z]{5,}"
          title="No mínimo 5 carctéres de letras."
        />
        <label>Planeta:</label>
        <PlanetSelect
          name="planet"
          value={form.planet}
          onChange={handleInputChange}
          required
        >
          <option></option>
          <option value={"mars"}>Marte</option>
          <option value={"jupiter"}>Júpiter</option>
          <option value={"mercury"}>Mercúrio</option>
          <option value={"venus"}>Vênus</option>
          <option value={"saturn"}>Saturno</option>
          <option value={"uranus"}>Urano</option>
          <option value={"neptune"}>Netuno</option>
        </PlanetSelect>

        <label>Date:</label>
        <Inputs
          name="date"
          value={form.date}
          onChange={handleInputChange}
          type="date"
          required
          min={new Date().toJSON().split("T")[0]}
        />

        <label>Descrição:</label>
        <Inputs
          name="description"
          value={form.description}
          onChange={handleInputChange}
          type="text"
          required
          placeholder="Descreva como será a viagem"
          pattern="[]"
          title="No mínimo 30 letras."
        />

        <label>Duração em dias (mín. 50):</label>
        <Inputs
          name="durationInDays"
          value={form.durationInDays}
          onChange={handleInputChange}
          type="number"
          required
          min="50"
        />
        <Buttons>CRIAR VIAGEM</Buttons>
      </FormCreateTrip>
    </div>
  );
};

export default CreateTripPage;
