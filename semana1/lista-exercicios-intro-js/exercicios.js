// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2;
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt("Digite uma mensagem!");

  console.log(mensagem);
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// // EXERCÍCIO 01
// function calculaAreaRetangulo(altura, largura) {
//   altura = Number(prompt(`Qual a altura do retangulo?`));
//   largura = Number(prompt(`Qual a largura do retangulo?`));
//   area = altura * largura;
//   console.log(area);
// }

// calculaAreaRetangulo();

// // EXERCÍCIO 02
// function imprimeIdade(anoAtual, anoNascimento) {
//   anoAtual = Number(prompt(`qual o ano atual?`));
//   anoNascimento = Number(prompt(`Em que ano você nasceu?`));
//   idade = anoAtual - anoNascimento;
//   console.log(idade);
// }
// imprimeIdade();

// // EXERCÍCIO 03
// function calculaIMC(peso, altura) {
//   peso = Number(prompt(`Qual seu peso em kg?`));
//   altura = Number(prompt(`Qual sua altura?`));
//   imc = peso / (altura * altura);
//   console.log(imc);
//   return imc;
// }
// calculaIMC();
// // EXERCÍCIO 04
// function imprimeInformacoesUsuario() {
//   nome = prompt(`Qual seu nome?`);
//   idade = prompt(`Qual sua idade?`);
//   email = prompt(`Qual seu email?`);
//   console.log(
//     `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
//   );
// }
// imprimeInformacoesUsuario();

// // EXERCÍCIO 05
// function imprimeTresCoresFavoritas() {
//   cor1 = prompt(`Qual suas três cores favoritas?`);
//   cor2 = prompt(`Qual suas três cores favoritas?`);
//   cor3 = prompt(`Qual suas três cores favoritas?`);
//   coresFavoritas = [cor1, cor2, cor3];
//   console.log(coresFavoritas);
// }
// imprimeTresCoresFavoritas;

// // EXERCÍCIO 06
// function retornaStringEmMaiuscula(string) {
//   string = prompt(`escreva uma frase: `).toUpperCase();
//   console.log(string);
//   return string;
// }
// retornaStringEmMaiuscula();

// // EXERCÍCIO 07
// function calculaIngressosEspetaculo(custo, valorIngresso) {
//   semPreju = custo / valorIngresso;
//   console.log(semPreju);
//   return semPreju;
// }
// calculaIngressosEspetaculo();

// // EXERCÍCIO 08
// function checaStringsMesmoTamanho(string1, string2) {
//   string1 = prompt(`Digite uma frase: `).length;
//   string2 = prompt(`Digite uma frase: `).length;
//   tamanho = string1 === string2;
//   console.log(tamanho);
//   return tamanho;
// }
// checaStringsMesmoTamanho();
// // EXERCÍCIO 09 (ERRO)
// function retornaPrimeiroElemento(array) {
//   array = prompt();
//   console.log(array[1]);
//   return array;
// }
// retornaPrimeiroElemento();

// // EXERCÍCIO 10
// function retornaUltimoElemento(array) {
//   ultimoArray = array[array.length - 1];
//   return ultimoArray;
//   console.log(ultimoArray);
// }
// retornaUltimoElemento();

// // EXERCÍCIO 11
// function trocaPrimeiroEUltimo(array) {
//   primeiroArray = array[0];
//   ultimoArray = array[array.length - 1];
//   array.splice(0, 1);
//   array.pop();
//   array.push(primeiroArray);
//   array.unshift(ultimoArray);
//   return array;
//   console.log(array);
// }
// trocaPrimeiroEUltimo();

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  string1Minuscula = string1.toLowerCase();
  string2Minuscula = string2.toLowerCase();
  stringIguais = string1Minuscula === string2Minuscula;
  console.log(stringIguais);
  return stringIguais;
}
checaIgualdadeDesconsiderandoCase();

// -------

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
}
