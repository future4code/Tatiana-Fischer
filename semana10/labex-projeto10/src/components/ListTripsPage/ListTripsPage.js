import React from "react";
import { useHistory } from "react-router-dom";

const ListTripsPage = () => {
  const history = useHistory();

  const goToHome = () => {
    history.push("/");
  };

  const goToDetails = () => {
    history.push("/trips-details");
  };

  const goToCreateTrip = () => {
    history.push("/trips-create");
  };
  return (
    <div>
      <ul>
        <li>
          Viagem 1<button onClick={goToDetails}>+Info</button>
        </li>
        <li>Viagem 2</li>
      </ul>
      <button onClick={goToCreateTrip}>NOVA VIAGEM</button>
      <button onClick={goToHome}>LOGOUT</button>
    </div>
  );
};

export default ListTripsPage;
