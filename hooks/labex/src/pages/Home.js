import React from "react";
import { useHistory } from "react-router-dom";

export const Home = () => {
  const history = useHistory();

  const goToListTrippage = () => {
    history.push("/trips/list");
  };

  const goToAdminHome = () => {
    history.push("/admin/trips/list");
  };

  return (
    <div>
      <h2>Home</h2>

      <button onClick={goToListTrippage}>Lista de viagens</button>
      <button onClick={goToAdminHome}>Página Administrativa</button>
    </div>
  );
};

export default Home;
