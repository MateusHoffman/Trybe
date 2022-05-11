// const sum = require('./sum');

// describe('A função deve retornar a soma dos parâmetros passados', () => {
//   test('Deve retornar 9 para a soma de 4 + 5', () => {
//     expect(sum(4, 5)).toEqual(9);
//   })
  
//   test('Deve retornar 0 para a soma de 0 + 0', () => {
//     expect(sum(0, 0)).toEqual(0);
//   })

//   test('Deve retornar Error para a soma de 4 + "5" (Número com String)', () => {
    
//     expect(() => sum(4, "5")).toThrowError('parameters must be numbers');
//   })
// })

// const myRemove = require('./sum');

// describe('A função deve retornar um "array" sem um elemento "item"', () => {
//   test('Teste 1', () => {
//     expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
//   })

//   test('Teste 2', () => {
//     expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
//   })

//   test('Teste 3', () => {
//     expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
//   })
// })

const myFizzBuzz = require('./sum')

describe('Função', () => {
  test('Test 1', () => {
    expect(myFizzBuzz(15)).toEqual("fizzbuzz")
  })

  test('Test 1', () => {
    expect(myFizzBuzz(3)).toEqual("fizz")
  })

  test('Test 1', () => {
    expect(myFizzBuzz(5)).toEqual("buzz")
  })

  test('Test 1', () => {
    expect(myFizzBuzz(2)).toEqual(2)
  })

  test('Test 1', () => {
    expect(myFizzBuzz('a')).toEqual(false)
  })
})
