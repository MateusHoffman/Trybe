///  7 - Escreva um teste que verifique a chamada do callback de uma função uppercase, que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

it('Test 1', () => {
  uppercase('texto', (str) => {
    try {
      expect(str).toEqual('TEXTO')
    } catch (error) {
      done(error)
    }
  })
})