let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let number of numbers) {
  console.log(number);
}

console.log('------ OUTRA MANEIRA -------------------------------');


for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

