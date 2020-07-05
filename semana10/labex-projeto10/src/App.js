import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Router from "../src/Router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import styled from "styled-components";
const ContainerApp = styled.div`
  background-image: url("https://cdn.pixabay.com/photo/2016/11/21/12/39/cosmos-1845140_1280.jpg");

  background-repeat: space;
  background-attachment: fixed;
  background-position: center;
  height: auto;
  background-size: cover;
  /* opacity: 0.8; */
  color: white;
  min-height: 800px;
`;

function App() {
  return (
    <ContainerApp>
      <Header />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <Footer />
    </ContainerApp>
  );
}

export default App;
