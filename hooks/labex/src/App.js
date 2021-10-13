import React from "react";
import { AdminHomePage } from "./pages/AdminHomePage";
import { ApplicationFormPage } from "./pages/ApplicationFormPage";
import { Home } from "./pages/Home";
import { ListTripPage } from "./pages/ListTripPage";
import { LoginPage } from "./pages/LoginPage";
import { CreateTrip } from "./pages/CreateTrip";
import { TripDetails } from "./pages/TripDetails";
import { BrowserRouter, Switch, Route } from "react";

const App = () => {
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
          <AdminHomePage />
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
};

export default App;
