import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import {
  goToLogin,
  goToPost,
  goToRegistration,
} from "../../routes/coordinator";
import useProtectedPage from "../../hooks/useProtectedPage";

const baseUrl = "https://labeddit.herokuapp.com";

const FeedPage = () => {
  useProtectedPage();
  const history = useHistory();

  return (
    <div>
      <h2>Feed</h2>
      <button onClick={() => goToPost(history)}>Postar</button>
    </div>
  );
};

export default FeedPage;
