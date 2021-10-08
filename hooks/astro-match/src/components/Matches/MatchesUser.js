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

const MatchesUser = (props) => {
  return (
    <User>
      <img alt={props.user.name} src={props.user.photo} />
      <p>{props.user.name}</p>
    </User>
  );
};

export default MatchesUser;
