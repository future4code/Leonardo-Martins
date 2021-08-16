// Exercícios de interpretação de código

// 1)
// const filme = {
//   nome: "Auto da Compadecida",
//   ano: 2000,
//   elenco: [
//     "Matheus Nachtergaele",
//     "Selton Mello",
//     "Denise Fraga",
//     "Virginia Cavendish",
//   ],
//   transmissoesHoje: [
//     { canal: "Telecine", horario: "21h" },
//     { canal: "Canal Brasil", horario: "19h" },
//     { canal: "Globo", horario: "14h" },
//   ],
// };

// console.log(filme.elenco[0]);
// console.log(filme.elenco[filme.elenco.length - 1]);
// console.log(filme.transmissoesHoje[2]);
// Resposta: Matheus Nachtergaele
// Resposta: Virginia Cavendish
// Resposta: Globo 14h

// 2)
// const cachorro = {
//   nome: "Juca",
//   idade: 3,
//   raca: "SRD",
// };

// const gato = { ...cachorro, nome: "Juba" };

// const tartaruga = { ...gato, nome: gato.nome.replaceAll("a", "o") };

// console.log(cachorro);
// console.log(gato);
// console.log(tartaruga);
// A)
// Resposta: Juca, 3, SRD
// Resposta: Juba
// Resposta: Jubo
// B) Acrescenta a mundança a partir do ponto que vem depois dos ...

// 3)
// function minhaFuncao(objeto, propriedade) {
//   return objeto[propriedade];
// }

// const pessoa = {
//   nome: "Caio",
//   idade: 23,
//   backender: false,
// };

// console.log(minhaFuncao(pessoa, "backender"));
// console.log(minhaFuncao(pessoa, "altura"));
// A)
// Resposta: false
// Resposta: undefined
// B) Undefined apareceu porque nao tem altura dentro do objeto

//-------------------------------------------------------------------------

// Exercícios de escrita de código

// 1)
// a)
const pessoa = {
  nome: `Pedro Geromel`,
  apelido: [`Geromito`, `Geromel`, `Gerodeus`],
};
const frase = `O nome do zagueiro do Grêmio é ${pessoa.nome}, mas pode ser chamado de ${pessoa.apelido[0]}, ${pessoa.apelido[1]} e ${pessoa.apelido[2]}`;
console.log(frase);

// b)
const novosApelidos = {
  ...pessoa,
  nome: `Pedro Geromel`,
  apelidosNovos: [`Gerohummels`, `Geromonstro`, `Agostinho`],
};
const frase2 = `O nome do zagueiro do Grêmio é ${novosApelidos.nome}, mas também pode ser chamado de ${novosApelidos.apelido[0]}, ${novosApelidos.apelido[1]} e ${novosApelidos.apelido[2]}`;
console.log(frase2);

// 2)
dadosPessoa2 = [];
dadosPessoa3 = [];
const pessoa2 = {
  nome: `Leonardo`,
  idade: 24,
  profissao: `estudante`,
};
const pessoa3 = {
  nome: `Mônica Rizzi`,
  idade: 24,
  profissao: `Advogada`,
};

function minhaFuncao() {
  dadosPessoa2.push(
    pessoa2.nome,
    pessoa2.nome.length,
    pessoa2.idade,
    pessoa2.profissao,
    pessoa2.profissao.length
  );
  return dadosPessoa2;
}
minhaFuncao();
console.log(dadosPessoa2);
function minhaFuncao2() {
  dadosPessoa3.push(
    pessoa3.nome,
    pessoa3.nome.length,
    pessoa3.idade,
    pessoa3.profissao,
    pessoa3.profissao.length
  );
  return dadosPessoa3;
}
minhaFuncao2();
console.log(dadosPessoa3);

// 3)
// a)
const carrinho = [];
// b)
const sacolao = [
  { nome: `Banana`, disponivel: true },
  { nome: `Maça`, disponivel: true },
  { nome: `Abacaxi`, disponivel: true },
];
// c)
function compras() {
  carrinho.push(sacolao[0]);
  carrinho.push(sacolao[1]);
  carrinho.push(sacolao[2]);
  return carrinho;
}
compras();

// d)
console.log(carrinho);

//-----------------------------------------------------------------
//---------------------------- DESAFIO -----------------------

// 1)

// 2)
const filme1 = {
  ano: 2019,
  nome: `Vingadores: Ultimado`,
};
const filme2 = {
  ano: 2012,
  nome: `Vingadores: `,
};

antes = filme1.ano < filme2.ano;
mesmoAno = filme1.ano === filme2.ano;
depois = filme1.ano > filme2.ano;

const frase1 = `O primeiro filme foi lançado antes do segundo filme? ${antes}`;
const frase2 = `O primeiro filme foi lançado no mesmo ano do segundo filme? ${mesmoAno}`;
const frase3 = `O primeiro filme foi lançado depois do segundo filme? ${depois}`;
console.log(frase1);
console.log(frase2);
console.log(frase3);
