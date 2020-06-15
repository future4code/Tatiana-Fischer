import React from "react";
import axios from "axios";
import styled from "styled-components";

//import AddMusic from "./components/AddMusic";
const PlayButton = styled.span`
  color: white;
  cursor: pointer;
  background-color: rgb(150, 255, 0, 0.9);
  padding: 5px 8px;
  border-radius: 20px;
  margin: 8px;

  font-size: 12px;
`;

const Li = styled.li`
  padding: 5px;
`;

export default class PlaylistDetails extends React.Component {
  state = {
    playlists: [],
    tracks: [],
  };

  //pegar todas as playlist----------------------------------------------
  componentDidMount = () => {
    this.listedPlaylists(); //atualiza a lista
  };

  listedPlaylists = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Authorization: "tatiana-fischer-mello",
          },
        }
      )
      .then((response) => {
        this.setState({ playlists: response.data.result.list });
      });
  };

  //pegar as musicas  existentes na playlist clicada com o ID e listar-----------

  componentDidMount = () => {
    this.listedTracks(); //atualiza a lista
  };

  listedTracks = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${1}/tracks`,
        {
          headers: {
            Authorization: "tatiana-fischer-mello",
          },
        }
      )
      .then((response) => {
        this.setState({ tracks: response.data.result.tracks });
      });
  };

  render() {
    return (
      <div>
        <button>
          <a href="./MyPlaylists.js">All Playlists</a>
        </button>
        <div>
          <h2>Title Playlist(ex.: Funk)</h2>
          <h3>Artist(ex.:Mc Marcinho)</h3>
          <h4>Musics:</h4>
        </div>
        {/* ------------------LISTA DE MUSICAS COM BOTÃO PLAY------------------------------------ */}
        <ul>
          {this.state.tracks.map((track) => {
            return (
              <Li key={track.id}>
                {track.name} - {track.artist}
                <PlayButton>►</PlayButton>
              </Li>
            );
          })}
        </ul>

        <p>COMPONENTE ADD MUSICA</p>
      </div>
    );
  }
}
