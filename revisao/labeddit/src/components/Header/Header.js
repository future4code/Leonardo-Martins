import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { goToFeed, goToLogin } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";

const Toolbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Header = ({ rightButtonText, setRightButtonText }) => {
  const history = useHistory();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
  };

  const rightButtonAction = () => {
    if (token) {
      logout();
      setRightButtonText("Login");
      goToLogin(history);
    } else {
      goToLogin(history);
    }
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Button onClick={() => goToFeed(history)} color="inherit">
          Labeddit
        </Button>
        <Button onClick={rightButtonAction} color="inherit">
          {rightButtonText}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
