/// Operações assíncronas

/// setTimeout(1parametro, 2parametro);
/// 1parametro = callback ( () => {} )
/// 1parametro = tempo em milisegundo ( 5 * 1000 ) 5 segundos

const pushNumber = (list, number) => list.push(number);

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3 * 1000); // 3 segundos
pushNumber(numbers, 2);
pushNumber(numbers, 3);

console.log(numbers); // O retorno é [2, 3] o 1 não aparece pois o console.log é instantaneo, não espera o TimeOut de 3 segundos