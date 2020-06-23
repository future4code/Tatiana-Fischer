import React from "react";
import { useHistory } from "react-router-dom";

function LoginPage() {
  const history = useHistory();

  const goToLogin = () => {
    history.push("login");
  };
  return (
    <div>
      <h1>LoginPage{goToLogin}</h1>
    </div>
  );
}

export default LoginPage;
