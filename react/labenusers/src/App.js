// import React from "react";
// import DetalheUsuario from "./Components/DetalheUsuario";
// import TelaCadastro from "./Components/TelaCadastro";
// import TelaListaUsuario from "./Components/TelaListaUsuario";

// export default class App extends React.Component {
//   state = {
//     telaAtual: "cadastro",
//   };

//   escolheTela = () => {
//     switch (this.state.telaAtual) {
//       case "cadastro":
//         return <TelaCadastro irParaLista={this.irParaLista} />;
//       case "lista":
//         return <TelaListaUsuario irParaCadastro={this.irParaCadastro} />;
//       case "detalhe":
//         return <DetalheUsuario irParaDetalhe={this.irParaDetalhe} />;

//       default:
//         return <div>Erro! Página não encontrada.</div>;
//     }
//   };

//   irParaCadastro = () => {
//     this.setState({ telaAtual: "cadastro" });
//   };

//   irParaLista = () => {
//     this.setState({ telaAtual: "lista" });
//   };

//   irParaDetalhe = () => {
//     this.setState({ telaAtual: "detalhe" });
//   };

//   render() {
//     return <div>{this.escolheTela()}</div>;
//   }
// }
import React from "react";
import DetalheUsuario from "./Components/DetalheUsuario";
import TelaCadastro from "./Components/TelaCadastro";
import TelaListaUsuario from "./Components/TelaListaUsuario";

export default class App extends React.Component {
  state = {
    telaAtual: "cadastro",
  };

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <TelaCadastro irParaLista={this.irParaLista} />;
      case "lista":
        return <TelaListaUsuario irParaCadastro={this.irParaCadastro} />;
      case "detalhe":
        return <DetalheUsuario irParaDetalhe={this.irParaDetalhe} />;

      default:
        return <div>Erro! Página não encontrada.</div>;
    }
  };

  irParaCadastro = () => {
    this.setState({ telaAtual: "cadastro" });
  };

  irParaLista = () => {
    this.setState({ telaAtual: "lista" });
  };

  irParaDetalhe = () => {
    this.setState({ telaAtual: "detalhe" });
  };

  render() {
    return <div>{this.escolheTela()}</div>;
  }
}
