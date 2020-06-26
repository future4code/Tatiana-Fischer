import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import AdmMenu from "../AdmMenu/AdmMenu";

const ListTripsPage = () => {
  const [trips, setTrips] = useState([]);
  const history = useHistory();

  const goToDetails = () => {
    history.push("/trips-details");
  };

  //impedir que entrem sem ter um token
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token === null) {
      history.push("/login");
    }
  }, [history]);

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

  const getTrips = trips.map((trip) => {
    return (
      <div>
        {trip.name}
        <button onClick={goToDetails}>+Info</button>
      </div>
    );
  });
  return (
    <div>
      <AdmMenu />
      <div>Lista:{getTrips}</div>
    </div>
  );
};

export default ListTripsPage;
