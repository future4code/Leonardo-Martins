//////////////////// Exercício 1 ////////////////////////
const array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2 = [50, 30, 45, 10, 13, 29];
function tamanhoArray(array) {
  return array.length;
}
console.log(tamanhoArray(array1));

//////////////////// Exercício 2 ////////////////////////

function arrayInvertido(array) {
  return array.reverse();
}
console.log(arrayInvertido(array1));

//////////////////// Exercício 3 ////////////////////////

function arrayCrescente(array) {
  return array.sort();
}
console.log(arrayCrescente(array2));

//////////////////// Exercício 4 ////////////////////////

function arrayPares(array) {
  return array.filter((array) => array % 2 === 0);
}
console.log(arrayPares(array1));

//////////////////// Exercício 5 ////////////////////////

function numerosElevados(array) {
  return arrayPares(array).map((numero) => Math.pow(numero, 2));
}
console.log(numerosElevados(array1));

//////////////////// Exercício 6 ////////////////////////

function maiorNumero(array) {
  let maior = array[0];
  for (i = 1; i < array.length; i++) {
    if (array[i] > maior) maior = array[i];
  }
  return maior;
}
console.log(maiorNumero(array1));

//////////////////// Exercício 7 ////////////////////////

function doisNumeros(a, b) {
  const numerosOrdenados = arrayCrescente([a, b]);
  return {
    maiorNumero: numerosOrdenados[1],
    maiorDivisivelMenor: numerosOrdenados[1] % numerosOrdenados[0] === 0,
    doferenca: numerosOrdenados[1] - numerosOrdenados[0],
  };
}
console.log(doisNumeros(15, 30));

//////////////////// Exercício 8 ////////////////////////

function nPares(array, n) {
  return arrayPares(array).slice(0, n);
}
console.log(nPares(array1, 3));
console.log(nPares(array1, 5));

////////////////// Exercício 9 ////////////////////////

function tipoDeTriangulo(a, b, c) {
  if (a === b && b === c) {
    return "É um triangulo EQUILÁTERO";
  } else if (a !== b && b !== c && a !== c) {
    return "É um triangulo ESCALENO";
  } else {
    return "É um trinagulo ISÓSCELES";
  }
}
console.log(tipoDeTriangulo(20, 10, 30));
//////////////////// Exercício 10 ////////////////////////

function segundoMaiorEMenor(array) {
  const arrayOrdenada = arrayCrescente(array);
  return [arrayOrdenada.slice(-2)[0], arrayOrdenada[1]];
}
console.log(segundoMaiorEMenor(array2));
//////////////////// Exercício 11 ////////////////////////
const filmeExemplo = {
  nome: "O Diabo Veste Prada",
  ano: 2006,
  diretor: "David Frankel",
  atores: ["Meryl Streep", " Anne Hathaway", " Emily Blunt", " Stanley Tucci"],
};

function filmeEmCartaz(filme) {
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}.`;
}
console.log(filmeEmCartaz(filmeExemplo));

//////////////////// Exercício 12 ////////////////////////

const dadosExemplo = {
  nome: "Astrodev",
  idade: 25,
  email: "astrodev@labenu.com.br",
  endereco: "Rua do Futuro, 4",
};

function dadosPessoais(dados) {
  return {
    ...dados,
    nome: "ANÔNIMO",
  };
}
console.log(dadosPessoais(dadosExemplo));

//////////////////// Exercício 13 ////////////////////////

const pessoasArray = [
  { nome: "Paula", idade: 12, altura: 1.8 },
  { nome: "João", idade: 20, altura: 1.3 },
  { nome: "Pedro", idade: 15, altura: 1.9 },
  { nome: "Luciano", idade: 22, altura: 1.8 },
  { nome: "Artur", idade: 10, altura: 1.2 },
  { nome: "Soter", idade: 70, altura: 1.9 },
];
// a)

function pessoasComPermissao(pessoas) {
  return pessoas.filter((dados) => {
    return dados.altura > 1.5 && dados.idade > 14 && dados.idade < 60;
  });
}
console.log(pessoasComPermissao(pessoasArray));

// b)

function pessoasSemPermissao(pessoas) {
  return pessoas.filter((dados) => {
    return dados.altura < 1.5 || dados.idade < 14 || dados.idade > 60;
  });
}
console.log(pessoasSemPermissao(pessoasArray));

//////////////////// Exercício 14 ////////////////////////

const bancoArray = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] },
];

function saldoDosClientes(banco) {
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
console.log(saldoDosClientes(bancoArray));

//////////////////// Exercício 15 ////////////////////////

const clientesEscritorio = [
  { nome: "João", dataDaConsulta: "01/10/2021" },
  { nome: "Pedro", dataDaConsulta: "02/07/2021" },
  { nome: "Paula", dataDaConsulta: "03/11/2021" },
  { nome: "Márcia", dataDaConsulta: "04/05/2021" },
];

function clientesOrdemAlfabetica(clientes) {
  return clientes.sort((a, b) => {
    const nomeA = a.nome.toLowerCase();
    const nomeB = b.nome.toLowerCase();
    return nomeA < nomeB ? -1 : nomeA > nomeB ? 1 : 0;
  });
}
console.log(clientesOrdemAlfabetica(clientesEscritorio));
