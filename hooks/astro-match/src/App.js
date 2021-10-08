import React from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import Home from "./components/Home/Home";
import Matches from "./components/Matches/Matches";
import styled from "styled-components";
import axios from "axios";

const Header = styled.header`
  display: flex;
  justify-content: center;
  h2 {
    font-size: 36px;
  }
  button {
    border: none;
    /* border-bottom: 1px solid black; */
    background-color: white;
    margin: 20px;
  }
`;

const AppContainer = styled.div`
  border: 1px solid black;
  width: 500px;
  margin: 20px;
  padding-bottom: 20px;
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
  }
`;

class App extends React.Component {
  state = {
    tab: "",
  };

  componentDidMount = () => {
    this.displayHome();
  };

  displayProfileCard = () => {
    this.setState({ tab: "profile card" });
  };

  displayMatches = () => {
    this.setState({ tab: "matches" });
  };

  displayHome = () => {
    this.setState({ tab: "home" });
  };

  changeTab = () => {
    switch (this.state.tab) {
      case "profile card":
        return <ProfileCard />;

      case "matches":
        return <Matches />;

      case "home":
        return (
          <Home
            displayProfileCard={this.displayProfileCard}
            displayMatches={this.displayMatches}
          />
        );

      default:
        break;
    }
  };

  clearApp = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo-martins/clear"
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <AppContainer>
        <Header>
          <Match onClick={this.displayProfileCard}> 🚻 </Match>
          <button onClick={this.displayHome}>
            <h2>AstroMatch</h2>
          </button>
          {/* <button onClick={this.displayProfileCard}>Encontre pessoas</button> */}
          <Match onClick={this.displayMatches}> 💌 </Match>
        </Header>
        <hr />
        {this.changeTab()}
        <Footer>
          <button onClick={this.clearApp}>Reiniciar</button>
        </Footer>
      </AppContainer>
    );
  }
}

export default App;
