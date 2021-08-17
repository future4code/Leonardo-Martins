//Exercícios de interpretação de código

// 1)
// const respostaDoUsuario = prompt("Digite o número que você quer testar");
// const numero = Number(respostaDoUsuario);

// if (numero % 2 === 0) {
//   console.log("Passou no teste.");
// } else {
//   console.log("Não passou no teste.");
// }
// a)RESPOSTA: O código testa se o número é divisível por 2
// b)RESPOSTA: Números pares
// c)RESPOSTA: Números impares

// 2)
// let fruta = prompt("Escolha uma fruta");
// let preco;
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5;
//     break;
//   case "Maçã":
//     preco = 2.25;
//     break;
//   case "Uva":
//     preco = 0.3;
//     break;
//   case "Pêra":
//     preco = 5.5;
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5;
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco);
// a)RESPOSTA: Passa o valor das frutas selecionadas
// b)RESPOSTA: preço 2,25
// c)RESPOSTA: passaria o valor do default de 5 reais a fruta

// 3)
// const numero = Number(prompt("Digite o primeiro número."));

// if (numero > 0) {
//   console.log("Esse número passou no teste");
//   let mensagem = "Essa mensagem é secreta!!!";
// }

// console.log(mensagem);
// a) RESPOSTA: Solicitando ao usuário um número
// b) RESPOSTA: Sendo 10 apareceria a mensagem de passou no teste, já o -10 não teria resposta
// c) RESPOSTA: Aparecerá um erro ao tentar imprimir a mensagem

//----------------------------------------------------------------
// Exercícios de escrita de código
// 1)
const idadeUsuario = Number(prompt(`Qual a sua idade? `));
if (idadeUsuario >= 18) {
  console.log(`Você pode dirigir.`);
} else {
  console.log(`Você não pode dirigir.`);
}

// 2)
const horarioDeEstudo = prompt(
  `Qual o horário que você estuda? Sendo M (matutino), V (Vespertino) e N (Noturno) `
).toUpperCase();

if (horarioDeEstudo === `M`) {
  console.log(`Bom dia`);
} else if (horarioDeEstudo === `V`) {
  console.log(`Boa tarde`);
} else if (horarioDeEstudo === `N`) {
  console.log(`Boa noite`);
} else {
  console.log(`Horário não identificado`);
}

// 3)
const horarioDeEstudo = prompt(
  `Qual o horário que você estuda? Sendo M (matutino), V (Vespertino) e N (Noturno) `
).toUpperCase();

switch (horarioDeEstudo) {
  case `M`:
    console.log(`Bom dia`);
    break;
  case `V`:
    console.log(`Boa tarde`);
    break;
  case `N`:
    console.log(`Boa noite`);
    break;
  default:
    console.log(`Horário não identificado`);
    break;
}

// 4)
const generoFilme = prompt(`Qual o genero do filme?`).toLowerCase();
const valorIngresso = Number(prompt(`Qual o valor do ingresso?`));

if (generoFilme === `fantasia` && valorIngresso < 15) {
  console.log(`Bom filme`);
} else {
  console.log(`Escolha outro filme :(`);
}

//----------------------------------------------------------------

DESAFIO;
// 1)
const generoFilme = prompt(`Qual o genero do filme?`).toLowerCase();
const valorIngresso = Number(prompt(`Qual o valor do ingresso?`));

if (generoFilme === `fantasia` && valorIngresso < 15) {
  const lanchinho = prompt(`Qual lanche vai querer para acompanhar o filme?`);
  console.log(`Bom filme e aproveite seu ${lanchinho}`);
} else {
  console.log(`Escolha outro filme :(`);
}

// 2)
