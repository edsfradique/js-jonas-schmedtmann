// Se a população do seu país for superior a 33 milhões, use a operadora ternária
// para registrar uma string como esta no console: 'População de Portugal está acima da média'.
// Caso contrário, simplesmente registre 'a população de Portugal está abaixo da média'. Observe como apenas
// uma palavra muda entre essas duas frases!

// Depois de verificar o resultado, mude a população temporariamente para 13 e depois para
// 130. Veja os diferentes resultados e defina a população de volta ao original

const country = 'Brazil';
const population = 230;

const moreOrAbove =
  population > 33
    ? `População de ${country} está acima da média`
    : `População de ${country} está abaixo da média`;

console.log(moreOrAbove);
