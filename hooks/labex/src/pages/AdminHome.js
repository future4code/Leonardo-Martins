import React from "react";
import { useHistory } from "react-router";

export const AdminHome = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const goToCreateTrip = () => {
    history.push("/admin/trips/create");
  };

  const goToTripDetails = () => {
    history.push("/admin/trips/:id");
  };

  return (
    <div>
      <h2>AdminHome</h2>
      <button onClick={goBack}>Voltar</button>
      <button onClick={goToCreateTrip}>Criar viagem</button>

      <hr />
      <button onClick={goToTripDetails}>detalhes viagem</button>
    </div>
  );
};

export default AdminHome;
