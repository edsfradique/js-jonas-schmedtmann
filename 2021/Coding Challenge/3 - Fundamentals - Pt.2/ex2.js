// Steven ainda está construindo sua calculadora de dicas, usando as mesmas regras de antes: Dica 15% de
// a conta se o valor da conta estiver entre 50 e 300, e se o valor for diferente, a gorjeta é
// 20%.

// Escreva uma função 'calcTip' que recebe qualquer valor de fatura como entrada e retorna
// a dica correspondente, calculada com base nas regras acima (você pode conferir
// o código do primeiro desafio de calculadora de ponta, se necessário). Use a função
// tipo que você mais gosta. Teste a função usando um valor de conta de 100

// E agora vamos usar matrizes! Portanto, crie uma matriz de 'contas' contendo os dados de teste
// abaixo

// Crie uma matriz de 'dicas' contendo o valor da gorjeta para cada conta, calculado a partir de
// a função que você criou antes

// Bônus: Crie uma matriz 'total' contendo os valores totais, então a conta + gorjeta

// Test data: 125, 555 and 44

// Dica: Lembre-se de que uma matriz precisa de um valor em cada posição, e esse valor pode
// realmente é o valor retornado de uma função! Então você pode simplesmente chamar uma função como array
// valores (portanto, não armazene os valores de ponta em variáveis ​​separadas primeiro, mas diretamente no novo
// variedade)

const calcTip = (conta) =>
  conta >= 50 && conta <= 300 ? conta * 0.15 : conta * 0.2;

console.log(calcTip(100));

const contas = [125, 555, 44];

const dicas = [calcTip(contas[0]), calcTip(contas[1]), calcTip(contas[2])];

const total = [
  contas[0] + dicas[0],
  contas[1] + dicas[1],
  contas[2] + dicas[2]
];

console.log(total);
