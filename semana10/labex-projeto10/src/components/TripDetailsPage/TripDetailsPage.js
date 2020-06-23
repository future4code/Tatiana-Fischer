import React from "react";
import { useHistory } from "react-router-dom";

function TripDetailsPage() {
  const history = useHistory();
  const goToListTrips = () => {
    history.replace("/trips-list");
  };
  return (
    <div>
      <h3>Name's trip</h3>
      <p>Description</p>
      <button onClick={goToListTrips}>VER TODAS VIAGENS</button>
    </div>
  );
}

export default TripDetailsPage;
