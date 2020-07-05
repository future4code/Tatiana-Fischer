import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import AdmMenu from "../AdmMenu/AdmMenu";

const CandidatesPage = () => {
  const history = useHistory();

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
      <div>Lista Candidates</div>
    </div>
  );
};

export default CandidatesPage;
