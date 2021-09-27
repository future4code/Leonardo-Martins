// import React from "react";
// import axios from "axios";
// import styled from "styled-components";
// import { BASE_URL, HTTP_OPTIONS } from "../utils/http";

// export default class PlaylistCard extends React.Component {
//   handlePlaylistDelete = () => {
//     axios
//       .delete(`${BASE_URL}/playlists${this.props.id}`, HTTP_OPTIONS)
//       .then((res) => {
//         alert("Playslist apagada com sucesso!");
//         // this.getAllPlaylists();
//       })
//       .catch((err) => {
//         alert("Erro! Não foi possível apagar está playlist.");
//       });
//   };

//   getPlaylistTracks = () => {
//     axios
//       .get(`${BASE_URL}/playlists/${this.props.id}/tracks`, HTTP_OPTIONS)
//       .then((res) => {
//         console.log(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   render() {
//     return (
//       <li>
//         <li onClick={this.getPlaylistTracks}>{this.props.playlist.name}</li>
//         <button id={this.props.playlist.id} onClick={this.handlePlaylistDelete}>
//           X
//         </button>
//       </li>
//     );
//   }
// }
