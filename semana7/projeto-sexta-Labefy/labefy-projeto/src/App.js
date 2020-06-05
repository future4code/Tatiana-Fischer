import React from "react";
// import styled from "styled-components";

import "./App.css";

import axios from "axios";

export default class App extends React.Component {
  state = {
    playlists: [],
    newPlaylists: "",
  };
  inputPlaylistName = (event) => {
    this.setState({ newPlaylists: event.target.value });
    //console.log(this.state.newPlaylists);
  };

  componentDidMount = () => {
    this.listPlaylists();
  };

  listPlaylists = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Athotization: "tatiana-fischer-mello",
          },
        }
      )
      .then((response) => {
        this.setState({ playlists: response.data.result.list });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  createPlaylist = () => {
    const body = {
      name: this.state.newPlaylists,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        {
          headers: {
            Athotization: "tatiana-fischer-mello",
          },
        }
      )
      .then((response) => {
        alert("Nova playlist criada com sucesso!");
        console.log(response.data);
        //this.setState({ newPlaylists: "" });
        //this.listPlaylists()
      })
      .catch((error) => {
        console.log(error);
        alert("Ocorreu um erro");
      });
  };

  render() {
    return (
      <div>
        <h3>New Playlist</h3>
        <label>Name:</label>
        <input
          type="text"
          value={this.state.newPlaylists.name}
          onChange={this.inputPlaylistName}
        ></input>
        <button onClick={this.createPlaylist}>Save</button>
      </div>
    );
  }
}
