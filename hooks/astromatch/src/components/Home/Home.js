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

const Password = styled.div`
  display: flex;
`;

const Home = (props) => {
  return (
    <HomeContainer>
      <Email>
        <h3>E-mail: </h3>
        <input placeholder={"E-mail"} />
      </Email>
      <Password>
        <h3>Senha: </h3>
        <input placeholder={"Senha"} />
      </Password>
      <button onClick={props.displayProfileCard}>Entrar</button>
    </HomeContainer>
  );
};

export default Home;
