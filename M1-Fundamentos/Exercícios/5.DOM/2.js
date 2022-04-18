// Para uma melhor organização, faça commits a cada tarefa concluída. Vamos aos exercícios:
// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;

function createTagAddH1() {

  let createTagH1 = document.createElement("h1");     // Create a new element

  createTagH1.innerText = 'Exercício 5.2 - JavaScript DOM';     // Change the text of the element
  createTagH1.style.color = 'red';     // Change the text color of the element
  document.body.appendChild(createTagH1)     // Add the object to the DOM
  
}
createTagAddH1()

// Adicione a tag main com a classe main-content como filho da tag body ;

function addTagMainBody() {

  let createMain = document.createElement('main');
  createMain.classList.add('main-content');
  document.body.appendChild(createMain);
  
}
addTagMainBody()

// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

function addSectionCenterChildMain() {

  let createSection = document.createElement('section');
  createSection.classList.add('center-content');
  document.querySelector('.main-content').appendChild(createSection);

}
addSectionCenterChildMain();

// Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

function addParagraphChildSectionText() {

  let createTagP = document.createElement('p');
  createTagP.innerText = 'Text for paragraph';
  document.querySelector('.center-content').appendChild(createTagP);

}
addParagraphChildSectionText();

// Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

function addSectionLeftChildMain() {
  
  let createSectionLeft = document.createElement('section');
  createSectionLeft.classList.add('left-content');
  document.querySelector('.main-content').appendChild(createSectionLeft);

}
addSectionLeftChildMain();

// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

function addSectionRightChildMain() {
  
  let createSection = document.createElement('section');
  createSection.classList.add('right-content');
  document.querySelector('.main-content').appendChild(createSection)

}
addSectionRightChildMain()

// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;

function addImgClassChildSectionLeft() {
  
  let createImg = document.createElement('img');
  createImg.classList.add('small-image');;
  createImg.src = 'https://picsum.photos/200';
  document.querySelector('.left-content').appendChild(createImg)
}
addImgClassChildSectionLeft();

// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

function addListUl10ValueChildRight() {

  let arrayValue = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'seta', 'oito', 'nove', 'dez'];
  let createListUl = document.createElement('ul');
  document.querySelector('.right-content').appendChild(createListUl)

  for (const value of arrayValue) {
    let createListLi = document.createElement('li')
    createListLi.innerText = value;
    document.querySelector('.right-content ul').appendChild(createListLi)
  }

}
addListUl10ValueChildRight()

// Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.

function add3h3ChildMain() {
  let arrayTitleh3 = ['Primeiro', 'Segundo', 'Terceiro'];
  
  for(let i = 0; i < 3; i += 1){
    let createh3 = document.createElement('h3');
    createh3.innerText = arrayTitleh3[i]
    document.querySelector('.main-content').appendChild(createh3)
  }

}
add3h3ChildMain();

// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:
// Adicione a classe title na tag h1 criada;

function addClassTitleH1() {
  
  let getH1 = document.querySelector('h1')
  getH1.classList.add('title')

}
addClassTitleH1()

// Adicione a classe description nas 3 tags h3 criadas;

function addClassDescription3TagsH3() {
  
  let getAllh3 = document.querySelectorAll('.main-content h3')
  for (let index = 0; index < getAllh3.length; index += 1) {
    let addClassH3 = document.querySelectorAll('.main-content h3')[index];
    addClassH3.classList.add('description');
  }

}
addClassDescription3TagsH3();

// Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;

function removeSectionLeft() {
  
  let getSectionLeft = document.querySelector('.left-content')
  getSectionLeft.parentNode.removeChild(getSectionLeft);

}
removeSectionLeft();

// Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;

function centralizeSectionRight() {
  
  let getSection = document.querySelector('.right-content')
  getSection.style.marginRight = 'auto';

}
centralizeSectionRight();

// Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;

function changeColorBackgroundSectionCenterGreen() {
 
  let getSectionCenter = document.querySelector('.center-content')
  getSectionCenter.style.backgroundColor = 'green';

}
changeColorBackgroundSectionCenterGreen();

// Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.

function removeItemListNineTen() {

  let getListItem = document.querySelectorAll('li')

  for (const index in getListItem) {

    if(getListItem[index].innerText  == 'nove' || 
    getListItem[index].innerText  == 'dez'){
      getListItem[index].parentNode.removeChild(getListItem[index])
    }

  }

  // FUNCIONOU MAIS NÃO É ESCALAVEL
  // for (const index in getListItem) {
  //   if ((getListItem.length - 3) < index) {
  //     getListItem[index].parentNode.removeChild(getListItem[index])
  //   }
  // }
}
removeItemListNineTen();
