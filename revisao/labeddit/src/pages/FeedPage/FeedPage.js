import React from "react";
import { useHistory } from "react-router";
import { goToPost } from "../../routes/coordinator";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";

const baseUrl = "https://labeddit.herokuapp.com";

const FeedPage = () => {
  useProtectedPage();
  const history = useHistory();

  const feed = useRequestData([], `${BASE_URL}/posts`);
  console.log(feed);

  return (
    <div>
      <h2>Feed</h2>
      <button onClick={() => goToPost(history)}>Postar</button>
    </div>
  );
};

export default FeedPage;
