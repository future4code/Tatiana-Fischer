import React from "react";
import { useHistory } from "react-router-dom";

function LoginPage() {
  const history = useHistory();

  const goToHome = () => {
    history.push("/");
  };

  const goToListTrips = () => {
    history.replace("/trips-list");
  };
  return (
    <div>
      <input value="name"></input>
      <input value="senha"></input>
      <button onClick={goToListTrips}>Login</button>
      <button onClick={goToHome}>VOLTAR HOME</button>
    </div>
  );
}

export default LoginPage;
