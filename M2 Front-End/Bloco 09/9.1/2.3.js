const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = (param) => {
  const user = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian",
  };
  setTimeout(() => {
    // Retorne a `callback` passada como parâmetro na função `getUser`
    console.log(param(user));
  }, delay());
};

getUser(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
getUser(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo