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
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(productDetails).toBe('function');
    expect(Array.isArray(productDetails('Alcool gel', 'Máscara'))).toBeTruthy()
    expect(productDetails('Alcool gel', 'Máscara')).toHaveLength()
    const retorno = productDetails('Alcool gel', 'Máscara')
    expect(retorno[0] === 'object' && typeof retorno[1] === 'object').toBeTruthy()
    expect(retorno[0]).not.toEqual(retorno[1])
    const productId1 = retorno[0].details.productId;
    const productId2 = retorno[1].details.productId;

    const pd1_1 = productId1[productId1.length - 1];
    const pd1_2 = productId1[productId1.length - 2];
    const pd1_3 = productId1[productId1.length - 3];

    const pd2_1 = productId2[productId2.length - 1];
    const pd2_2 = productId2[productId2.length - 2];
    const pd2_3 = productId2[productId2.length - 3];

    expect(pd1_1 === pd2_1
      && pd1_2 === pd2_2
      && pd1_3 === pd2_3).toBeTruthy()
  });
});
