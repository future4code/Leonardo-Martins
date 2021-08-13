// /*
// Interpretação
// 1) 10
//   10, 5

// 2) 10, 10, 10

// 3) HORAS= 8
//   SALARIO= 80
//   10 POR HORA
//   */

//Exercicio 1

// A)
nome =
  // B)
  idade =
    // C)
    console.log(typeof nome, typeof idade);
// D) Quando não for atribuido um valor aparecerá undefined

// E)
const nomeUsuario = prompt("Qual seu nome?");
let idadeUsuario = prompt("Qual sua idade?");

// F) Quando utilizado o prompt sempre será string
console.log(typeof nome, typeof idade);
// G)
console.log("Olá", nomeUsuario, "você tem", idadeUsuario, "anos.");

//Exercício 2
const carro = prompt("Você tem um carro da Ford?");
const roupa = prompt("Você está levando um casaco?");
const tenis = prompt("Você tem um tenis branco?");
console.log("Você tem um carro da Ford?", carro);
console.log("Você está levando um casaco?", roupa);
console.log("Você tem um tenis branco?", tenis);

// Exercício 3
let a = 10;
let b = 25;

c = a;
a = b;
b = c;

console.log("O novo valor de a é", a); // O novo valor de a é 25
console.log("O novo valor de b é", b); // O novo valor de b é 10

// Desafio

const numero1 = Number(prompt("Primeiro número:"));
const numero2 = Number(prompt("Segundo número:"));

console.log(numero1 + numero2);
console.log(numero1 * numero2);
