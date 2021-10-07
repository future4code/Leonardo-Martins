import axios from "axios";
import React from "react";

class Matches extends React.Component {
  state = {
    idCharacter: "",
    nameCharacter: "",
    image: "",
  };

  getMatches = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches"
      )
      .then((res) => {
        console.log(res.data);
        this.setState({ idCharacter: res.data.matches.id });
        this.setState({ nameCharacter: res.data.matches.name });
        this.setState({ image: res.data.matches.photo });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <h1>Seus matches</h1>
        <li
          key={this.state.idCharacter}
          match={this.match}
          onClick={this.getMatches}
        >
          <img src={this.state.image} alt={`foto de personagem`} />
          <p>{this.state.nameCharacter}</p>
        </li>
      </div>
    );
  }
}

export default Matches;
