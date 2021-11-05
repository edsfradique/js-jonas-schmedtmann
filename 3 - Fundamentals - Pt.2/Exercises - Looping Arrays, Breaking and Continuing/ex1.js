'use strict';

// Vamos trazer de volta o array 'populações' de uma tarefa anterior

// Use um loop for para calcular uma matriz chamada 'percentages2' contendo o
// percentagens da população mundial para os 4 valores populacionais. Use o
// função 'porcentagemOfWorld1' que você criou anteriormente

// Confirme se 'percentages2' contém exatamente os mesmos valores que o
// array 'percentages' que criamos manualmente na atribuição anterior,
// e refletir sobre o quão melhor esta solução é

const percentageOfWorld3 = (population) => {
  return (population / 7900) * 100;
};

// const describePopulation = (population, country) => {
//   const calcPercentPop = percentageOfWorld3(population);
//   return `${country} tem ${population} milhões de habitantes, isso corresponde a cerca de ${calcPercentPop.toFixed(
//     1
//   )}% da população mundial`;
// };

const populations = [212, 1441, 45, 67];
// console.log(populations.length === 4);

// console.log(describePopulation(populations[0], 'Brazil'));
// console.log(describePopulation(populations[1], 'China'));
// console.log(describePopulation(populations[2], 'Argentina'));
// console.log(describePopulation(populations[3], 'França'));

const percentages = [
  percentageOfWorld3(populations[0]).toFixed(2),
  percentageOfWorld3(populations[1]).toFixed(2),
  percentageOfWorld3(populations[2]).toFixed(2),
  percentageOfWorld3(populations[3]).toFixed(2)
];
console.log(percentages);

const percentagens2 = [];

for (let i = 0; i < populations.length; i += 1) {
  percentagens2.push(percentageOfWorld3(populations[i]).toFixed(2));
}

console.log(percentagens2);
