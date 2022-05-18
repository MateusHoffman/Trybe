const returnObjNameEmail = (nomeCompleto) => {
  const lowerCaseName = nomeCompleto.toLowerCase();
  const arrayName = lowerCaseName.split(' ');
  const joinArrayName = arrayName.join('_');
  const emailCompleted = `${joinArrayName}@trybe.com`;
  const obj = { fullname: nomeCompleto, email: emailCompleted };
  return obj;
}

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(returnObjNameEmail));

let textWithAccents = "áẃéŕýúíóḱ"
let textWithoutAccents = textWithAccents.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
console.log(textWithoutAccents)