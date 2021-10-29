import { Switch, Route } from "react-router-dom";
import React from "react";
import LoginPage from "../pages/LoginPage/LoginPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import Registration from "../pages/Registration/Registration";
import PostPage from "../pages/PostPage/PostPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Router = ({ setRightButtonText }) => {
  return (
    <Switch>
      <Route exact path="/">
        <LoginPage setRightButtonText={setRightButtonText} />
      </Route>

      <Route exact path="/registration">
        <Registration setRightButtonText={setRightButtonText} />
      </Route>

      <Route exact path="/feed">
        <FeedPage />
      </Route>

      <Route exact path="/post">
        <PostPage />
      </Route>
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
};

export default Router;
