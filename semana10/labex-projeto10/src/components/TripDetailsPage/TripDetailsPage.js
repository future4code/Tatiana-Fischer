import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import AdmMenu from "../AdmMenu/AdmMenu";

function TripDetailsPage() {
  const history = useHistory();
  const goToListTrips = () => {
    history.replace("/trips-list");
  };

  //impedir que entrem sem ter um token
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token === null) {
      history.push("/login");
    }
  }, [history]);
  return (
    <div>
      <AdmMenu />
      <h3>Name's trip</h3>
      <p>Description</p>
      <button onClick={goToListTrips}>VER TODAS VIAGENS</button>
    </div>
  );
}

export default TripDetailsPage;
