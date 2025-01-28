'use strict';

// Armazene esta matriz de matrizes em uma variável chamada 'listOfNeighbours'
// [['Canadá', 'México'], ['Espanha'], ['Noruega', 'Suécia',
// 'Rússia']];

// Registre apenas os países vizinhos no console, um por um, não todo
// matrizes. Registre uma string como 'Vizinho: Canadá' para cada país

// Você precisará de um loop dentro de um loop para isso. Na verdade, isso é um pouco complicado, então não
// preocupe-se se for muito difícil para você! Mas você ainda pode tentar descobrir isso de qualquer maneira

const listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia']
];

// console.log(listOfNeighbours[1].length);

for (let i = 0; i < listOfNeighbours.length; i += 1) {
  for (let k = 0; k < listOfNeighbours[i].length; k += 1) {
    if (listOfNeighbours[i].length > 1) {
      console.log(`${listOfNeighbours[i][k]}`);
    }
  }
}
