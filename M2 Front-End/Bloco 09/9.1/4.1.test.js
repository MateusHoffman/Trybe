/// Jest analisa as funções síncronas, não espera as assíncronas terminarem

test('Não deveria passar!', () => {
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('Deveria falhar!');
  }, 2000);
});