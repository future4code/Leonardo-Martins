import React from "react";
import styled from "styled-components";
import "./styles.css";

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? "line-through" : "none")};
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

class App extends React.Component {
  state = {
    tarefas: [
      {
        id: 1,
        texto: "Limpar a casa",
        completa: false,
      },
      {
        id: 2,
        texto: "Estudar",
        completa: true,
      },
    ],
    inputValue: "",
    filtro: "",
  };

  componentDidUpdate() {
    const form = {
      tarefas: this.state.tarefas,
      inputValue: this.state.inputValue,
      filtro: this.state.filtro,
    };

    window.localStorage.setItem("form", JSON.stringify(form));
  }

  componentDidMount = () => {
    const formString = window.localStorage.getItem("form");

    if (formString) {
      const form = JSON.parse(formString);
      this.setState({
        tarefas: form.tarefas,
        inputValue: form.inputValue,
        filtro: form.filtro,
      });
    } else {
      const form = {
        tarefas: this.state.tarefas,
        inputValue: this.state.inputValue,
        filtro: this.state.filtro,
      };

      window.localStorage.setItem("form", JSON.stringify(form));
    }
  };

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false,
    };
    const novaListaDeTarefas = [...this.state.tarefas, novaTarefa];
    this.setState({ tarefas: novaListaDeTarefas });
  };

  selectTarefa = (tarefaId) => {
    const novaListaDeTarefas = this.state.tarefas.map((tarefas) => {
      if (tarefaId === tarefas.id) {
        const novaTarefa = {
          ...tarefas,
          completa: !tarefas.completa,
        };
        return novaTarefa;
      } else {
        return tarefas;
      }
    });

    this.setState({ tarefas: novaListaDeTarefas });
  };

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value });
  };

  render() {
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case "pendentes":
          return !tarefa.completa;
        case "completas":
          return tarefa.completa;
        default:
          return true;
      }
    });

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map((tarefa) => {
            return (
              <Tarefa
                key={tarefa.id}
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            );
          })}
        </TarefaList>
      </div>
    );
  }
}

export default App;
