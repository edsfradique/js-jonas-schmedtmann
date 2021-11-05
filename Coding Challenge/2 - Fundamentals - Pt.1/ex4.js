// Steven quer construir uma calculadora de dicas muito simples para quando ele for comer em um
// restaurante. Em seu país, costuma-se dar gorjeta de 15% se o valor da conta estiver entre 50 e
// 300. Se o valor for diferente, a gorjeta é 20%.

// Calcule a gorjeta, dependendo do valor da fatura. Crie uma variável chamada 'dica' para
// isto. Não é permitido usar uma instrução if / else   (se for mais fácil para você, você pode
// comece com uma instrução if / else e, em seguida, tente convertê-la em uma instrução ternária
// operador!)

// Imprima uma string no console contendo o valor da conta, a gorjeta e o valor final
// (conta + gorjeta). Exemplo: “A conta foi 275, a gorjeta foi 41,25 e o valor total
// 316,25 ”

// Dados 1: Teste para os valores de fatura 275, 40 e 430

// § Para calcular 20% de um valor, basta multiplicá-lo por 20/100 = 0,2
// § O valor X está entre 50 e 300, se for> = 50 && <= 300

const fatura = 275;
// const fatura = 40;
// const fatura = 430;

// const total =
//   fatura >= 50 && fatura <= 300
//     ? `A conta foi ${fatura}, a gorjeta foi de ${
//         fatura * 0.15
//       } e o valor final foi de ${fatura + fatura * 0.15}`
//     : `A conta foi ${fatura}, a gorjeta foi de ${
//         fatura * 0.2
//       } e o valor final foi de ${fatura + fatura * 0.2}`;

// console.log(total);

const gorjeta = fatura >= 50 && fatura <= 300 ? fatura * 0.15 : fatura * 0.2;
console.log(
  `A conta foi ${fatura}, a gorjeta foi de ${gorjeta} e o valor total foi de ${
    fatura + gorjeta
  }`
);
