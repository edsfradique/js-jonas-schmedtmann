// Digamos que Sarah esteja procurando um novo país para morar. Ela quer morar em um
// país que fala inglês, tem menos de 50 milhões de pessoas e não é um
// ilha.
// Escreva uma declaração if para ajudar Sarah a descobrir se seu país é o certo para ela.
// Você precisará escrever uma condição que leve em consideração todos os critérios de Sarah. Leva
// seu tempo com isso, e verifique parte da solução se necessário.
// Se o seu for o país certo, registre uma string como esta: 'Você deveria morar em Portugal :)'. Se
// não, logar 'Portugal não atende aos seus critérios :('
// Provavelmente seu país não atende a todos os critérios. Então volte e temporariamente
// mude algumas variáveis ​​para tornar a condição verdadeira (a menos que você more
// Canadá: D)

const country = 'Brazil';
const population = 220;
const language = 'portuguese';
const isIsland = false;

if (language === 'english' && population < 50 && isIsland === false) {
  console.log(`${country} é o lugar perfeito para morar`);
} else {
  console.log(`${country} não atende os critérios necessários`);
}
