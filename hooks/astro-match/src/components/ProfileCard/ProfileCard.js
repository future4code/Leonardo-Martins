import React from "react";
import axios from "axios";

class ProfileCard extends React.Component {
  state = {
    profile: {},
    id: "",
    age: "",
    name: "",
    photo: "",
  };

  getProfileToChoose = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person`
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  render() {
    return (
      <div>
        <h1>Tela do ProfileCard</h1>
        <button onClick={this.getProfileToChoose}>Ver outro perfil</button>
      </div>
    );
  }
}

export default ProfileCard;

// import axios from "axios";
// import React, { useState } from "react";

// const ProfileCard = () => {
//   const [profile, setProfile] = useState({});
//   const [id, setId] = useState("");
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [photo, setPhoto] = useState("");

//   const getProfileToChoose = () => {
//     axios
//       .get(
//         `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person`
//       )
//       .then((res) => {
//         console.log(res.data);
//       })
//       .catch((err) => {
//         console.log(err.response);
//       });
//   };

//   return (
//     <div>
//       <h1>Tela do ProfileCard</h1>
//       <button onClick={this.getProfileToChoose}>Ver outro perfil</button>
//       <h3>{this.props.name}</h3>
//       <h3>{this.props.age}</h3>
//       <img src={this.getProfileToChoose} />
//     </div>
//   );
// };

// export default ProfileCard;
