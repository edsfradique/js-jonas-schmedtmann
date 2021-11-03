// Existem duas equipes de ginástica, Golfinhos e Coalas. Eles competem contra cada
// outras 3 vezes. O vencedor com a pontuação média mais alta ganha um troféu!

// Calcule a pontuação média de cada equipe, usando os dados de teste abaixo

// Compare as pontuações médias da equipe para determinar o vencedor da competição,
// e imprima-o no console. Não se esqueça que pode haver um empate, então teste isso
// também (empate significa que eles têm a mesma pontuação média)

// Bônus 1: inclui um requisito para uma pontuação mínima de 100. Com esta regra, um
// a equipe só vence se tiver uma pontuação maior do que a outra equipe, e ao mesmo tempo um
// pontuação de pelo menos 100 pontos. Dica: Use um operador lógico para testar o mínimo
// pontuação, bem como vários blocos else-if

// Bônus 2: a pontuação mínima também se aplica a um sorteio! Então, um empate só acontece quando
// ambas as equipes têm a mesma pontuação e ambas têm uma pontuação maior ou igual a 100
// pontos. Caso contrário, nenhuma equipe ganha o troféu

// Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

const dolphScore = (96 + 108 + 89) / 3;
const koalScore = (88 + 91 + 110) / 3;

// const dolphScore = (97 + 112 + 101) / 3;
// const koalScore = (109 + 95 + 123) / 3;

// const dolphScore = (97 + 112 + 101) / 3;
// const koalScore = (109 + 95 + 106) / 3;

// if (dolphScore === koalScore) {
//   console.log('Empate');
// } else if (dolphScore > koalScore) {
//   console.log(`Dolphins ganharam com o score de ${dolphScore.toFixed(2)}`);
// } else {
//   console.log(`Koalas ganharam com o score de ${dolphScore.toFixed(2)}`);
// }

if (dolphScore === koalScore && (dolphScore + koalScore) / 2 >= 100) {
  console.log(`empate ${koalScore.toFixed(2)}`);
} else if (dolphScore > koalScore && dolphScore >= 100) {
  console.log(`Dolphins ganharam com o score de ${dolphScore.toFixed(2)}`);
} else if (koalScore > dolphScore && koalScore >= 100) {
  console.log(`Koalas ganharam com o score de ${dolphScore.toFixed(2)}`);
} else {
  console.log(
    `Ninguém venceu, Dolphis: ${dolphScore.toFixed(
      2
    )}; Koalas: ${koalScore.toFixed(2)}`
  );
}
