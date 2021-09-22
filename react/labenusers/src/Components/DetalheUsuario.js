import React from "react";
import styled from "styled-components";

const DivButton = styled.div`
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

export default class DetalheUsuario extends React.Component {
  render() {
    return (
      <div>
        <DivButton>
          <button onClick={this.props.irParaCadastro}>Cadastro</button>
          <button onClick={this.props.irParaLista}>Lista de Usuários</button>
        </DivButton>
        <h2>Detalhe Dos Usuários</h2>
      </div>
    );
  }
}
