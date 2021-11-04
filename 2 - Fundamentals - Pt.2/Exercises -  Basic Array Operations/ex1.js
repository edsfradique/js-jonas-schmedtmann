// Crie uma matriz contendo todos os países vizinhos de um país de sua
// escolha. Escolha um país que tenha pelo menos 2 ou 3 vizinhos. Armazene a matriz
// em uma variável chamada 'vizinhos'

// Em algum momento, um novo país chamado 'Utopia' é criado na vizinhança de
// seu país selecionado. Portanto, adicione-o ao final do array 'neighbours'

// Infelizmente, depois de algum tempo, o novo país é dissolvido. Portanto, remova-o de
// o fim do array

// Se a matriz 'vizinhos' não incluir o país 'Alemanha', registre-se no
// console: 'Provavelmente não é um país da Europa Central: D'

// Mude o nome de um dos países vizinhos. Para fazer isso, encontre o
// índice do país na matriz 'vizinhos' e, em seguida, use esse índice para
// mude a matriz nessa posição de índice. Por exemplo, você pode pesquisar por
// 'Suécia' na matriz e, em seguida, substitua-o por 'República da Suécia'.

const neighbouring = [
  'Argentina',
  'Bolívia, Colômbia',
  'Paraguai',
  'Peru',
  'Uruguai',
  'Venezuela'
];

neighbouring.push('Utopia');
neighbouring.pop();

if (!neighbouring.includes('Alemanha')) {
  console.log('Provavelmente não é um país da Europa Central: D');
}

const changeCountry = neighbouring.indexOf('Paraguai');
neighbouring[changeCountry] = 'Suriname';
console.log(neighbouring);
