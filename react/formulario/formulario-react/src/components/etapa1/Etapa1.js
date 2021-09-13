import React from "react";

export default class Etapa1 extends React.Component {
  state = {
    etapa: 1,
  };
  renderizaEtapa = () => {
    switch (this.state.evento) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />;
    }
  };

  render() {
    return (
      <div>
        <h1>Etapa 1 - Dados Gerais</h1>

        <div>
          <div>
            <h3>1. Qual o seu nome?</h3>
            <input placeholder={"Nome"} />
          </div>

          <div>
            <h3>2. Qual sua idade?</h3>
            <input placeholder={"Idade"} />
          </div>

          <div>
            <h3>3. Qual o seu email?</h3>
            <input placeholder={"Email"} />
          </div>

          <div>
            <h3>3. Qual a sua escolaridade?</h3>
          </div>
        </div>
      </div>
    );
  }
}
