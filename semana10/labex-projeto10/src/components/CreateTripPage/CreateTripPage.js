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

  margin: 100px auto;
  width: 450px;
  height: 600px;

  background-color: #dee5e5;
  color: #141717;
  opacity: 0.8;
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

/////////////////////////////////////////////////////////
const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/tatiana";

const CreateTripPage = () => {
  const [name, setName] = useState("");
  const [planet, setPlanet] = useState([]);
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [durationInDays, setDurationInDays] = useState("");

  const history = useHistory();

  ///////////pegar os valores dos inputs
  const handleUpdateName = (event) => {
    setName(event.target.value);
  };

  const handleUpdatePlanet = (event) => {
    setPlanet(event.target.value);
  };
  const handleUpdateDate = (event) => {
    setDate(event.target.value);
  };
  const handleUpdateDescription = (event) => {
    setDescription(event.target.value);
  };
  const handleUpdateDurationInDays = (event) => {
    setDurationInDays(event.target.value);
  };

  //impedir que entrem sem ter um token
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token === null) {
      history.push("/login");
    }
  }, [history]);

  //////////Criar nova viagem

  const createTrip = (event) => {
    event.preventDefault();
    const body = {
      name: name,
      planet: planet,
      date: date,
      description: description,
      durationInDays: durationInDays,
    };

    const token = localStorage.getItem("token");

    const axiosConfig = {
      headers: {
        auth: token,
      },
    };
    axios
      .post(`${baseUrl}/trips`, body, axiosConfig)
      .then(() => {
        console.log(name);
        alert("Trip criada com sucesso");
        history.push("/trips-list");
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };

  // //se fez login, é direcionado para a página de lista de viagens
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token !== null) {
      history.push("/trips-list");
    }
  }, [history]);
  return (
    <div>
      <AdmMenu />
      <FormCreateTrip onSubmit={createTrip}>
        <MainTitle>Create a new space trip:</MainTitle>
        <label>Name:</label>
        <Inputs
          type="text"
          value={name}
          placeholder="Trip's Name"
          onChange={handleUpdateName}
          required
        />

        <label>Planet:</label>
        <Inputs
          type="select"
          value={planet}
          placeholder="Planet's Name"
          onChange={handleUpdatePlanet}
          required
        >
          <option></option>
          <option>Planets</option>
        </Inputs>

        <label>Date:</label>
        <Inputs
          type="date"
          value={date}
          placeholder="Start Day"
          onChange={handleUpdateDate}
          required
        />
        <label>Description:</label>
        <Inputs
          type="text"
          value={description}
          placeholder="Description"
          onChange={handleUpdateDescription}
          required
        />
        <label>Duration In Days:</label>
        <Inputs
          type="number"
          value={durationInDays}
          placeholder="Duration In Days"
          onChange={handleUpdateDurationInDays}
          required
        />

        <button>CREATE TRIP</button>
      </FormCreateTrip>
    </div>
  );
};

export default CreateTripPage;
