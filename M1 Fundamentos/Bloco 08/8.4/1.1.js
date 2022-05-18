const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
// Faça uma função que some todos os números pares do array

const sumNumEven = (arrNumbers) => {

  return arrNumbers.reduce((accumulator, element) => {
    return element % 2 === 0 ? accumulator + element : accumulator

  });
  
}

console.log(sumNumEven(numbers)); // 275