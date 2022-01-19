import React from "react";
import error from "../../assets/error.jpeg";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const ErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const ErrorImage = styled.img`
  width: 64vw;
  max-width: 450px;
`;

const ErrorPage = () => {
  return (
    <ErrorPageContainer>
      <ErrorImage src={error} />
      <Typography color={"primary"} variant={"h4"} align={"center"}>
        Erro 404 - Página Não Encontrada
      </Typography>
    </ErrorPageContainer>
  );
};

export default ErrorPage;
