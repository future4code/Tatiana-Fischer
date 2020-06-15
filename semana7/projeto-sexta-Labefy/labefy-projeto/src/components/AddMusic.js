import React from "react";

export default class PlaylistDetails extends React.Component {
  render() {
    return (
      <div>
        <h2>Add Music To Playlist:</h2>
        <label>Name:</label>
        <input type="text"></input>

        <label>Artist:</label>
        <input type="text"></input>

        <label>Url:</label>
        <input type="url"></input>
      </div>
    );
  }
}
