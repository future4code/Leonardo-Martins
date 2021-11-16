import React from "react";
import { useHistory } from "react-router";

export const ApplicationFormPage = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };
  return (
    <div>
      <h2>ApplicationFormPage</h2>
      <button onClick={goBack}>Voltar</button>
    </div>
  );
};

export default ApplicationFormPage;
