//------ Exercícios de interpretação de código ------

// // 1)
// //A)
// let array;
// console.log("a. ", array);
// //RESPOSTA = a. undefined
// //B)
// array = null;
// console.log("b. ", array);
// //RESPOSTA = b. null
// //C)
// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// console.log("c. ", array.length);
// //RESPOSTA = c. 11
// //D)
// let i = 0;
// console.log("d. ", array[i]);
// //RESPOSTA = d.Posição 0 é =  3
// //E)
// array[i + 1] = 19;
// console.log("e. ", array);
// //RESPOSTA = e. Substitui o 4 do array pelo 19
// //F)
// const valor = array[i + 6];
// console.log("f. ", valor);
// //RESPOSTA = f. Posição 6 é = 9

// 2)
// const frase = prompt("Digite uma frase");
// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length);
// RESPOSTA = Neste problema está pedindo o número de caracteres da array e para substituir todas as letras "a" por "i" e para colocar todas as letras em maiúsculo na frase
// RESPOSTA = 27 caracteres
// RESPOSTA = SUBI NUM ÔNIBUS EM MIRROCOS

// ---------- Exercícios de escrita de código -------

// 1)
const nomeUsuario = prompt(`Digite o seu nome de usuário: `);
const emailUsuario = prompt(`Digite o seu email: `);
console.log(
  `O email ${emailUsuario} foi cadastrado com sucesso. Seja bem vinda(o), ${nomeUsuario}`
);

// 2)
const comidaFavorita = [`Churrasco`, `Sushi`, `Strogonoff`, `Massa`, `Pizza`];
// A)
console.log(comidaFavorita);
// B)
console.log(`Essas são as minhas comidas preferidas:`);
console.log(comidaFavorita[0]);
console.log(comidaFavorita[1]);
console.log(comidaFavorita[2]);
console.log(comidaFavorita[3]);
console.log(comidaFavorita[4]);
// C)
const comidaUsuario = prompt(`Qual a sua comida favorita? `);
console.log(comidaUsuario);
comidaFavorita.push(comidaUsuario);
comidaFavorita.copyWithin(1, 5);
comidaFavorita.pop();
console.log(comidaFavorita);

// 3)
// A)
const listaDeTarefas = [];
// B)
const tarefa1 = prompt(`Insira uma tarefa que irá realizar no dia de hoje: `);
const tarefa2 = prompt(`Insira uma tarefa que irá realizar no dia de hoje: `);
const tarefa3 = prompt(`Insira uma tarefa que irá realizar no dia de hoje: `);
listaDeTarefas.push(tarefa1, tarefa2, tarefa3);
// C)
console.log(listaDeTarefas);
// D)
const tarefaRealizada = Number(
  prompt(`Qual tarefa já foi realizada de 1 a 3?`)
);
const feito = listaDeTarefas.length - 1;
// E)
console.log(listaDeTarefas.splice(feito, 1));
// F)
console.log(listaDeTarefas);

// --------------- DESAFIO -----------

// 1)
const fraseUsuario = prompt(`Escreva uma frase: `);

// 2)
const feira = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
console.log(feira.length);
console.log(feira.indexOf(`Abacaxi`));
