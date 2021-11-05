// Imprima uma boa saída no console, dizendo quem tem o IMC mais alto. A mensagem
// é "O IMC de Mark é maior do que o de John!" ou "O IMC de John é maior do que o de Mark!"

// Use um literal de modelo para incluir os valores de IMC nas saídas. Exemplo: "Mark's
// O IMC (28,3) é maior do que o de John (23,9)! "

// const marksWeights = 78;
// const marksHeight = 1.69;

const marksWeights = 95;
const marksHeight = 1.88;

// const johnWeights = 92;
// const johnHeights = 1.95;

const johnWeights = 85;
const johnHeights = 1.76;

const marksBMI = marksWeights / marksHeight ** 2;
const johnBMI = johnWeights / johnHeights ** 2;

if (marksBMI > johnBMI) {
  console.log(
    `Marks BMI ${marksBMI.toFixed(
      2
    )} is highter than John's BMI ${johnBMI.toFixed(2)}`
  );
} else {
  console.log(
    `John's BMI ${johnBMI.toFixed(
      2
    )} is highter than Marks BMI ${marksBMI.toFixed(2)}`
  );
}
