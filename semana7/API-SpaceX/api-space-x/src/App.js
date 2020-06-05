import React from "react";

import "./App.css";
import axios from "axios";

//import React, { Component } from 'react';

export default class App extends React.Component {
  state = {
    missions: [],
    missionId: [],
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

  chooseMission = (event) => {
    this.state.missionId.map((missionId) => {
      this.state.missionId.push(missionId.mission_id);
    });
    const mission_id = event.target.value;
    axios
      .get(`https://api.spacexdata.com/v3/missions/${mission_id}`)
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const mission = this.state.missions.map((mission) => {
      return (
        <option value={mission.mission_name}>{mission.mission_name}</option>
      );
    });

    return (
      <div>
        <h3>SpaceX missions</h3>
        <select onChange={this.chooseMission}>
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
