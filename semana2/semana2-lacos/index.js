// Exercícios de interpretação de código

// 1)
// let valor = 0;
// for (let i = 0; i < 5; i++) {
//   valor += i;
// }
// console.log(valor);
// Resposta = 10 - que é a soma de 0+1+2+3+4

// 2)
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30];
// for (let numero of lista) {
//   if (numero > 18) {
//     console.log(numero);
//   }
// }
// Resposta
// a) 19, 21, 23, 25, 27, 30
// b) O código ja passa por todos os números, mas se quisesse acessar um específico, precisaria colocar lista[i]

// 3)
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "));
// let quantidadeAtual = 0;
// while (quantidadeAtual < quantidadeTotal) {
//   let linha = "";
//   for (let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++) {
//     linha += "*";
//   }
//   console.log(linha);
//   quantidadeAtual++;
// }
// Resposta = Imprime *, **, ***, ****

//-------------------------------------------------------------------------------------------------------------

// // Exercícios de escrita de código

// // 1)
// const animaisDoUsuario = [];
// let animalEstimacaoUsuario = Number(
//   prompt(`Quantos animais de estimação você tem?`)
// );
// if (animalEstimacaoUsuario === 0) {
//   console.log(`Que pena! Voce pode adotar um pet!`);
// }
// for (let i = 0; i < animalEstimacaoUsuario; i++) {
//   nomeAnimal = prompt(`Qual o nome?`);
//   animaisDoUsuario.push(nomeAnimal);
//   console.log(nomeAnimal);
// }

// console.log(animaisDoUsuario);

// // 2)
// // a)
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
// function imprimirArray() {
//   console.log(arrayOriginal);
// }
// imprimirArray();

// //b)
// function arrayDivididoPorDez() {
//   for (let numeroDividido of arrayOriginal) console.log(numeroDividido / 10);
// }
// arrayDivididoPorDez();

// c)
let numeroPar = [];
function arrayPares() {
  for (let numero of arrayOriginal) {
    if (numero % 2 === 0) {
      numeroPar.push(numero);
    }
  }
  console.log(numeroPar);
}
arrayPares();

// //d)
// function arrayIndex() {
//   for (let indiceDoArray of arrayOriginal) {
//     console.log(
//       `O elemento do index ${arrayOriginal.indexOf(
//         indiceDoArray
//       )} é ${indiceDoArray}`
//     );
//   }
// }
// arrayIndex();

// // e)
// function devolveMaior(arrayOriginal) {
//   let maior = 0;
//   for (let i = 0; i < arrayOriginal.length; i++) {
//     if (arrayOriginal[i] > maior) {
//       maior = arrayOriginal[i];
//       valorMaximo = maior;
//     }
//   }
//   return `O maior número é ${maior}`;
// }
// const maiorNumeroDoArray = devolveMaior(arrayOriginal);
// console.log(maiorNumeroDoArray);

// function devolveMenor(arrayOriginal) {
//   let menor = valorMaximo;
//   for (let i = 0; i < arrayOriginal.length; i++) {
//     if (arrayOriginal[i] < menor) {
//       menor = arrayOriginal[i];
//     }
//   }
//   return `O menor número é ${menor}`;
// }
// const menorNumeroDoArray = devolveMenor(arrayOriginal);
// console.log(menorNumeroDoArray);
