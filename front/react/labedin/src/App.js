import React from "react";
import "./App.css";
import CardGrande from "./components/CardGrande/CardGrande";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import CardPequeno from "./components/CardPequeno/CardPequeno";
import styled from "styled-components";

// styled components

const Site = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;
const Caixas = styled.div`
  width: 40vw;
  margin: 10px;
`;
const Titulo = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

function App() {
  return (
    <Site>
      <Caixas>
        <Titulo>Dados pessoais</Titulo>
        <CardGrande
          imagem="https://avatars.githubusercontent.com/u/27970041?v=4"
          nome="Leonardo Fernandes Martins"
          descricao="Oi, eu sou o Leonardo. Sou aluno da Labenu. Sou formado em administração de empresas, trabalhava em uma empresa familiar, mas resolvi mudar de área."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </Caixas>

      <Caixas>
        <CardPequeno
          imagem="data:image/png;base64,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"
          dados="Email: "
          descricao="leonardo@email.com"
        />
      </Caixas>

      <Caixas>
        <CardPequeno
          imagem="https://www.jacui.mg.leg.br/imagens/local.png"
          dados="Endereço: "
          descricao="Av. Labenu, 123"
        />
      </Caixas>

      <Caixas>
        <Titulo>Experiências profissionais</Titulo>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Labenu"
          descricao="Formando desenvolvedores para o mercado de trabalho!"
        />

        <CardGrande
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg"
          nome="NASA"
          descricao="Apontando defeitos."
        />
      </Caixas>

      <Caixas>
        <Titulo>Minhas redes sociais</Titulo>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </Caixas>
    </Site>
  );
}

export default App;
