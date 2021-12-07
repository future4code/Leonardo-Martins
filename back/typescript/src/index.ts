// 1)
// a)
// let minhaString: string = 2
// Não aceita porque número não é string, só aceita se estiver entre aspas

// b)
// let minhaString2: number = 2
// Temos que colocar "| string" junto com o
//number para aceitar tanto números quanto strings

// c)
const pessoas: Pessoa[] = [];

type Pessoa = {
  nome: string;
  idade: number;
  corFavorita: string;
};

const pessoa1: Pessoa = {
  nome: "Leonardo",
  idade: 25,
  corFavorita: "Azul",
};
const pessoa2: Pessoa = {
  nome: "João",
  idade: 20,
  corFavorita: "Amarelo",
};
const pessoa3: Pessoa = {
  nome: "Maria",
  idade: 30,
  corFavorita: "Verde",
};

pessoas.push(pessoa1);
pessoas.push(pessoa2);
pessoas.push(pessoa3);

// d)

enum Cor {
  AZUL = "azul",
  AMARELO = "amarelo",
  VERDE = "verde",
  VERMELHO = "vermelho",
}
type Pessoas = {
  nome: string;
  idade: number;
  corFavorita: string;
};
const pessoas1: Pessoa = {
  nome: "Leonardo",
  idade: 25,
  corFavorita: Cor.AZUL,
};
const pessoas2: Pessoa = {
  nome: "João",
  idade: 20,
  corFavorita: Cor.AMARELO,
};
const pessoas3: Pessoa = {
  nome: "Maria",
  idade: 30,
  corFavorita: Cor.VERDE,
};

// 2)
let meuArray: string[] = ["a", "b", "c"];

type Estatisticas = {
  maior: number;
  menor: number;
  media: number;
};

function obterEstatisticas(numeros: number[]): Estatisticas {
  const numerosOrdenados = numeros.sort((a, b) => a - b);

  let soma = 0;

  for (let num of numeros) {
    soma += num;
  }

  const estatisticas = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length,
  };

  return estatisticas;
}
obterEstatisticas([]);

// c)
// type AmostraDeIdades = {
//   numeros: number[],
//   obterEstatisticas(numeros: number[]) => Estatisticas
// }

// 3)
type Posts = {
  autor: string;
  texto: string;
};

const redeSocial: Posts[] = [];

const posts1 = {
  autor: "Alvo Dumbledore",
  texto: "Não vale a pena viver sonhando e se esquecer de viver",
};
const posts2 = {
  autor: "Severo Snape",
  texto: "Menos 10 pontos para Grifinória!",
};
const posts3 = {
  autor: "Hermione Granger",
  texto: "É levi-ô-sa, não levio-sá!",
};
const posts4 = {
  autor: "Dobby",
  texto: "Dobby é um elfo livre!",
};
const posts5 = {
  autor: "Lord Voldemort",
  texto: "Avada Kedavra!",
};

redeSocial.push(posts1);
redeSocial.push(posts2);
redeSocial.push(posts3);
redeSocial.push(posts4);
redeSocial.push(posts5);

// function buscarPostsPorAutor(redeSocial, Posts) {
//   return redeSocial.filter(
//     (redeSocial) => {
//       return redeSocial.autor === autorInformado
//     }
//   )
// }

// 4)
// a)
type Pokemon = {
  name: string;
  types: string;
  healthPoints: number;
};
const poke: Pokemon[] = [];

const pokemon1 = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28,
};

const pokemon2 = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31,
};

const pokemon3 = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35,
};

poke.push(pokemon1);
poke.push(pokemon2);
poke.push(pokemon3);

// b) O código precisa estar dentro de um src para não dar conflito com as informações do config
