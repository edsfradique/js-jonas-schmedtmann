const numNeighbours = Number(prompt('Quantos países vizinhos seu país tem?'));

if (numNeighbours === 1) {
  console.log('Apenas 1 vizinho');
} else if (numNeighbours > 1) {
  console.log('Mais de 1 vizinho');
} else {
  console.log('Sem fronteiras');
}
