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

// const neighbouring = [
//   'Argentina',
//   'Bolívia, Colômbia',
//   'Paraguai',
//   'Peru',
//   'Uruguai',
//   'Venezuela'
// ];

// neighbouring.push('Utopia');
// neighbouring.pop();

// if (!neighbouring.includes('Alemanha')) {
//   console.log('Provavelmente não é um país da Europa Central: D');
// }

// const changeCountry = neighbouring.indexOf('Paraguai');
// neighbouring[changeCountry] = 'Suriname';
// console.log(neighbouring);

// Crie um objeto chamado 'myCountry' para um país de sua escolha, contendo
// propriedades 'país', 'capital', 'idioma', 'população' e
// 'vizinhos' (uma matriz como usamos nas atribuições anteriores)

const myCountry = {
  country: 'Brasil',
  capital: 'Brasília',
  language: 'português',
  population: 212,
  neighbours: [
    'Argentina',
    'Bolívia',
    'Colômbia',
    'Paraguai',
    'Peru',
    'Uruguai',
    'Venezuela'
  ]
};

// console.log(myCountry);

// Usando o objeto da atribuição anterior, registre uma string como esta no
// console: 'A Finlândia tem 6 milhões de pessoas que falam finlandês, 3 países vizinhos
// e uma capital chamada Helsinque. '

// Aumente a população do país em dois milhões usando a notação de pontos e, em seguida,
// diminua em dois milhões usando a notação de colchetes.

// console.log(
//   `O ${myCountry.country} tem ${myCountry.population} milhões de pessoas que falam ${myCountry.language}, ${myCountry.neighbours.length} países vizinhos e uma capital chamada ${myCountry.capital}`
// );

// myCountry.population = myCountry.population + 2;
// console.log(myCountry.population);

// myCountry['population'] = myCountry['population'] - 2;
// console.log(myCountry['population']);

// Adicione um método chamado 'describe' ao objeto 'myCountry'. Este método
// irá registrar uma string no console, semelhante à string registrada no anterior
// atribuição, mas desta vez usando a palavra-chave 'this'.

// Chame o método 'descrever'

// Adicione um método chamado 'checkIsland' ao objeto 'myCountry'. Esse
// método irá definir uma nova propriedade no objeto, chamada 'isIsland'.
// 'isIsland' será verdadeiro se não houver países vizinhos, e falso se
// existem. Use o operador ternário para definir a propriedade

myCountry.describe = function () {
  console.log(
    `O ${this.country} tem ${this.population} milhões de pessoas que falam ${this.language}, ${this.neighbours.length} países vizinhos e uma capital chamada ${this.capital}`
  );
};

myCountry.checkIsland = function () {
  this.isIsland = this.neighbours.length === 0 ? true : false;
};

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry.isIsland);
