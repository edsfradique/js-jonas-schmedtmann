'use strict';

// Vamos melhorar ainda mais a calculadora de dicas de Steven, desta vez usando loops!

// 1. Crie uma matriz de 'contas' contendo todos os 10 valores de contas de teste

// 2. Crie matrizes vazias para as dicas e os totais ('dicas' e 'totais')

// 3. Use a função 'calcTip' que escrevemos antes (não há necessidade de repetir) para calcular
// gorjetas e valores totais (fatura + gorjeta) para cada valor de fatura na matriz de contas. Use um para
// loop para realizar os 10 cálculos!

// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

// Dicas: chame ‘calcTip’ no loop e use o método push para adicionar valores ao
// dicas e matrizes de totais

// Bônus: escreva uma função 'calcA Average' que leva uma matriz chamada 'arr' como
// um argumento. Esta função calcula a média de todos os números no dado
// variedade. Este é um desafio difícil (não fizemos isso antes)! Aqui está como
// resolva:

// 4.1. Primeiro, você precisará adicionar todos os valores da matriz. Para fazer a adição,
// comece criando uma variável 'soma' que começa em 0. Em seguida, faça um loop sobre o
// array usando um loop for. Em cada iteração, adicione o valor atual ao
// variável 'sum'. Dessa forma, no final do loop, você tem todos os valores
// adicionados juntos

// 4.2. Para calcular a média, divida a soma que você calculou antes pelo
// comprimento da matriz (porque esse é o número de elementos)

// 4.3. Chame a função com a matriz 'totais'

const contas = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const dicas = [];
const totais = [];

const calcTips = (contas) =>
  contas >= 50 && contas <= 300 ? contas * 0.15 : contas * 0.2;

for (let i = 0; i < contas.length; i += 1) {
  const getDicas = calcTips(contas[i]);
  const getTotais = getDicas + contas[i];
  dicas.push(getDicas);
  totais.push(getTotais);
}

const calcAverage = function (arr) {
  let soma = 0;
  for (let i = 0; i < arr.length; i += 1) {
    soma += arr[i];
  }
  return soma / arr.length;
};

console.log(calcAverage(totais));
