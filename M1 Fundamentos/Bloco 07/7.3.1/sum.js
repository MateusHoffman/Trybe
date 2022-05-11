// const sum = (number1, number2) => { 
//   if(typeof(number1) !== 'number'|| typeof(number2) !== 'number'){
//     throw new Error('parameters must be numbers')
//   }
//   return number1 + number2
// };

// const myRemove = (arr, item) => {
//   let newArr = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     if(arr[index] === item){
//       arr.splice(index, 1)
//     }
//     newArr.push(arr[index])
//   }
//   return newArr
// }

const myFizzBuzz = (num) => {
  if(typeof(num) !== 'number'){
    return false
  } else if (num % 3 === 0 && num % 5 === 0){
    return "fizzbuzz"
  } else if (num % 3 === 0){
    return "fizz"
  } else if (num % 5 === 0){
    return "buzz"
  } else {
    return num
  }
}
myFizzBuzz(15)



module.exports = myFizzBuzz;