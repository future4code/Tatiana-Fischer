import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import AdmMenu from "../AdmMenu/AdmMenu";
import axios from "axios";

function TripDetailsPage() {
  const [tripDetail, setTripDetail] = useState({});
  const history = useHistory();

  const tripId = useParams();
  console.log(tripId);
  //impedir que entrem sem ter um token
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token === null) {
      history.push("/login");
    }
  }, [history]);

  //ver detalhe das viagens:

  useEffect(() => {
    const getDetails = async (tripId) => {
      const token = localStorage.getItem("token");
      console.log(tripId);
      const axiosConfig = {
        headers: {
          auth: token,
        },
      };

      try {
        const response = await axios.get(
          `${baseUrl}/trip/${tripId.id}`,
          axiosConfig
        );
        console.log(response.data.trip);
        setTripDetail(response.data.trip);
      } catch (error) {
        console.log(error);
        alert("erro ao abrir os detalhes da viagem");
      }
    };
    getDetails(tripId);
  }, [tripId]);

  const baseUrl =
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/tatiana";

  return (
    <div>
      <AdmMenu />
      <p>{tripDetail.name}</p>
    </div>
  );
}

export default TripDetailsPage;
