import React from "react";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();

  const goToHome = () => {
    history.push("/");
  };
  return (
    <div>
      <form>
        <input></input>
        <button> ME INSCREVER</button>

        <button onClick={goToHome}>VOLTAR HOME</button>
      </form>
    </div>
  );
};

export default Register;
