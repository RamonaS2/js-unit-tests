const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/
describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    it('Se productDetails é uma função', () => {
      expect(typeof productDetails).toBe('function');
    });
    // Teste se o retorno da função é um array.
    it('Se o retorno de productDetails é uma array', () => {
      const produtos = productDetails('mel', 'açucar');
      expect(Array.isArray(produtos)).toBe(true);
    });
    // Teste se o array retornado pela função contém dois itens dentro.
    it('Se o array retornado pela função contém dois itens dentro', () => {
    const produtos = productDetails('mel', 'açucar');
    expect(produtos.length).toBe(2)
  })
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    it('Se os dois itens dentro do array retornado pela função são objetos', () => {
      const produtos = productDetails('mel', 'açucar');
      expect(typeof Object.keys(produtos)).toBe('object')
    })
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    it('Se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si', () => {
      expect(productDetails('parametro1','parametro2')[0]).not.toEqual(productDetails('parametro1','parametro2')[1]);
    })
    // Teste se os dois productIds terminam com 123.
    it('Se os dois productIds terminam com 123', () => {
    expect(productDetails()[0].details.productId.endsWith('123')).toBe(true)
    expect(productDetails()[1].details.productId.endsWith('123')).toBe(true)
    })
    
  })
