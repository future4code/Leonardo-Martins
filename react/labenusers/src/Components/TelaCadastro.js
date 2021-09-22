import React from "react";
import axios from "axios";
import styled from "styled-components";

const DivCard = styled.div`
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DivButton = styled.button`
  border: none;
  background-color: white;

  button {
    text-align: center;
    width: 150px;
    height: 36px;
    margin: 10px;
    border-radius: 8px;
    background-color: black;
    color: lightsalmon;

    :hover {
      background-color: lightsalmon;
      color: black;
    }
  }
`;

const ContainerCadastro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
  width: 300px;
  background-color: lightsalmon;

  input {
    background-color: lightsalmon;
    margin: 8px;
    border-radius: 8px;
    border: 1px solid black;

    :hover {
      width: 200px;
      height: 24px;
    }
  }

  button {
    width: 100px;
    height: 36px;
    margin: 10px;
    border-radius: 8px;
    background-color: black;
    color: lightsalmon;

    :hover {
      font-size: 20px;
      width: 150px;
      height: 40px;
    }
  }
`;

const headers = {
  headers: {
    Authorization: "leonardo-martins-maryam",
  },
};

export default class TelaCadastro extends React.Component {
  state = {
    nome: "",
    email: "",
  };

  handleNome = (e) => {
    this.setState({ nome: e.target.value });
  };

  handleEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  fazerCadastro = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const body = {
      name: this.state.nome,
      email: this.state.email,
    };

    axios
      .post(url, body, headers)
      .then((res) => {
        alert("Usuário cadastrado com sucesso!");
        this.setState({ nome: "", email: "" });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  render() {
    return (
      <DivCard>
        <DivButton>
          <button onClick={this.props.irParaLista}>Lista de Usuários</button>
          <button onClick={this.props.irParaDetalhe}>Detalhe Usuário</button>
        </DivButton>
        <ContainerCadastro>
          <h2>Cadastro</h2>
          <input
            placeholder={"Nome"}
            value={this.state.nome}
            onChange={this.handleNome}
          />
          <input
            placeholder={"E-mail"}
            value={this.state.email}
            onChange={this.handleEmail}
          />
          <button onClick={this.fazerCadastro}>Cadastrar</button>
        </ContainerCadastro>
      </DivCard>
    );
  }
}
