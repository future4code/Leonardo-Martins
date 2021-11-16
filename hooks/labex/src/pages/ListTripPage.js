import React from "react";
import { useHistory } from "react-router";

export const ListTripPage = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const goToApplicationFormPage = () => {
    history.push("/trips/application");
  };

  return (
    <div>
      <h2>ListTripPage</h2>
      <button onClick={goBack}>Voltar</button>
      <button onClick={goToApplicationFormPage}>Inscrever-se</button>
    </div>
  );
};

export default ListTripPage;
