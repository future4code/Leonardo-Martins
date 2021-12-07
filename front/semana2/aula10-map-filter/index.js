// Exercícios de interpretação de código
// 1
// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" },
// ];

// const novoArrayA = usuarios.map((item, index, array) => {
//   console.log(item, index, array);
// });
// RESPOSTA: Imprime o nome e apelido dos usuarios

// 2
// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" },
// ];

// const novoArrayB = usuarios.map((item, index, array) => {
//   return item.nome;
// });

// console.log(novoArrayB);
// RESPOSTA: Imprime só o nome dos usuários

// 3
// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" },
// ];

// const novoArrayC = usuarios.filter((item, index, array) => {
//   return item.apelido !== "Chijo";
// });

// console.log(novoArrayC);
// RESPOSTA: Imprime os nomes e apelidos diferentes de Chijo

// Exercícios de escrita de código

// 1)
const pets = [
  { nome: "Lupin", raca: "Salsicha" },
  { nome: "Polly", raca: "Lhasa Apso" },
  { nome: "Madame", raca: "Poodle" },
  { nome: "Quentinho", raca: "Salsicha" },
  { nome: "Fluffy", raca: "Poodle" },
  { nome: "Caramelo", raca: "Vira-lata" },
];
// a)
function nomeCachorros(nomes, i, array) {
  return nomes.nome;
}

const nomesDosCachorros = pets.map(nomeCachorros);
console.log(nomesDosCachorros);

// b)

const tipoDeCachorro = pets.filter((tipo, i, array) => {
  return tipo.raca === `Salsicha`;
});
console.log(tipoDeCachorro);

// c)
const cachorroPoodle = pets.filter((pets) => pets.raca === `Poodle`);
const promocaoParaPoodle = cachorroPoodle.map((pet) => pet.nome);
console.log(promocaoParaPoodle);
console.log(
  `Você ganhou um cupom de desconto de 10% para tosar o/a ${promocaoParaPoodle[0]}`
);
console.log(
  `Você ganhou um cupom de desconto de 10% para tosar o/a ${promocaoParaPoodle[1]}`
);

// 2)
const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.3 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.8 },
];

// a)
function nomeProdutos(nomeProd, i, array) {
  return nomeProd.nome;
}
const nomeDosProdutos = produtos.map(nomeProdutos);
console.log(nomeDosProdutos);

// b)
const produtosComDesconto = produtos.map((produto) => {
  const nome = produto.nome;
  const preco = (produto.preco * 0.95).toFixed(2);
  console.log(`Nome: ${nome}, Preço: ${preco}`);
});

// c)
const categoriaBebidas = produtos.filter((tipo, i, array) => {
  return tipo.categoria === `Bebidas`;
});
console.log(categoriaBebidas);

// d)
const produtosComYpe = produtos.filter((item, i, array) => {
  return item.nome.includes("Ypê");
});

console.log(produtosComYpe);

// e)
const produtosYpe = produtos.filter((item, i, array) => {
  return item.nome.includes("Ypê");
});
const produtoYpeSemCategoria = produtos.map((produto) => {
  const nome = produto.nome;
  const preco = produto.preco;
  console.log(`Nome: ${nome}, Preço: ${preco}`);
});
