// Vamos voltar a Mark e John comparando seus IMCs! Desta vez, vamos usar objetos para
// implemente os cálculos! Lembre-se: IMC = massa / altura ** 2 = massa
// / (altura * altura) (massa em kg e altura em metros)

// Para cada um deles, crie um objeto com propriedades para seu nome completo, massa e
// altura (Mark Miller e John Smith)

// Crie um método 'calcBMI' em cada objeto para calcular o IMC (o mesmo
// método em ambos os objetos). Armazene o valor do IMC em uma propriedade e também o devolva
// do método

// Faça login no console de quem tem o IMC mais alto, junto com o nome completo e o
// respectivo IMC. Exemplo: "O IMC de João (28,3) é maior do que o de Marcos (23,9)!"

// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.

const markObj = {
  firstName: 'Mark',
  lastName: 'Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return (this.imc = (this.mass / this.height ** 2).toFixed(2));
  }
};

const johnObj = {
  firstName: 'John',
  lastName: 'Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return (this.imc = (this.mass / this.height ** 2).toFixed(2));
  }
};

// const highIMC = (markIMC, johnIMC) => {
//   markIMC > johnIMC
//     ? console.log(
//         `O IMC de ${markObj.firstName} ${markObj.lastName} (${markObj.imc}) é maior que o IMC de ${johnObj.firstName} ${johnObj.lastName} (${johnObj.imc})`
//       )
//     : console.log(
//         `O IMC de ${johnObj.firstName} ${johnObj.lastName} (${johnObj.imc}) é maior que o IMC de ${markObj.firstName} ${markObj.lastName} (${markObj.imc})`
//       );
// };

// highIMC(markObj.calcBMI(), johnObj.calcBMI());

console.log(
  `O IMC de ${
    markObj.calcBMI() > johnObj.calcBMI()
      ? `${markObj.firstName} ${markObj.lastName} (${markObj.imc}) é maior que o IMC de ${johnObj.firstName} ${johnObj.lastName} (${johnObj.imc})`
      : `${johnObj.firstName} ${johnObj.lastName} (${johnObj.imc}) é maior que o IMC de ${markObj.firstName} ${markObj.lastName} (${markObj.imc})`
  }`
);
