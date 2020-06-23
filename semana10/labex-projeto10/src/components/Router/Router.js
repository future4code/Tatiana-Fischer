import React from "react";

// import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import HomePage from "../HomePage/HomePage";
import LoginPage from "../LoginPage/LoginPage";
import ListTripsPage from "../ListTripsPage/ListTripsPage";
import TripDetailsPage from "../TripDetailsPage/TripDetailsPage";
import CreateTripPage from "../CreateTripPage/CreateTripPage";
import Register from "../Register/Register";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/login ">
          <LoginPage />
        </Route>
        <Route exact path="/trips/list ">
          <ListTripsPage />
        </Route>
        <Route exact path="/trips/details ">
          <TripDetailsPage />
        </Route>

        <Route exact path="/trips/create ">
          <CreateTripPage />
        </Route>

        <Route exact path="/register ">
          <Register />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
