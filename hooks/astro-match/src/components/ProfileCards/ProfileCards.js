import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import ProfileCard from "./ProfileCard";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Profile = styled.div`
  /* border: 1px solid black; */
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

const CardsDeck = styled.div`
  position: relative;
  height: 515px;
  width: 400px;
  margin-bottom: 50px;
`;

const Like = styled.div`
  display: flex;

  button {
    border-radius: 50%;
    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const RedButton = styled.button`
  border-radius: 40px;
  background-color: salmon;
  border: 4px solid red;
  font-size: 40px;
  margin: 12px;
`;

const GreenButton = styled.button`
  border-radius: 40px;
  background-color: lightgreen;
  border: 4px solid green;
  font-size: 40px;
  margin: 12px;
`;

const ProfileCards = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchedProfiles = [];
    for (let n = 0; n < 3; n++) {
      const profile = getProfileToChoose();
      fetchedProfiles.push(profile);
      if (fetchedProfiles.length === 3) {
        Promise.all(fetchedProfiles).then((res) => {
          setProfiles(res);
        });
      }
    }
  }, []);

  const getProfileToChoose = () => {
    return axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo-martins/person`
      )
      .then((res) => {
        return res.data.profile;
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const choosePerson = () => {
    const body = {
      id: profiles[0].id,
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

  const dislikeUser = () => {
    const profile = getProfileToChoose();
    Promise.resolve(profile).then((res) => {
      const shiftedProfiles = [profiles[1], profiles[2]];
      setProfiles([...shiftedProfiles, res]);
    });
  };

  const likeUser = () => {
    choosePerson();
    const profile = getProfileToChoose();
    Promise.resolve(profile).then((res) => {
      const shiftedProfiles = [profiles[1], profiles[2]];
      setProfiles([...shiftedProfiles, res]);
    });
  };

  const cards = profiles.map((profile, index) => (
    <ProfileCard key={profile.id} profile={profile} position={index} />
  ));

  return (
    <Card>
      <Profile>
        <CardsDeck>{cards}</CardsDeck>
        <Like>
          <RedButton onClick={dislikeUser}> ❌ </RedButton>
          <GreenButton onClick={likeUser}> 💚 </GreenButton>
        </Like>
      </Profile>
    </Card>
  );
};

export default ProfileCards;
