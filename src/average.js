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
  let value = 0;
  let result = 0;
  /* for (let index = 0; index < array.length; index += 1) { */
  if (array.length === 0) {
    console.log('primeiro');
        return undefined;
  }
    for (let i of array) {
      if (typeof i !== 'number') {
        console.log('funfa');
        return undefined;
      }
      value += i;
// console.log(value);
// console.log(i);
} 
        result = value / array.length;
        
          /* result = Math.round(media) / media.length; */
          /* result = parseInt(result); */
          return Math.round(result);
};
console.log(average([3, 4, 5]));

module.exports = average;
