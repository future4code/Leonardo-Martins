import React from "react";
import axios from "axios";
import styled from "styled-components";

const ContainerApp = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  width: 400px;
  background-color: greenyellow;

  h1 {
    text-align: center;
    color: black;
    font-size: 40px;
  }

  li {
    font-size: 20px;
    color: black;
  }
`;

const CardPlaylist = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 4px;
  border-bottom: 1px solid black;
  padding: 12px;
  list-style: none;
  margin: 16px 28px;

  button {
    background-color: red;
    margin-left: 36px;
    border-radius: 16px;
    font-size: 16px;
    color: white;
  }
`;

const PlaylistsNames = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;

  button {
    margin: 8px;
    border-radius: 12px;
    background-color: greenyellow;
    color: black;
    font-size: 20px;

    :hover {
      font-size: 24px;
    }
  }

  input {
    height: 20px;
    width: 200px;
    background-color: greenyellow;
    color: black;
    font-size: 20px;
  }
`;

const AddMusic = styled.div`
  margin: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  input {
    margin: 8px 0px;
  }
`;

const headers = {
  headers: {
    Authorization: "leonardo-martins-maryam",
  },
};

export default class App extends React.Component {
  state = {
    playlists: [],
    playlistName: "",
    tracks: [],
    musicName: "",
    artist: "",
    urlMusic: "",
    activePlaylist: "",
  };

  componentDidMount() {
    this.getAllPlaylists();
  }

  handlePlayslistName = (e) => {
    this.setState({ playlistName: e.target.value });
  };

  handleMusicName = (e) => {
    this.setState({ musicName: e.target.value });
  };

  handleArtist = (e) => {
    this.setState({ artist: e.target.value });
  };

  handleUrlMusic = (e) => {
    this.setState({ urlMusic: e.target.value });
  };

  handlePlaylistDelete = (e) => {
    const id = e.target.id;
    console.log(e.target);
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
        headers
      )
      .then((res) => {
        alert("Playslist apagada com sucesso!");
        this.getAllPlaylists();
      })
      .catch((err) => {
        alert("Erro! Não foi possível apagar está playlist.");
      });
  };

  getPlaylistTracks = (e) => {
    const id = e.target.id;
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`;
    axios
      .get(url, headers)
      .then((res) => {
        console.log(res.data);
        this.setState({ tracks: res.data.result.tracks });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getAllPlaylists = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    axios
      .get(url, headers)
      .then((res) => {
        this.setState({ playlists: res.data.result.list });
      })
      .catch((err) => {
        alert(err.response);
      });
  };

  createPlaylist = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    const body = {
      name: this.state.playlistName,
    };

    axios
      .post(url, body, headers)
      .then((res) => {
        this.setState({ playlistName: "" });
        this.getAllPlaylists();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  addTrackToPlaylist = (e) => {
    const id = e.target.id;
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`;

    const body = {
      name: this.state.musicName,
      artist: this.state.artist,
      url: this.state.urlMusic,
    };

    axios
      .post(url, body, headers)
      .then((res) => {
        console.log(res.data);
        this.getPlaylistTracks();
      })
      .catch((err) => {
        console.log(err);
      });

    this.setState({ musicName: "", artist: "", urlMusic: "" });
  };

  render() {
    const playlistComponents = this.state.playlists.map((play) => {
      return (
        <CardPlaylist>
          <li key={play.id} id={play.id} onClick={this.getPlaylistTracks}>
            {play.name}
          </li>
          <button id={play.id} onClick={this.handlePlaylistDelete}>
            X
          </button>
        </CardPlaylist>
      );
    });
    return (
      <ContainerApp>
        <h1>Labefy</h1>
        <PlaylistsNames>
          <input
            value={this.state.playlistName}
            onChange={this.handlePlayslistName}
            placeholder={"Nome Playlist"}
          />
          <button onClick={this.createPlaylist}>Enviar</button>
        </PlaylistsNames>
        {playlistComponents}
        {/* <PlaylistList /> */}
        <AddMusic>
          <input
            value={this.state.musicName}
            onChange={this.handleMusicName}
            placeholder={"Nome da Música"}
          />
          <input
            value={this.state.artist}
            onChange={this.handleArtist}
            placeholder={"Nome do artista"}
          />
          <input
            value={this.state.urlMusic}
            onChange={this.handleUrlMusic}
            placeholder={"url da música"}
          />
          {/* <select />
          <option value={this.state.playlistName} /> */}

          <button onClick={this.addTrackToPlaylist}>Adicionar música</button>
        </AddMusic>
      </ContainerApp>
    );
  }
}
