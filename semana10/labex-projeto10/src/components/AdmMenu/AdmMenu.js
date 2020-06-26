import React from "react";
import styled from "styled-components";
import { useHistory, Link } from "react-router-dom";

const AdmMenuContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  width: 500px;

  /* background-color: #1e2323; */
  color: #dee5e5;
  margin: auto;
  font-size: 24px;

  cursor: pointer;
`;

//////////////////////////////////////////////////////////////////////////////////
const AdmMenu = () => {
  ///////////opção de ir para ListTrips, Criar Trp, Logout, aprovar quem se registrou
  const history = useHistory();
  const goToTripsList = () => {
    history.push("/trips-list");
  };
  const goToTripsCreate = () => {
    history.push("/trips-create");
  };

  const goToCandidates = () => {
    history.push("/candidates");
  };
  const logout = () => {
    window.localStorage.clear();
    history.push("/");
  };

  return (
    <AdmMenuContainer>
      <h6 onClick={goToTripsList}>ALL TRIPS</h6>
      <h6 onClick={goToTripsCreate}>NEW TRIP</h6>
      <h6 onClick={goToCandidates}>CANDIDATES</h6>
      <h6 onClick={logout}>LOGOUT</h6>
    </AdmMenuContainer>
  );
};

export default AdmMenu;
