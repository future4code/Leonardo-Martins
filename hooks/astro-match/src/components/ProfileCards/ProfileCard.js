import React from "react";
import styled from "styled-components";

const UserCard = styled.div`
  width: 400px;
  height: 485px;
  border-radius: 12px;
  overflow: hidden;
  position: absolute;
  background-color: lightblue;
  bottom: 0;
  left: 0;
  box-shadow: 0px 0px 25px -5px rgba(107, 107, 107, 1);
  transition: all 0.5s;

  &.card-0 {
    z-index: 2;
  }

  &.card-1 {
    z-index: 1;
    bottom: 30px;
    transform: scale(0.95);
  }

  &.card-2 {
    z-index: 0;
    bottom: 60px;
    transform: scale(0.9);
  }
`;

const Character = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 12px;

  h3 {
    margin-right: 12px;
  }
`;

const ProfileCard = (props) => {
  return (
    <UserCard className={`card-${props.position}`}>
      <img src={props.profile.photo} alt={"foto usuário"} />
      <Character>
        <h3>
          {props.profile.name}, {props.profile.age}
        </h3>
        <p>{props.profile.bio}</p>
      </Character>
    </UserCard>
  );
};

export default ProfileCard;
