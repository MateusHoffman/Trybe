/*
Descubra a idade mínima
Escreva um algoritmo que recebe a idade de Marina, Silvia e Iza e retorne a mensagem informando a pessoa mais jovem no seguinte formato:
---------------------------------------------------
"x é a pessoa mais jovem e possui y anos de idade."
---------------------------------------------------
*/

const marina = 30;
const silvia = 20;
const iza = 10;

if (marina < silvia && marina < iza) {
  console.log('marina é a pessoa mais jovem e possui ' + marina + ' anos de idade.')
} else if (silvia < marina && silvia < iza){
  console.log('silvia é a pessoa mais jovem e possui ' + silvia + ' anos de idade.')
} else {
  console.log('iza é a pessoa mais jovem e possui ' + iza + ' anos de idade.')
}


