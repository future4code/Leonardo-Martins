import React from "react";
import Etapa1 from "./components/etapa1/Etapa1";
import Etapa2 from "./components/etapa2/Etapa2";
import Etapa3 from "./components/etapa3/Etapa3";
import Final from "./components/final/Final";

export default class App extends React.Component {
  render() {
    return (
      <div>
        {this.renderizaEtapa()}
        <button>Próxima etapa</button>
      </div>
    );
  }
}
// export default App;
