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

// const MainTitle = styled.h3`
//   /* color: #1929c4; */
//   padding-bottom: 10px;
//   margin-top: 0;
//   font-size: 36px;
// `;
// const Inputs = styled.input`
//   border-radius: 8px;
//   border: none;
//   padding: 16px;
//   height: 24px;
//   width: 250px;
//   margin: 10px;
//   background-color: #ebebeb;
//   border: 1px solid #a3a3a3;
//   cursor: pointer;
//   :hover {
//     border: 1px solid #272d2d;
//   }
//   font-size: 18px;
// `;

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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <AdmMenu />
      <FormCreateTrip onSubmit={createNewTrip}>
        <h3>Create a new space trip:</h3>
        <label>Name:</label>
        <input
          name="name"
          value={form.name}
          onChange={handleInputChange}
          type="text"
        />
        <label>Planet:</label>
        <select
          name="planet"
          value={form.planet}
          onChange={handleInputChange}
          type="text"
        >
          <option></option>
          <option>planetas</option>
        </select>

        <label>Date:</label>
        <input
          name="date"
          value={form.date}
          onChange={handleInputChange}
          type="date"
        />

        <label>Description:</label>
        <input
          name="description"
          value={form.description}
          onChange={handleInputChange}
          type="text"
        />

        <label>Duration In Days:</label>
        <input
          name="durationInDays"
          value={form.durationInDays}
          onChange={handleInputChange}
          type="number"
        />
        <button>CREATE TRIP</button>
      </FormCreateTrip>
    </div>
  );
};

export default CreateTripPage;
