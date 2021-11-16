import React from "react";
import { useHistory } from "react-router";

export const CreateTrip = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <h2>CreateTrip</h2>
      <button onClick={goBack}>Voltar</button>
    </div>
  );
};

export default CreateTrip;
