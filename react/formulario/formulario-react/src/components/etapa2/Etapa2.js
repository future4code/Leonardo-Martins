import React from "react";

export default class Etapa2 extends React.Component {
  render() {
    return (
      <div>
        <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
        <div>
          <div>
            <h3>5. Qual curso?</h3>
            <input placeholder={"Curso"} />
          </div>

          <div>
            <h3>6. Qual a unidade de ensino?</h3>
            <input placeholder={"Unidade de ensino"} />
          </div>
        </div>
      </div>
    );
  }
}
