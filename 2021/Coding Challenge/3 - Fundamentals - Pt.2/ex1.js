// De volta às duas equipes de ginástica, os Golfinhos e os Coalas! Há um novo
// disciplina de ginástica, que funciona de forma diferente.
// Cada equipe compete 3 vezes e, em seguida, a média das 3 pontuações é calculada (então
// uma pontuação média por equipe).
// Uma equipe só vence se tiver pelo menos o dobro da pontuação média da outra equipe.
// Caso contrário, nenhuma equipe ganha!

// Crie uma função de seta 'calcA Average' para calcular a média de 3 pontuações

// Crie uma função 'checkWinner' que leva a pontuação média de cada equipe
// como parâmetros ('avgDolhins' e 'avgKoalas') e, em seguida, registra o vencedor
// para o console, juntamente com os pontos de vitória, de acordo com a regra acima.
// Exemplo: "Coalas ganham (30 contra 13)"

// Use a função 'checkWinner' para determinar o vencedor para os dados 1 e
// Dados 2
// Ignore os empates desta vez

// Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// Para calcular a média de 3 valores, some-os e divida por 3
// Para verificar se o número A é pelo menos o dobro do número B, verifique se A> = 2 * B.
// Aplique isso às pontuações médias da equipe

// const calcAverage = (a, b, c, d, e, f) => {
//   const avgDolhins = (a + b + c) / 3;
//   const avgKoalas = (d + e + f) / 3;
//   return checkWinner(avgDolhins, avgKoalas);
// };

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2) {
//     return `Dolphins venceram (${avgDolphins} contra ${avgKoalas})`;
//   } else if (avgKoalas >= avgDolphins * 2) {
//     return `Koalas vencenram (${avgKoalas} contra ${avgDolphins})`;
//   } else {
//     return 'Ninguém venceu';
//   }
// };

// console.log(calcAverage(85, 54, 41, 23, 34, 27));
// console.log(calcAverage(44, 23, 71, 65, 54, 49));

const calcAverage = (a, b, c) => (a + b + c) / 3;

// test 1
let scoreDolphins = calcAverage(85, 54, 41);
let scoreKoalas = calcAverage(23, 34, 27);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins venceram (${avgDolphins} contra ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas vencenram (${avgKoalas} contra ${avgDolphins})`);
  } else {
    console.log('Ninguém venceu');
  }
};

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576, 1200);

// test 2
scoreDolphins = calcAverage(44, 23, 71);
scoreKoalas = calcAverage(65, 54, 49);
checkWinner(scoreDolphins, scoreKoalas);
