// Exercícios de interpretação de código

//1- Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
const bool1 = true;
const bool2 = false;
const bool3 = !bool2;

let resultado = bool1 && bool2;
console.log("a. ", resultado);
// FALSE
resultado = bool1 && bool2 && bool3;
console.log("b. ", resultado);
// FALSE
resultado = !resultado && (bool1 || bool2);
console.log("c. ", resultado);
// TRUE
console.log("d. ", typeof resultado);
// BOOLEAN

// 2- Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console?
let primeiroNumero = prompt("Digite um numero!");
let segundoNumero = prompt("Digite outro numero!");

const soma = primeiroNumero + segundoNumero;

console.log(soma);
// NÃO COLOCOU NUMBER(), O PROMPT IMPRIME COMO STRING

// 3- Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.
let primeiroNumero = Number(prompt("Digite um numero!"));
let segundoNumero = Number(prompt("Digite outro numero!"));

const soma = primeiroNumero + segundoNumero;

console.log(soma);

// Exercícios de escrita de código

//1 a) Pergunte a idade do usuário

// b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

// c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)

// d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)

const nome = prompt("Qual seu nome?");
const idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo?"));
const idade = Number(prompt("Qual sua idade? "));
console.log(
  "Sua idade é maior do que a do seu melhor amigo?",
  idade > idadeAmigo
);
diferencaIdade = idade - idadeAmigo;
console.log(
  "A diferença de idade entre você e seu amigo é de ",
  diferencaIdade,
  "anos"
);

// 2 Faça um programa que:
// a) Peça ao usuário que insira um número **par**

// b) Imprima na console **o resto da divisão** desse número por 2.

// c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

// d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código

const numeroPar = Number(prompt("Insira um número par: "));
restoDivNumeroPar = numeroPar % 2;
console.log("O resto da divisão do número par por 2 é de:", restoDivNumeroPar);
// Por ser um número par dividido por 2 sempre será 0 o resto da divisão;

// Se for inserido um número ímpar o resto da divisão será !== 0

// 3 a) A idade do usuário em meses

// b) A idade do usuário em dias

// c) A idade do usuário em horas

const idade = Number(prompt("Qual sua idade? "));

idadeMeses = idade * 12;
console.log("A sua idade em meses é de ", idadeMeses, "meses");

idadeDias = idadeMeses * 365;
console.log("A sua idade em dias é de ", idadeDias, "dias");

idadeHoras = idadeDias * 24;
console.log("A sua idade em horas é de ", idadeHoras, "horas");

//4 Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:

let num1 = Number(prompt("Insira um número:"));
let num2 = Number(prompt("Insira mais um número:"));

console.log("O primeiro numero é maior que segundo?", num1 > num2);
console.log("O primeiro numero é igual ao segundo?", num1 === num2);
console.log("O primeiro numero é divisível pelo segundo?", num1 % num2 === 0);
console.log("O segundo numero é divisível pelo primeiro?", num2 % num1 === 0);
