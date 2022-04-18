// 6
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let impares = 0;

for (let index = 1; index < numbers.length; index += 1) {
  let impar = numbers[index]%2
  if(impar !== 0){
    console.log(numbers[index]);
  }
}
