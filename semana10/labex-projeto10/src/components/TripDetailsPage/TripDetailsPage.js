import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import AdmMenu from "../AdmMenu/AdmMenu";
import axios from "axios";
import styled from "styled-components";

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  align-items: flex-start;
  width: 400px;
  padding: 80px;
  border-radius: 8px;
  opacity: 0.8;
`;

const DetailsPageContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`;

function TripDetailsPage() {
  const [tripDetail, setTripDetail] = useState({});
  const history = useHistory();

  const tripId = useParams();
  console.log(tripId);
  //impedir que entrem sem ter um token
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token === null) {
      history.push("/login");
    }
  }, [history]);

  //ver detalhe das viagens:

  useEffect(() => {
    const getDetails = async (tripId) => {
      const token = localStorage.getItem("token");
      console.log(tripId);
      const axiosConfig = {
        headers: {
          auth: token,
        },
      };

      try {
        const response = await axios.get(
          `${baseUrl}/trip/${tripId.id}`,
          axiosConfig
        );
        console.log(response.data.trip);
        setTripDetail(response.data.trip);
      } catch (error) {
        console.log(error);
        alert("erro ao abrir os detalhes da viagem");
      }
    };
    getDetails(tripId);
  }, [tripId]);

  const baseUrl =
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/tatiana";

  const goToCandidates = () => {
    history.push(`/candidates`);
  };

  return (
    <DetailsPageContainer>
      <AdmMenu />
      <DetailsContainer>
        <h5>
          Nome: {""}
          {tripDetail.name}
        </h5>
        <h5>
          Planeta: {""}
          {tripDetail.planet}
        </h5>
        <h5>
          Data: {""}
          {tripDetail.date}
        </h5>

        <h5>
          Descrição: {""}
          {tripDetail.description}
        </h5>
        <h5>
          Duração em dias: {""}
          {tripDetail.durationInDays}
        </h5>

        <button onClick={goToCandidates}>VER CANDIDATOS</button>
      </DetailsContainer>
    </DetailsPageContainer>
  );
}

export default TripDetailsPage;
