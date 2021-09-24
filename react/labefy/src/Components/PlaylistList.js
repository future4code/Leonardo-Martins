import React from "react";
import axios from "axios";
import styled from "styled-components";
import PlaylisCard from "./PlaylistCard";
import { BASE_URL, HTTP_OPTIONS } from "../utils/http";

export default class PlaylistCard extends React.Component {
  state = {
    playlists: [],
    loaded: false,
    status: "",
  };

  async componentDidMount() {
    const playlists = await this.getPlaylists();
    this.setState({ playlists });
    console.log(this.state);
  }

  getPlaylists = async () => {
    return await axios
      .get(`${BASE_URL}/playlists`, HTTP_OPTIONS)
      .then((res) => res.data.result.list)
      .catch((err) => {
        alert(err.response);
        return [];
      });
  };

  render() {
    return (
      <ul>
        {/* {this.state.playlists.map((playlist) => (
          <PlaylistCard key={playlist.id} playlist={playlist} />
        ))} */}
      </ul>
    );
  }
}
