import React from "react";
import PerguntaAberta from "./PerguntaAberta";
import PerguntaOpcoes from "./PerguntaOpcoes";

class Etapa1 extends React.Component {
  render() {
    return (
      <div>
        <h3>ETAPA 1 - DADOS GERAIS</h3>
        <PerguntaAberta pergunta={"1. Qual o seu nome?"} />
        <PerguntaAberta pergunta={"2. Qual sua idade?"} />
        <PerguntaAberta pergunta={"3. Qual seu email?"} />
        <PerguntaOpcoes
          pergunta={"4. Qual a sua escolaridade?"}
          opcoes={[
            "Ensino médio incompleto",
            "Ensino médio completo",
            "Ensino superior incompleto",
            "Ensino superior completo",
          ]}
        />
      </div>
    );
  }
}

export default Etapa1;

// import React from "react";

// export default class Etapa1 extends React.Component {

//   render() {
//     return (
//       <div>
//         <h1>Etapa 1 - Dados Gerais</h1>

//         <div>
//           <div>
//             <h3>1. Qual o seu nome?</h3>
//             <input placeholder={"Nome"} />
//           </div>

//           <div>
//             <h3>2. Qual sua idade?</h3>
//             <input placeholder={"Idade"} />
//           </div>

//           <div>
//             <h3>3. Qual o seu email?</h3>
//             <input placeholder={"Email"} />
//           </div>

//           <div>
//             <h3>3. Qual a sua escolaridade?</h3>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
