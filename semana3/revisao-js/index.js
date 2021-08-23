//////////////////// Exercício 1 ////////////////////////
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2 = [50, 30, 45, 10, 13, 29];
function tamanhoArray() {
  tamanhoDoArray = array.length;
  return tamanhoDoArray;
}
console.log(tamanhoArray());

//////////////////// Exercício 2 ////////////////////////

function arrayInvertido() {
  return array.reverse();
}
console.log(arrayInvertido());

//////////////////// Exercício 3 ////////////////////////

function arrayCrescente() {
  return array2.sort();
}
console.log(arrayCrescente());

//////////////////// Exercício 4 ////////////////////////

function arrayPares() {
  const numerosPares = array.filter((array) => array % 2 === 0);
  return numerosPares;
}
console.log(arrayPares());

//////////////////// Exercício 5 ////////////////////////

function numerosElevados() {
  return arrayPares().map((numero) => Math.pow(numero, 2));
}
console.log(numerosElevados());

//////////////////// Exercício 6 ////////////////////////

let maior = -Infinity;

for (let arrayMaior of array2) {
  if (arrayMaior > maior) {
    maior = arrayMaior;
  }
}
frase = `O maior número é ${maior}`;

console.log(frase);

//////////////////// Exercício 7 ////////////////////////

num1 = 15;
num2 = 30;
function doisNumeros() {
  if (num1 > num2) {
    console.log(`Maior número é: ${num1}`);
    if (num1 % num2 === 0) {
      console.log(`O número 1 é divisível pelo número 2? ${num1 % num2 === 0}`);
      if (`A diferença entre os números é de: ${num1 - num2}`) {
      }
    }
  } else if (num2 > num1) {
    console.log(`Maior número é: ${num2}`);
    if (num2 % num1 === 0) {
      console.log(`O número 2 é divisível pelo número 1? ${num2 % num1 === 0}`);
      if (num2 - num1) {
        console.log(`A diferença entre os números é de: ${num2 - num1}`);
      }
    }
  }
}
doisNumeros();

//////////////////// Exercício 8 ////////////////////////

function nPares(n) {
  return arrayPares().slice(0, n);
}
console.log(nPares(3));
console.log(nPares(5));

////////////////// Exercício 9 ////////////////////////
const ladoA = 10;
const ladoB = 20;
const ladoC = 50;

function tipoDeTriangulo() {
  if (ladoA === ladoB && ladoB === ladoC && ladoA === ladoC) {
    console.log(`É um triangulo EQUILÁTERO`);
  } else if (ladoA === ladoB && ladoB !== ladoC && ladoA !== ladoC) {
    console.log(`É um triangulo ISÓSCELES`);
  } else if (ladoA !== ladoB && ladoB !== ladoC && ladoA === ladoC) {
    console.log(`É um triangulo ISÓSCELES`);
  } else if (ladoA !== ladoB && ladoB === ladoC && ladoA !== ladoC) {
    console.log(`É um triangulo ISÓSCELES`);
  } else {
    console.log(`É um trinagulo ESCALENO`);
  }
}
tipoDeTriangulo();
//////////////////// Exercício 10 ////////////////////////

let maiorNum = -Infinity;
let menorNum = +Infinity;
novoArray = [];

for (let arrayMaiorNumero of array2) {
  if (arrayMaiorNumero > maiorNum) {
    maiorNum = arrayMaiorNumero;
  }
}
for (let arrayMenorNumero of array2) {
  if (arrayMenorNumero < menorNum) {
    menorNum = arrayMenorNumero;
  }
}
novoArray = ` ${maiorNum}, ${menorNum}`;

console.log(novoArray);

//////////////////// Exercício 11 ////////////////////////

function filmes() {
  const filme = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: [
      "Meryl Streep",
      " Anne Hathaway",
      " Emily Blunt",
      " Stanley Tucci",
    ],
  };
  frase = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}.`;
  return frase;
}
console.log(filmes());

//////////////////// Exercício 12 ////////////////////////

function dadosPessoais() {
  dados = {
    nome: "Astrodev",
    idade: 25,
    email: "astrodev@labenu.com.br",
    endereco: "Rua do Futuro, 4",
  };

  novosDados = {
    ...dados,
    nome: `ANÔNIMO`,
  };
  return novosDados;
}
console.log(dadosPessoais());

//////////////////// Exercício 13 ////////////////////////

pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8 },
  { nome: "João", idade: 20, altura: 1.3 },
  { nome: "Pedro", idade: 15, altura: 1.9 },
  { nome: "Luciano", idade: 22, altura: 1.8 },
  { nome: "Artur", idade: 10, altura: 1.2 },
  { nome: "Soter", idade: 70, altura: 1.9 },
];
// a)

const pessoasComPermissao = pessoas.filter((dados) => {
  return dados.altura > 1.5 && dados.idade > 14 && dados.idade < 60;
});
console.log(pessoasComPermissao);

// b)

const pessoasSemPermissao = pessoas.filter((dados) => {
  return dados.altura < 1.5 || dados.idade < 14 || dados.idade > 60;
});
console.log(pessoasSemPermissao);

//////////////////// Exercício 14 ////////////////////////

const banco = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] },
];

function saldoDosClientes() {
  const clientesSaida = banco.map((cliente) => {
    if (cliente.compras.length) {
      const comprasTotal = cliente.compras.reduce(
        (total, valor) => total + valor
      );
      cliente.saldoTotal = cliente.saldoTotal - comprasTotal;
      cliente.compras = [];
    }
    return cliente;
  });
  return clientesSaida;
}
console.log(saldoDosClientes());

//////////////////// Exercício 15 ////////////////////////

const clientesEscritorio = [
  { nome: "João", dataDaConsulta: "01/10/2021" },
  { nome: "Pedro", dataDaConsulta: "02/07/2021" },
  { nome: "Paula", dataDaConsulta: "03/11/2021" },
  { nome: "Márcia", dataDaConsulta: "04/05/2021" },
];

function clientesOrdemAlfabetica() {
  return clientesEscritorio.sort((a, b) => {
    const nomeA = a.nome.toLowerCase();
    const nomeB = b.nome.toLowerCase();
    return nomeA < nomeB ? -1 : nomeA > nomeB ? 1 : 0;
  });
}
console.log(clientesOrdemAlfabetica());
