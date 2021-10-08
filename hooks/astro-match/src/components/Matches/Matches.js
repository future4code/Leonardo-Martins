import axios from "axios";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import MatchesUser from "./MatchesUser";

const Matches = forwardRef((props, ref) => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches();
  }, []);

  useImperativeHandle(ref, () => ({
    clearMatches() {
      getMatches();
    },
  }));

  const getMatches = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo-martins/matches"
      )
      .then((res) => {
        console.log(res.data);
        setMatches(res.data.matches);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const matchedUsers = matches.map((user) => {
    return <MatchesUser user={user} key={user.id} />;
  });

  return (
    <div>
      <h1>Seus matches</h1>
      <ul>{matchedUsers}</ul>
    </div>
  );
});

export default Matches;
