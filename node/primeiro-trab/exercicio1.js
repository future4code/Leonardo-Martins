// a) Responda como comentário no seu código:
//  como fazemos para acessar os parâmetros
//  passados na linha de comando para o Node?

// b)

const nome = process.argv[2];
const idade = process.argv[3];
console.log(`Olá, ${nome}! Você tem ${idade} anos.`);

// c)
const idadeEm7Anos = Number(idade) + 7;
console.log(
  `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idadeEm7Anos}`
);
