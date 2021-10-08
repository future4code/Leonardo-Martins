import React from "react";
import styled from "styled-components";

const User = styled.li`
  display: flex;
  margin-bottom: 12px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 12px;
  }
`;

class MatchesUser extends React.Component {
  render() {
    return (
      <User>
        <img src={this.props.user.photo} />
        <p>{this.props.user.name}</p>
      </User>
    );
  }
}

export default MatchesUser;
