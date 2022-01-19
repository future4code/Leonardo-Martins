import React from "react";
// import "./CardGrande.css";
import styled from "styled-components";

const BigCard = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 20px 10px;
  margin-bottom: 10px;
  height: 200px;
  border-radius: 10px;
`;
const Imagem = styled.img`
  width: 70px;
  margin-right: 10px;
  border-radius: 50%;
`;

const Titulo = styled.h4`
  margin: 15px;
`;
const Texto = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
`;

function CardGrande(props) {
  return (
    <BigCard>
      <Imagem src={props.imagem} />
      <Texto>
        <Titulo>{props.nome}</Titulo>
        <p>{props.descricao}</p>
      </Texto>
    </BigCard>
  );
}

export default CardGrande;
