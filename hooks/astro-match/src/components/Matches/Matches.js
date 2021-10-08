import axios from "axios";
import React from "react";
import MatchesUser from "./MatchesUser";

class Matches extends React.Component {
  state = {
    matches: [],
  };

  componentDidMount = () => {
    this.getMatches();
  };

  getMatches = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo-martins/matches"
      )
      .then((res) => {
        console.log(res.data);
        this.setState({ matches: res.data.matches });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const matchedUsers = this.state.matches.map((user) => {
      return <MatchesUser user={user} key={user.id} />;
    });
    return (
      <div>
        <h1>Seus matches</h1>
        <ul>{matchedUsers}</ul>
      </div>
    );
  }
}

export default Matches;
