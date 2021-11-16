import React from "react";
import { Home } from "./pages/Home";
import { ListTripPage } from "./pages/ListTripPage";
import { ApplicationFormPage } from "./pages/ApplicationFormPage";
import { LoginPage } from "./pages/LoginPage";
import { AdminHome } from "./pages/AdminHome";
import { CreateTrip } from "./pages/CreateTrip";
import { TripDetails } from "./pages/TripDetails";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>

        <Route exact path={"/trips/list"}>
          <ListTripPage />
        </Route>

        <Route exact path={"/trips/application"}>
          <ApplicationFormPage />
        </Route>

        <Route exact path={"/login"}>
          <LoginPage />
        </Route>

        <Route exact path={"/admin/trips/list"}>
          <AdminHome />
        </Route>

        <Route exact path={"/admin/trips/create"}>
          <CreateTrip />
        </Route>

        <Route exact path={"/admin/trips/:id"}>
          <TripDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
