const calculo = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

const calcular = () => {
  switch (calculo) {
    case "add":
      console.log(`A resposta da adição é ${num1 + num2}`);
      break;

    case "sub":
      console.log(`A resposta da subtração é ${num1 - num2}`);
      break;

    case "mult":
      console.log(`A resposta da multiplicação é ${num1 * num2}`);
      break;

    case "div":
      console.log(`A resposta da divisão é ${num1 / num2}`);
      break;

    default:
      console.log("Erro");
      break;
  }
};

calcular();
