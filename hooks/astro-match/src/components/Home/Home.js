import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;

  input {
    margin: 12px;
  }

  button {
    border-radius: 12px;
    border: 4px solid black;
    font-size: 16px;
  }
`;

const Email = styled.div`
  display: flex;
`;

const Senha = styled.div`
  display: flex;
`;

class Home extends React.Component {
  render() {
    return (
      <HomeContainer>
        <Email>
          <h3>E-mail: </h3>
          <input placeholder={"E-mail"} />
        </Email>
        <Senha>
          <h3>Senha: </h3>
          <input placeholder={"Senha"} />
        </Senha>
        <button onClick={this.props.displayProfileCard}>Entrar</button>
      </HomeContainer>
    );
  }
}

export default Home;
