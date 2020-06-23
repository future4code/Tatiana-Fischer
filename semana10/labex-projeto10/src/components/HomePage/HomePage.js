import React from "react";
import { useHistory } from "react-router";

function HomePage() {
  const history = useHistory();

  const goToRegister = () => {
    history.push("/register");
  };

  const goToLogin = () => {
    history.push("/login");
  };

  return (
    <div>
      <div>
        <button onClick={goToRegister}> QUERO VIAJAR</button>
      </div>
      <div>
        <button onClick={goToLogin}>FAZER LOGIN</button>
      </div>
    </div>
  );
}

export default HomePage;
