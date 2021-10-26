import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import LoginPage from "../pages/LoginPage/LoginPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import Registration from "../pages/Registration/Registration";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>

        <Route exact path="/registration">
          <Registration />
        </Route>

        <Route exact path="/feed">
          <FeedPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
