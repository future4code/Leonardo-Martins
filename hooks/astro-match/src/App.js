import React from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import Home from "./components/Home/Home";
import Matches from "./components/Matches/Matches";

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

  render() {
    return (
      <div>
        <header>
          <h1>AstroMatch</h1>
          <button onClick={this.displayHome}>Home</button>
          <button onClick={this.displayProfileCard}>Encontre pessoas</button>
          <button onClick={this.displayMatches}>Matches</button>
        </header>
        {this.changeTab()}
      </div>
    );
  }
}

export default App;

// import React, { useEffect, useState } from "react";
// import ProfileCard from "./components/ProfileCard/ProfileCard";
// import Home from "./components/Home/Home";
// import Matches from "./components/Matches/Matches";

// const App = () => {
//   const [tab, setTab] = useState("");

//   useEffect(() => {
//     displayHome();
//   }, []);

//   const displayProfileCard = () => {
//     setTab({ tab: "profile card" });
//   };

//   const displayMatches = () => {
//     setTab({ tab: "matches" });
//   };

//   const displayHome = () => {
//     setTab({ tab: "home" });
//   };

//   const changeTab = () => {
//     switch (tab) {
//       case "profile card":
//         return <ProfileCard />;

//       case "matches":
//         return <Matches />;

//       case "home":
//         return (
//           <Home
//             displayProfileCard={displayProfileCard}
//             displayMatches={displayMatches}
//           />
//         );

//       default:
//         break;
//     }
//   };
// };

// export default App;
