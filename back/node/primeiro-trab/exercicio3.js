const novaTarefa = process.argv[2];

const listaDeTarefas = [
  "arrumar a casa",
  "estudar",
  "comer",
  "fazer exercício",
];

listaDeTarefas.push(novaTarefa);

console.log(listaDeTarefas);
