import React from "react";
import axios from "axios";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    margin: 12px;
    border-radius: 12px;
    border: 4px solid black;
    font-size: 16px;
  }
`;

const Profile = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  padding: 12px;
  img {
    width: 400px;
    height: 350px;
  }
`;

const Character = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    margin-right: 12px;
  }
`;

const Like = styled.div`
  display: flex;
  button {
    border-radius: 40px;
    background-color: grey;
    border: 1px solid black;
    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

class ProfileCard extends React.Component {
  state = {
    profile: {},
    id: "",
    age: "",
    name: "",
    photo: "",
    bio: "",
  };

  componentDidMount = () => {
    this.getProfileToChoose();
  };

  getProfileToChoose = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo-martins/person`
      )
      .then((res) => {
        console.log(res.data);
        this.setState({ id: res.data.profile.id });
        this.setState({ name: res.data.profile.name });
        this.setState({ age: res.data.profile.age });
        this.setState({ bio: res.data.profile.bio });
        this.setState({ photo: res.data.profile.photo });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  choosePerson = () => {
    const body = {
      id: this.state.id,
      choice: true,
    };

    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo-martins/choose-person";

    axios
      .post(url, body)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  render() {
    return (
      <Card>
        <button onClick={this.getProfileToChoose}>Ver outro perfil</button>
        <Profile>
          <img src={this.state.photo} alt={`foto de ${this.state.name}`} />
          <Character>
            <h3>{this.state.name}</h3>
            <h4>{this.state.age}</h4>
          </Character>
          <p>{this.state.bio}</p>
          <Like>
            <button> ❌ </button>
            <button onClick={this.choosePerson}> 💚 </button>
          </Like>
        </Profile>
      </Card>
    );
  }
}

export default ProfileCard;
