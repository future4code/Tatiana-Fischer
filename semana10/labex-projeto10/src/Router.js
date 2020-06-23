import React from "react";

// import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage.js";
import LoginPage from "./components/LoginPage/LoginPage.js";
import ListTripsPage from "./components/ListTripsPage/ListTripsPage.js";
import TripDetailsPage from "./components/TripDetailsPage/TripDetailsPage.js";
import CreateTripPage from "./components/CreateTripPage/CreateTripPage.js";
import Register from "./components/Register/Register.js";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/trips-list">
          <ListTripsPage />
        </Route>
        <Route exact path="/trips-details">
          <TripDetailsPage />
        </Route>

        <Route exact path="/trips-create">
          <CreateTripPage />
        </Route>

        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
