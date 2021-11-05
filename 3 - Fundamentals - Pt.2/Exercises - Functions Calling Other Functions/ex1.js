'use strict';

// A população mundial é de 7900 milhões de pessoas. Crie uma declaração de função
// chamado de 'porcentagem do mundo1', que recebe um valor de 'população', e
// retorna a porcentagem da população mundial que uma determinada população
// representa. Por exemplo, a China tem 1441 milhões de habitantes, então é cerca de 18,2% da
// a população mundial

// Para calcular a porcentagem, divida o valor de 'população' fornecido por 7900
// e então multiplique por 100

// Ligue para 'porcentagemOfWorld1' para 3 populações de países de sua escolha,
// armazenar os resultados em variáveis ​​e registrá-los no console

// Crie uma expressão de função que faz exatamente a mesma coisa, chamada
// 'porcentagemOfWorld2', e também chamá-lo com populações de 3 países (pode ser
// as mesmas populações)

function percentageOfWorld1(population, country) {
  const percentage = (population / 7900) * 100;
  return `${country} tem ${population} milhões de habitantes, isso corresponde a cerca de ${percentage.toFixed(
    1
  )}% da população mundial`;
}

// console.log(percentageOfWorld1(230, 'Brasil'));
// console.log(percentageOfWorld1(1441, 'China'));
// console.log(percentageOfWorld1(45, 'Argentina'));

const percentageOfWorld2 = function (population, country) {
  const percentage = (population / 7900) * 100;
  return `${country} tem ${population} milhões de habitantes, isso corresponde a cerca de ${percentage.toFixed(
    1
  )}% da população mundial`;
};

// console.log(percentageOfWorld2(230, 'Brasil'));
// console.log(percentageOfWorld2(1441, 'China'));
// console.log(percentageOfWorld2(45, 'Argentina'));

// const percentageOfAll = percentageOfWorld2(230, 'Brasil');
// console.log(percentageOfAll);

// Recrie a última atribuição, mas desta vez crie uma função de seta chamada
// 'porcentagemOfWorld3'

// const percentageOfWorld3 = (population, country) => {
//   const percentage = (population / 7900) * 100;
//   return `${country} tem ${population} milhões de habitantes, isso corresponde a cerca de ${percentage.toFixed(
//     1
//   )}% da população mundial`;
// };

// Crie uma função chamada 'describePopulation'. Use o tipo de função que você
// gosto mais. Esta função recebe dois argumentos: 'país' e
// 'população' e retorna uma string como esta: 'China tem 1441 milhões de pessoas,
// que é cerca de 18,2% do mundo. '

// Para calcular a porcentagem, 'describePopulation' chame o
// 'porcentagemOfWorld1' que você criou anteriormente

// Ligue para 'describePopulation' com dados para 3 países de sua escolha

const percentageOfWorld3 = (population) => {
  return (population / 7900) * 100;
};

const describePopulation = (population, country) => {
  const calcPercentPop = percentageOfWorld3(population);
  return `${country} tem ${population} milhões de habitantes, isso corresponde a cerca de ${calcPercentPop.toFixed(
    1
  )}% da população mundial`;
};

console.log(describePopulation(230, 'Brasil'));
console.log(describePopulation(1441, 'China'));
console.log(describePopulation(45, 'Argentina'));
