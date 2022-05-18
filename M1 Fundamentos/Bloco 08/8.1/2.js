const sortition = (numBet, verifyNumCorrect) => {
  const numRandom = Math.round(Math.random() * (5 - 1)) + 1;
  console.log(`Número do sorteio ${numRandom}`);
  console.log(`Número da aposta ${numBet}`);
  // console.log(verifyNumCorrect(numRandom, numBet));
  return verifyNumCorrect(numRandom, numBet)
}

const verifyNumCorrect = (numRandom, numBet) => {
  if(numRandom === numBet){
    return "Parabéns você ganhou"
  }
  if(numRandom !== numBet){
    return "Tente novamente"
  }
}


console.log(sortition(3, verifyNumCorrect));