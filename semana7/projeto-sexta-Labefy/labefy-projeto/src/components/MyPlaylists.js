import React from "react";
// import PlaylistDetails from "./PlaylistDetails";
import axios from "axios";
import styled from "styled-components";

const DeleteButton = styled.span`
  color: red;
  cursor: pointer;
`;

export default class MyPlaylists extends React.Component {
  state = {
    currentPage: "myPlaylists",
    playlists: [],
    typedPlaylist: "",
    tracks: [],
    typedTrackName: "",
    typedTrackArtist: "",
    typedTrackUrl: "",
  };

  //pegar o que for digitado no input (testar com console.log)-----------------------------------------
  onChangeInputValue = (event) => {
    this.setState({ typedPlaylist: event.target.value });
    console.log(this.typedPlaylist);
  };

  //usar axios para possibilitar criar e salvar uma playlist (testar no postman)-------------------------------
  createPlaylist = () => {
    const body = {
      name: this.state.typedPlaylist,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        {
          headers: {
            Authorization: "tatiana-fischer-mello",
          },
        }
      )
      .then((response) => {
        console.log(response);
        if (this.state.typedPlaylist != this.state.playlists) {
          alert(`Playlist ${this.state.typedPlaylist} criada com sucesso!`);
          this.setState({ typedPlaylist: "" });
          this.listedPlaylists(); //aparecer na lista na hora que clicar save}
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Playlist já existente!");
      });
  };

  //pegar as playlist existentes e listar--------------------------------------------

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

  //OPÇÃO DE DELETAR PLAYLIST--------------------------------------------------------
  deletePlaylist = (playlistId) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`,
        {
          headers: {
            Authorization: "tatiana-fischer-mello",
          },
        }
      )
      .then((response) => {
        alert("Playlist apagada com sucesso!");
        this.listedPlaylists(); //para atualizar na hora a lista sem o item deletado
      })
      .catch((error) => {
        alert("ERRO AO APAGAR playlist");
      });
  };

  //AO CLICAR NA PLAYLIST, APARECER DETALHES DA PLAYLIST (MUSICAS E ARTISTA)-------------------------
  changePage = () => {
    if (this.state.currentPage === "myPlaylists") {
      this.setState({ currentPage: "playlistDetails" });
    } else {
      this.setState({ currentPage: "myPlaylists" });
    }
  };

  //pegar todas as músicas com axios ---------------------------------------------------

  onClickTracks = (playlistId) => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`,
        {
          headers: {
            Authorization: "tatiana-fischer-mello",
          },
        }
      )
      .then((response) => {
        this.setState({ tracks: response.data.result.tracks });
        console.log(response.data.result.tracks);
      });
  };

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //pegar todas as músicas com axios ---------------------------------------------------
  //pegar o que for digitado no input (testar com console.log)-----------------------------------------
  onChangeInputTrackName = (event) => {
    this.setState({ typedTrackName: event.target.value });
  };
  onChangeInputTrackArtist = (event) => {
    this.setState({ typedTrackArtist: event.target.value });
  };
  onChangeInputTrackUrl = (event) => {
    this.setState({ typedTrackUrl: event.target.value });
  };
  //usar axios para possibilitar criar e salvar uma playlist (testar no postman)-------------------------------
  createTrack = (playlistId) => {
    const body = {
      name: this.state.typedTrackName,
      artist: this.state.typedTrackArtist,
      url: this.state.typedTrackUrl,
    };
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`,
        body,
        {
          headers: {
            Authorization: "tatiana-fischer-mello",
          },
        }
      )
      .then((response) => {
        console.log(response);

        alert(`Música ${this.state.typedTrackName} criada com sucesso!`);
        this.setState({ typedTrackName: "" });
        this.setState({ typedTrackArtist: "" });
        this.setState({ typedTrackUrl: "" });
        // this.listedT(); //aparecer na lista na hora que clicar save}
      })
      .catch((error) => {
        console.log(error);
        alert("Erro!");
      });
  };

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////

  render() {
    return (
      <div>
        {/* ------------------CRIAR PLAYLIST------------------------------------ */}
        <section>
          <h2>Create Playlist:</h2>
          <label>Name:</label>
          <input
            value={this.state.typedPlaylist}
            onChange={this.onChangeInputValue}
          />
          <button onClick={this.createPlaylist}>Create</button>
        </section>
        {/* ------------------LISTA DE PLAYLISTS COM BOTÃO DE DELETAR------------------------------------ */}
        <section>
          <hr />
          <h3>My Playlists:</h3>

          {this.state.playlists.map((playlist) => {
            return (
              <ol>
                <li
                  onClick={() => this.onClickTracks(playlist.id)}
                  key={playlist.id}
                >
                  <strong>{playlist.name}</strong> - {""}
                  <DeleteButton onClick={() => this.deletePlaylist()}>
                    ×
                  </DeleteButton>
                </li>
              </ol>
            );
          })}
        </section>
        {/* ------------------LISTA DE MUSICAS COM O ATALHO DO SPOTIFY------------------------------------ */}
        <hr />
        <section>
          <h5>Musicas da playlist selecionada:</h5>

          {this.state.tracks.map((track) => {
            return (
              <div>
                <ol>
                  {" "}
                  <li key={track.id}>{track.name}</li>{" "}
                </ol>
                <iframe
                  title={track.name}
                  src={track.url}
                  width="300"
                  height="80"
                  frameBorder="0"
                  allowTransparency="true"
                  allow="encrypted-media"
                />
                {/* ------------------ADICIONAR NOVA MUSICA------------------------------------ */}

                <form>
                  <legend>Add New Music:</legend>
                  <legend>Name:</legend>
                  <input
                    value={this.state.typedTrackName}
                    onChange={this.onChangeInputTrackName}
                  ></input>
                  <legend>Artist:</legend>
                  <input
                    value={this.state.typedTrackArtist}
                    onChange={this.onChangeInputTrackArtist}
                  ></input>
                  <legend>URL:</legend>
                  <input
                    type="url"
                    value={this.state.typedTrackUrl}
                    onChange={this.onChangeInputTrackUrl}
                  ></input>
                  <button onClick={this.createTrack}>Save</button>
                </form>
              </div>
            );
          })}
        </section>
      </div>
    );
  }
}
