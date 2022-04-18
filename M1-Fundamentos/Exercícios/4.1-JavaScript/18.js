let linhaR = 6;
let colunaR = 1;

let linhaB = 5;
let colunaB = 3;

let podeAtacar = false;

// 1 - Na mesma linha
if(linhaR === linhaB){
  podeAtacar = true;
}
// 2 - Na mesma coluna
if(colunaR === colunaB){
  podeAtacar = true;
}
// 3 - Diagonal direita
for(let passos = 1; passos <= 7; passos += 1){
  let novaL = linhaR + passos;
  let novaC = colunaR + passos;
  if(novaL === linhaB && novaC === colunaB){
    podeAtacar = true;
  }
}
// 4 - Diagonal esquerda
for(let passos = 1; passos <= 7; passos += 1){
  let novaL = linhaR + passos;
  let novaC = colunaR - passos;
  if(novaL === linhaB && novaC === colunaB){
    podeAtacar = true;
  }
}

console.log(podeAtacar);
