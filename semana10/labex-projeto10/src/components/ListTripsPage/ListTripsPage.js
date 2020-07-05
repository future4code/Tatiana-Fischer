import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import AdmMenu from "../AdmMenu/AdmMenu";
import styled from "styled-components";

const ListTripsContainer = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 100px auto;
  width: 900px;
  height: auto;
  min-height: 600px;

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

const TripsListLine = styled.li`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
const ListTripsPage = () => {
  const [trips, setTrips] = useState([]);

  const history = useHistory();

  //impedir que entrem sem ter um token
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token === null) {
      history.push("/login");
    }
  }, [history]);
  //pegar viagens
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

  //
  const goToDetails = (tripId) => {
    history.push(`/trips-details/${tripId}`);
  };

  const getTrips = trips.map((trip) => {
    return (
      <TripsListLine onClick={() => goToDetails(trip.id)}>
        {trip.name}
      </TripsListLine>
    );
  });
  return (
    <div>
      <AdmMenu />
      <ListTripsContainer>
        <h3>TODAS AS VIAGENS ESPACIAS:</h3>
        <h6>(Clique na viagem para saber detalhes)</h6>
        <div>{getTrips}</div>
      </ListTripsContainer>
    </div>
  );
};

export default ListTripsPage;
