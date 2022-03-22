/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.

  Parâmetros:
    - Uma string;
    - Um número.
  Comportamento:
    vqv(Tunico, 30) // Retorna:
      'Oi, meu nome é Tunico!
      Tenho 30 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!'
*/

// const vqv = (name, idade) => {
//   try {
//     if (name === 'undefined' || idade === 'undefined') {
//       throw new Error('undfined');
//     }

//     if (typeof name === 'string' || typeof idade === 'number'){
//   let frase = `Oi, meu nome é ${name}!
//   Tenho ${idade} anos,
//   trabalho na Trybe e mando muito em programação!
//   #VQV!`;
//     return frase;

//   } catch (error) {
//     return error.message;
//   }
// };
const verifyParametros = (name, idade) => {
  if (name === undefined || idade === 'undefined') {
    throw new Error('undefined');
  }
};

const vqv = (name, idade) => {
  try {
if (typeof name === 'string' || typeof idade === 'number') {
const frase = `Oi, meu nome é ${name}!
Tenho ${idade} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;

    return frase;
  }
} catch (error) {
  return console.error(error.messagem);
}
};
module.exports = vqv;
