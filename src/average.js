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

// const arredondando = (media) => {
//   Number.isInteger(media);

//   if('false'){
//     Math.round(media);
//   }

//   return media;
// };

// const average = (array) => {
//   try {
//     let s = 0;

//     for (let i = 0; i < array.length; i += 1) {
      
//       s += array[i];
      
//      return Math.round(s/array.length);
      
//       throw new Error("undefined");
//     }
    
//   } catch (error) {
//     for (let j = 0; j < array.length; j += 1) {
//       if (typeof array[j] !== 'number'){
//         return error.messagem;
//       }
//     }
//   }
// };

// Alguns sites utilizados para a motagem desta função:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/round;
const average = (array) => {
  if (array.length === 0) {
    return undefined;
  }
  let soma = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (typeof array[i] !== 'number') {
      return undefined;
    }
    soma += array[i];
  }
  let media = soma / array.length;
  return Math.round(media);
};

module.exports = average;
