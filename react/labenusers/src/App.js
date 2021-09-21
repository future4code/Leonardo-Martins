import React from "react";
import axios from "axios";

const headers = {
  headers: {
    Authorization: "leonardo-martins-maryam",
  },
};

export default class App extends React.Component {
  state = {
    users: [],
    userName: "",
    userEmail: "",
  };

  componentDidMount() {
    this.getAllUsers();
  }

  handleUserName = (e) => {
    this.setState({ userName: e.target.value });
  };
  handleUserEmail = (e) => {
    this.setState({ userEmail: e.target.value });
  };

  createUser = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    const body = {
      name: this.state.userName,
      email: this.state.userEmail,
    };

    axios
      .post(url, body, headers)
      .then((res) => {
        this.setState({ userName: "" });
        this.getAllUsers();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  getAllUsers = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    axios
      .get(url, headers)
      .then((res) => {
        this.setState({ dados: res.data.result.list });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  getUserById = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id";
    axios
      .get(url, headers)
      .then((res) => {
        this.setState({ users: res.data.result.list });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  searchUsers = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=&email=";
    axios
      .get(url, headers)
      .then((res) => {
        this.setState({ users: res.data.result.list });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  render() {
    const userComponents = this.state.users.map((dadosUser) => {
      return <li key={dadosUser.name}>{dadosUser.email}</li>;
    });

    return (
      <div>
        <h1>Labeusers</h1>
        <div>
          <label>Nome:</label>
          <input
            placeholder="Nome"
            value={this.state.userName}
            onChange={this.handleUserName}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            placeholder="Email"
            value={this.state.userEmail}
            onChange={this.handleUserEmail}
          />
        </div>
        <button onClick={this.createUsers}>Enviar</button>
        {userComponents}
      </div>
    );
  }
}
