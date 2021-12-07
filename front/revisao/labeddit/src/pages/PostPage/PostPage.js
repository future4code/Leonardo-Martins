import React from "react";
import { useHistory } from "react-router";
import { goToLogin } from "../../routes/coordinator";
import useProtectedPage from "../../hooks/useProtectedPage";

const PostPage = () => {
  useProtectedPage();
  const history = useHistory();
  return (
    <div>
      <header>
        <button onClick={() => goToLogin(history)}>Voltar</button>
        <h2>Labeddit</h2>
      </header>
      <hr />
      <h3>PostPage</h3>
    </div>
  );
};

export default PostPage;
