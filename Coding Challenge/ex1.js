// Armazene a massa e a altura de Mark e John em variáveis

// Calcule ambos os seus IMC usando a fórmula (você pode até mesmo implementar ambos
// versões)

// Crie uma variável booleana 'markHigherBMI' contendo informações sobre
// se Mark tem um IMC maior do que John.

const marksWeights = 78;
const marksHeight = 1.69;

// const marksWeights = 95;
// const marksHeight = 1.88;

const johnWeights = 92;
const johnHeights = 1.95;

// const johnWeights = 85;
// const johnHeights = 1.76;

const marksBodyMassIndex = marksWeights / marksHeight ** 2;
const johnBodyMassIndex = johnWeights / johnHeights ** 2;

const markHigherBMI = marksBodyMassIndex > johnBodyMassIndex;
console.log(
  marksBodyMassIndex.toFixed(2),
  johnBodyMassIndex.toFixed(2),
  markHigherBMI
);
