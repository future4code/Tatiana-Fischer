import React from "react";

import "./App.css";
import axios from "axios";

//import React, { Component } from 'react';

export default class App extends React.Component {
  state = {
    missions: [],
    missionDescription: "",
  };

  componentDidMount = () => {
    axios
      .get("https://api.spacexdata.com/v3/missions")
      .then((response) => {
        console.log(response.data);
        this.setState({ missions: response.data });
      })
      .catch((error) => {
        console.log(error);
        alert("Mistake in choosing the mission!");
      });
  };

  /*chooseMission = (event) => {
    const mission_name = event.target.value;
    axios
      .get(`https://api.spacexdata.com/v3/missions/${mission_name}`)
      .then((response) => {
        console.log(response.data.description);
      })
      .catch((error) => {
        console.log(error);
      });
  };*/
  render() {
    /* const description = this.state.missionDescription ? (
      <p>{this.state.missionDescription}</p>
    ) : (
      <div />
    );*/
    const mission = this.state.missions.map((mission) => {
      return (
        <option value={mission.mission_name}>{mission.mission_name}</option>
      );
    });
    return (
      <div>
        <h3>SpaceX missions</h3>
        <select>
          <option value="">choose the mission</option>

          {mission}
        </select>

        <hr />
        <h4>Description:</h4>
        <ul>
          {this.state.missions.map((description) => {
            return (
              <li>
                {description.description === mission.description ? (
                  description.description
                ) : (
                  <div />
                )}
              </li>
            );
          })}
        </ul>
        <hr />
      </div>
    );
  }
}
