function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercício 1:

function createListAddClass() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  for (const value of dezDaysList) {

    let createTagLi = document.createElement('li')
    createTagLi.innerText = value;
    createTagLi.classList.add('day');
    document.querySelector('#days').appendChild(createTagLi)

    if (value == '24' || value == '25' || value == '31') {
      createTagLi.classList.add('holiday')
    }

    if (value == '4' || value == '11' || value == '18' || value == '25') {
      createTagLi.classList.add('friday')
    }
  }
}
createListAddClass()

// Exercício 2:

function creteButtonAddIdAddText(textButton) {

  let createTagButton = document.createElement('button');
  createTagButton.setAttribute('id', 'btn-holiday');
  createTagButton.innerText = textButton;
  document.querySelector('.buttons-container').appendChild(createTagButton);

}
creteButtonAddIdAddText('Feriados')

// Exercício 3:

function displayHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday')
  
  getHolidayButton.addEventListener('click', function() {
    for (let index in getHolidays) {
      if (getHolidays[index].style.backgroundColor == 'green') {
        getHolidays[index].style.backgroundColor = 'rgb(238,238,238)';
        getHolidays[index].style.color = '#777';
      } else {
        getHolidays[index].style.backgroundColor = 'green';
        getHolidays[index].style.color = 'white';
      }
    }
  })
};

displayHolidays();

// Exercício 4:

function createButtonAddId(textButton) {
  let createTagButton = document.createElement('button');
  createTagButton.setAttribute('id', 'btn-friday')
  createTagButton.innerText = textButton
  document.querySelector('.buttons-container').appendChild(createTagButton)
}
createButtonAddId("Sexta-feira");

// Exercício 5:
let arrayFriday = [ 4, 11, 18, 25 ];

function addEventButtonFridayChangeNum(arrayFriday) {
  let getClassFriday = document.querySelectorAll('.friday');
  let getButtonFriday = document.querySelector('#btn-friday')
  
  getButtonFriday.addEventListener('click', function(){
    for (const index in getClassFriday) {
      if(getClassFriday[index].innerHTML !== 'SEXTOU'){
        getClassFriday[index].innerHTML = 'SEXTOU'
      } else {
        getClassFriday[index].innerHTML = arrayFriday[index]
      }
    }
  })
}
addEventButtonFridayChangeNum(arrayFriday)

// Exercício 6:

function dayMouseOver() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
};
dayMouseOver();

function dayMouseOut() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '300';
  })
};
dayMouseOut();

// Exercício 7:



// Exercício 8:



// Exercício 9:

