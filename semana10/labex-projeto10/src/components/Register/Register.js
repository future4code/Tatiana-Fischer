import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Countrys from "../../Countrys";

import axios from "axios";

const Register = () => {
  //estado inicial para todos os inputs
  const [form, setForm] = useState({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });

  const [trips, setTrips] = useState([]);

  //pegar valores do input
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  /////////Viagens no dropdown:

  useEffect(() => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/tatiana/trips"
      )
      .then((response) => {
        setTrips(response.data.trips);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //////////Cadastro novo candidato de acordo com o ID selecionado

  const getTrips = trips.map((trip) => {
    return (
      <option value={trip.id} key={trip.id}>
        {trip.name} - {trip.planet}
      </option>
    );
  });
  return (
    <form>
      <label>Nome</label>
      <input
        name="name"
        value={form.name}
        onChange={handleInputChange}
        type="text"
        required
        placeholder="Digite seu nome"
        pattern="[A-Za-z]{3,}"
        title="No mínimo 3 carctéres de letras."
      />

      <label>Idade</label>
      <input
        name="age"
        value={form.age}
        onChange={handleInputChange}
        type="number"
        required
        min="18"
      />

      <label>Profissão</label>
      <input
        name="name"
        value={form.profession}
        onChange={handleInputChange}
        type="text"
        required
        placeholder="Digite sua profissão"
        pattern="[A-Za-z]{10,}"
        title="No mínimo 10 carctéres de letras."
      />

      <label>País</label>

      <Countrys value={form.country} onChange={handleInputChange} />

      <label>Por que você merece viajar?</label>
      <input
        name="applicationText"
        value={form.applicationText}
        onChange={handleInputChange}
        type="text"
        required
        pattern="[A-Za-z]{30,}"
        title="No mínimo 30 carctéres."
      />

      <label>Escolha a viagem de destino:</label>
      <select
        name="tripId"
        value={form.tripId}
        onChange={handleInputChange}
        required
      >
        <option value="">Escolha uma Viagem</option>
        {getTrips}
      </select>

      <button> ME INSCREVER</button>
    </form>
  );
};

export default Register;
