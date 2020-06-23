import React from "react";
import { useHistory } from "react-router-dom";

const CreateTripPage = () => {
  const history = useHistory();

  const goToListTrips = () => {
    history.push("/trips-list");
  };

  return (
    <div>
      <form>
        <input></input>
        <input></input>
        <input></input>
        <button onClick={goToListTrips}>CRIAR</button>
      </form>
    </div>
  );
};

export default CreateTripPage;
