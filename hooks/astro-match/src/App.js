import React, { useRef, useState } from "react";
import styled from "styled-components";
import ProfileCard from "./components/ProfileCards/ProfileCards";
import Home from "./components/Home/Home";
import Matches from "./components/Matches/Matches";
import axios from "axios";

const Header = styled.header`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid black;
  background-color: lightblue;

  h2 {
    font-size: 36px;
    background-color: lightblue;
  }
  button {
    border: none;
    background-color: lightblue;
    margin: 20px;

    :hover {
      font-size: 48px;
    }
  }
`;

const AppContainer = styled.div`
  border: 1px solid black;
  width: 430px;
  padding-bottom: 20px;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Match = styled.button`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  font-size: 32px;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 12px;

  button {
    border-radius: 12px;
    border: 4px solid black;
    font-size: 16px;
    background-color: lightblue;
  }
`;

const App = () => {
  const [tab, setTab] = useState("");

  const matchesRef = useRef();

  const displayProfileCard = () => {
    setTab("profile card");
  };

  const displayMatches = () => {
    setTab("matches");
  };

  const displayHome = () => {
    setTab("home");
  };

  const changeTab = () => {
    switch (tab) {
      case "profile card":
        return <ProfileCard />;

      case "matches":
        return <Matches ref={matchesRef} />;

      default:
        return (
          <Home
            displayProfileCard={displayProfileCard}
            displayMatches={displayMatches}
          />
        );
    }
  };

  const clearApp = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo-martins/clear"
      )
      .then((res) => {
        console.log(res.data);
        matchesRef.current.clearMatches();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AppContainer>
      <Header>
        <Match onClick={displayProfileCard}> 🚻 </Match>
        <button onClick={displayHome}>
          <h2>AstroMatch</h2>
        </button>
        <Match onClick={displayMatches}> 💌 </Match>
      </Header>
      {changeTab()}
      <Footer>
        <button onClick={clearApp}>Reiniciar</button>
      </Footer>
    </AppContainer>
  );
};

export default App;
