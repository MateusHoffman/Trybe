const nome = (arrayRightAsnwers, arrayStudentAnswers, verifyAsnwer) => {
  return verifyAsnwer(arrayRightAsnwers, arrayStudentAnswers);
}

const verifyAsnwer = (arrayRightAsnwers, arrayStudentAnswers) => {
  let note = 0;
  for (const index in arrayRightAsnwers) {
    if (arrayRightAsnwers[index] === arrayStudentAnswers[index]) {
      note += 1;
    } else if (arrayStudentAnswers[index] === 'N.A') {
      note += 0
    } else {
      note -= 0.5
    }
  }
  return note
}



console.log(nome(['A', 'A', 'A', 'B'], ['A', 'A', 'A', 'A'], verifyAsnwer));