import React from "react";
import { useHistory } from "react-router-dom";

function HomePage() {
  const history = useHistory();

  const goToRegister = () => {
    history.push("/register");
  };

  return (
    <div>
      <div>
        <button onClick={goToRegister}> QUERO VIAJAR</button>
      </div>
      <div>
        <button>FAZER LOGIN</button>
      </div>
    </div>
  );
}

export default HomePage;
