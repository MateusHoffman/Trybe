// //inverter uma palavra
let palavra = 'banana';
console.log('Número de caracteres: ' + palavra.length);
console.log('Número de index: ' + (palavra.length - 1) );

let reverse = '';

for(let index = 0; index < palavra.length; index += 1){
  reverse += palavra[palavra.length - 1 - index];
}
console.log(reverse)


