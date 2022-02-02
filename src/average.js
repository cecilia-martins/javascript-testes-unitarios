/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (array) => {
  // add your implementation here
  let media = [];
  let result = [];
  for (let posi = 0; posi < array.length; posi += 1) {
  if (array[posi].typeof !== 'number' || array[posi] === '') {
        return undefined;
}
      media += array[posi];
          result = media / media.length;
          /* result = parseInt(result); */
          return (result);
  }
};
console.log(average([]));

module.exports = average;
