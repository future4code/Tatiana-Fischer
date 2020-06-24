import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Router from "../src/Router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import styled from "styled-components";
const ContainerApp = styled.div`
  background-image: url("https://cdn.pixabay.com/photo/2015/03/26/18/36/satellite-693226_1280.jpg");
  /* https://images.unsplash.com/photo-1544942579-9671c890fe89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=886&q=80 */
  /* background-image: url("https://images.unsplash.com/photo-1541186877-bb5a745edde5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80"); */
  background-repeat: space;
  background-attachment: fixed;
  background-position: center;
  height: 120vh;
  background-size: cover;
  opacity: 0.8;
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
