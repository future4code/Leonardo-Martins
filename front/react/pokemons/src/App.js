import React from "react";
import axios from "axios";
import styled from "styled-components";

const ContainerPokemons = styled.div`
  border: 1px solid black;
  width: 500px;
  margin-left: 35%;
  background-color: greenyellow;
  border-radius: 12px;
`;

const Tittle = styled.div`
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardPokemon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  select {
    font-size: 20px;
    border-radius: 8px;
    background-color: black;
    color: greenyellow;
    margin: 20px;
    padding: 8px;
  }

  img {
    width: 300px;
    height: 300px;
  }
`;

export default class App extends React.Component {
  state = {
    pokemons: [],
    pictures: "",
  };

  componentDidMount() {
    this.getPokemons();
  }
  getPokemons = async () => {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
    );
    console.log("Pokemons", response.data.results);
    this.setState({ pokemons: response.data.results });
  };

  getPokePicture = async (event) => {
    const url = event.target.value;
    const response = await axios.get(`${url}`);
    this.setState({ pictures: response.data.sprites.front_default });
  };
  render() {
    const pokeList = this.state.pokemons.map((poke) => {
      return (
        <option key={poke.name} value={poke.url}>
          {poke.name}
        </option>
      );
    });
    return (
      <ContainerPokemons>
        <Tittle>
          <h1>Pokemons</h1>
        </Tittle>
        <CardPokemon>
          <select onChange={this.getPokePicture}>
            <option>Selecione um Pokemon</option>
            {pokeList}
          </select>
          {this.state.pictures && (
            <img src={this.state.pictures} alt="foto do pokemon" />
          )}
        </CardPokemon>
      </ContainerPokemons>
    );
  }
}
