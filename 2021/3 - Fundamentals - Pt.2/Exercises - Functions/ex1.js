'use strict';

// Escreva uma função chamada 'describeCountry' que usa três parâmetros:
// 'país', 'população' e 'capitalCidade'. Com base nesta entrada, o
// função retorna uma string com este formato: 'Finlândia tem 6 milhões de pessoas e seu
// capital é Helsinque '

// Chame esta função 3 vezes, com dados de entrada para 3 países diferentes. Armazene o
// retornou valores em 3 variáveis ​​diferentes e registrou-os no console

function describeCountry(country, population, capitalCity) {
  return `${country} tem ${population} milhões de pessoas e sua capital é ${capitalCity}`;
}

// const describeOne = describeCountry('Brazil', 230, 'Brasilia');
// console.log(describeOne);

console.log(describeCountry('Brasil', 230, 'Brasilia'));
console.log(describeCountry('Argentina', 45, 'Buenos Aires'));
console.log(describeCountry('EUA', 330, 'Washington D.C'));
