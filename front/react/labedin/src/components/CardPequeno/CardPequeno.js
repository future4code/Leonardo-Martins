import React from "react";
// import "./CardPequeno.css";
import styled from "styled-components";

const SmallCard = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 20px 10px;
  margin-bottom: 10px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;
const Imagem = styled.img`
  width: 70px;
  margin-right: 10px;
  border-radius: 50%;
`;

const DadosTitulo = styled.h4`
  margin: 15px;
`;

function CardPequeno(props) {
  return (
    <SmallCard>
      <Imagem src={props.imagem} />
      <DadosTitulo>{props.dados}</DadosTitulo>
      <p>{props.descricao}</p>
    </SmallCard>
  );
}

export default CardPequeno;
