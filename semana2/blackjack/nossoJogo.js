console.log(`Bem vindo(a) ao jogo de Blackjack!`.toUpperCase());

const blackjack = confirm(
  `Bem vindo(a) ao jogo de Blackjack! \n Quer iniciar uma nova rodada?`
);
function comprarCarta() {
  const cartas = [
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `10`,
    `J`,
    `Q`,
    `K`,
    `A`,
  ];
  const naipes = [` ♦️`, ` ♥️`, ` ♣️`, ` ♠️`];
  const numero = cartas[Math.floor(Math.random() * 13)];

  const naipe = naipes[Math.floor(Math.random() * 4)];

  let valorCarta;

  if (numero === `J` || numero === `Q` || numero === `K`) {
    valorCarta = 10;
  } else if (numero === `A`) {
    valorCarta = 11;
  } else {
    valorCarta = Number(numero);
  }

  const carta = {
    texto: numero + naipe,
    valorDasCartas: valorCarta,
  };
  return carta;
}

if (blackjack) {
  const primeiraCartaDesafiante = comprarCarta();
  const segundaCartaDesafiante = comprarCarta();
  const primeiraCartaComputador = comprarCarta();
  const segundaCartaComputador = comprarCarta();
  // const maisCartas = comprarCarta();

  const cartasDesafiante =
    primeiraCartaDesafiante.valorDasCartas +
    segundaCartaDesafiante.valorDasCartas;

  const cartasComputador =
    primeiraCartaComputador.valorDasCartas +
    segundaCartaComputador.valorDasCartas;
  // const maisUmaCarta = maisCartas.valorDasCartas;

  console.log(
    `Desafiante: ${primeiraCartaDesafiante.texto} ${segundaCartaDesafiante.texto}, total: ${cartasDesafiante}`
  );
  alert(
    `Desafiante: ${primeiraCartaDesafiante.texto} ${segundaCartaDesafiante.texto}, total: ${cartasDesafiante}`
  );
  // const maisCarta = confirm(`Essas são as suas cartas, deseja comprar mais uma?`)
  // if (condition) {

  // }
  console.log(
    `Computador: ${primeiraCartaComputador.texto} ${segundaCartaComputador.texto}, total: ${cartasComputador}`
  );
  alert(
    `Computador: ${primeiraCartaComputador.texto} ${segundaCartaComputador.texto}, total: ${cartasComputador}`
  );

  if (cartasDesafiante > cartasComputador) {
    console.log(`O desafiante GANHOU`);
    alert(`O desafiante GANHOU \n\n\nfim de jogo`.toUpperCase());
  } else if (cartasDesafiante < cartasComputador) {
    console.log(`O desafiante PERDEU`);
    alert(`O desafiante PERDEU \n\n\nfim de jogo`.toUpperCase());
  } else {
    console.log(`O jogo EMPATOU`.toUpperCase());
    alert(`O jogo EMPATOU \n\n\nfim de jogo`);
  }
  console.log(`fim de jogo`.toUpperCase());
} else {
  console.log(`fim de jogo`);
  alert(`fim de jogo`.toUpperCase());
}
