import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const AdmMenuContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  width: 1000px;

  /* background-color: #1e2323; */
  color: #dee5e5;
  margin: auto;
  font-size: 36px;
`;
const TitleAdmMenu = styled.h6`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
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
      <TitleAdmMenu onClick={goToTripsList}>TODAS VIAGENS</TitleAdmMenu>
      <TitleAdmMenu onClick={goToTripsCreate}>CRIAR VIAGEM</TitleAdmMenu>
      <TitleAdmMenu onClick={goToCandidates}>CANDIDATOS</TitleAdmMenu>
      <TitleAdmMenu onClick={logout}>LOGOUT</TitleAdmMenu>
    </AdmMenuContainer>
  );
};

export default AdmMenu;
