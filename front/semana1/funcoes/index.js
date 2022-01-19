// Exercícios de interpretação de código

// 1)

// function minhaFuncao(variavel) {
//   return variavel * 5;
// }
// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))
// A) 10, 50
// B) Não imprimiria nada

// 2)

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function (texto) {
//   return texto.toLowerCase().includes("cenoura");
// };

// const resposta = outraFuncao(textoDoUsuario);
// console.log(resposta);
// A) Ele está dizendo se tem "cenoura" na frase do usuário ou não, através de true e false
// B)
// i.True
// ii. True
// iii. True

// Exercícios de escrita de código

// 1)
function dadosUsuario() {
  const nomeUsuario = prompt(`Qual seu nome? `);
  const idadeUsuario = prompt(`Qual sua idade? `);
  const cidadeUsuario = prompt(`Onde você mora? `);
  const profissaoUsuario = prompt(`Qual sua profissão? `);
  console.log(
    `Eu sou ${nomeUsuario}, tenho ${idadeUsuario} anos, moro em ${cidadeUsuario} e sou ${profissaoUsuario}.`
  );
}
dadosUsuario();

// 2)
// a)
function numParametro(num1, num2) {
  soma = num1 + num2;
  console.log(soma);
}
numParametro(2, 5);
numParametro(5, 10);

// b)
function numMaiorOuIgual(num1, num2) {
  maiorOuIgual = num1 >= num2;
  console.log(maiorOuIgual);
}
numMaiorOuIgual(2, 3);
numMaiorOuIgual(10, 5);

// c)
function numPar(num1) {
  numeroPar = num1 % 2 === 0;
  console.log(numeroPar);
}
numPar(10);
numPar(9);
numPar(5);

// d)
function frase(fraseUsuario) {
  console.log(fraseUsuario.length);
  console.log(fraseUsuario.toUpperCase());
}
const fraseUsuario = prompt(`Digite uma frase: `);
frase(fraseUsuario);

// 3)
function numParametro() {
  soma = numUsuario1 + numUsuario2;
  diferenca = numUsuario1 - numUsuario2;
  multiplicacao = numUsuario1 * numUsuario2;
  divisao = numUsuario1 / numUsuario2;
  console.log(`Números inseridos: ${numUsuario1} e ${numUsuario2}`);
  console.log(`Soma: ${soma}`);
  console.log(`Diferença: ${diferenca}`);
  console.log(`Multiplicação: ${multiplicacao}`);
  console.log(`Divisão: ${divisao}`);
}
const numUsuario1 = Number(prompt(`Digite um número: `));
const numUsuario2 = Number(prompt(`Digite um número: `));
numParametro(numUsuario1, numUsuario2);
