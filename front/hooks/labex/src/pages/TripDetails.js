import React from "react";
import { useHistory } from "react-router";

export const TripDetails = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <h2>TripDetails</h2>
      <button onClick={goBack}>Voltar</button>
    </div>
  );
};

export default TripDetails;
