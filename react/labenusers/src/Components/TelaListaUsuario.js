import React from "react";
import axios from "axios";
import styled from "styled-components";

const ContainerLista = styled.div`
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardUsuario = styled.div`
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
  width: 200px;
  display: flex;
  justify-content: space-between;
  background-color: black;
  color: lightsalmon;

  :hover {
    font-size: 24px;
  }

  button {
    border-radius: 20px;
    background-color: lightsalmon;

    :hover {
      background-color: red;
      font-size: 20px;
    }
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
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
`;

const ListaDeUsuarios = styled.div`
  border: 1px solid black;
  width: 400px;
  margin: 8px;
  padding: 8px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: lightsalmon;
`;

const headers = {
  headers: {
    Authorization: "leonardo-martins-maryam",
  },
};

export default class TelaListaUsuario extends React.Component {
  state = {
    usuarios: [],
  };

  componentDidMount() {
    this.pegarUsuarios();
  }

  pegarUsuarios = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    axios
      .get(url, headers)
      .then((res) => {
        this.setState({ usuarios: res.data });
      })
      .catch((err) => {
        alert("Ocorreu um problema, tente novamente!");
      });
  };

  deletarUsuario = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
    axios
      .delete(url, headers)
      .then((res) => {
        alert("Usuário deletado com sucesso!");
        this.pegarUsuarios();
      })
      .catch((err) => {
        alert("Ocorreu um problema, tente novamente!");
      });
  };

  render() {
    console.log(this.state.usuarios);

    const listaUsuarios = this.state.usuarios.map((user) => {
      return (
        <CardUsuario key={user.id}>
          {user.name}
          <button onClick={() => this.deletarUsuario(user.id)}>X</button>
        </CardUsuario>
      );
    });

    return (
      <ContainerLista>
        <Button onClick={this.props.irParaCadastro}>Ir para Cadastro</Button>
        <ListaDeUsuarios>
          <h2>Lista de Usuários</h2>
          {listaUsuarios}
        </ListaDeUsuarios>
      </ContainerLista>
    );
  }
}
