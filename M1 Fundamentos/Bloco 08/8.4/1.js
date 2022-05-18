// 1 - Dada uma matriz, transforme em um array.
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(arrArrays) {
  // let newArray = []
  return arrArrays.reduce((accumulator, element) => {
    return accumulator.concat(element)
  }, [])
}
flatten(arrays)

// Para os exercícios 2, 3 e 4 considere o seguinte array:
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
// 2 - Crie uma string com os nomes de todas as pessoas autoras.
// const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";
function reduceNames(arrBooks) {
  return arrBooks.map((element) => {
    return ((element.author).name)
  }).reduce((accumulator, element) => accumulator.concat(`${element}, `), "").slice(0, -2)
}
reduceNames(books)

    // function reduceNames(arrBooks) {
    //   return arrBooks.map((element) => {
    //     return ((element.author).name)
    //   }).reduce((accumulator, element) => `${accumulator}, ${element}`)
    // }
    // reduceNames(books)

    // function reduceNames(arrBooks) {
    //   return arrBooks.map((element) => {
    //     return ((element.author).name)
    //   }).join(', ')
    // }
    // console.log(reduceNames(books));

// 🚀 3- Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
// const expectedResult = 43;
function averageAge(arrBooks) {
  return arrBooks.map((element) => {
    return element.releaseYear - (element.author).birthYear;
  }).reduce((accumulator, elementConcat) => accumulator + elementConcat, 0)/arrBooks.length
}
averageAge(books)

// 🚀 4- Encontre o livro com o maior nome.
// const expectedResult = {
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   genre: 'Fantasia',
//   author: {
//     name: 'George R. R. Martin',
//     birthYear: 1948,
//   },
//   releaseYear: 1991,
// };

function longestNamedBook(arrBooks) {
  return arrBooks.reduce((accumulator, elementConcat) => {
    // console.log(`${accumulator.name.length} < ${elementConcat.name.length}`);
    return elementConcat.name.length > accumulator.name.length ? elementConcat : accumulator
  });
}
longestNamedBook(books)

// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(arrNames) {
  return `A: ${arrNames.join('').split('').filter((element) => element === 'A').join('').length}, a: ${arrNames.join('').split('').filter((element) => element === 'a').join('').length}, Aa: ${arrNames.join('').split('').filter((element) => element === 'A' || element === 'a').join('').length}`
}
containsA(names)

// 🚀 6.*
// const expected = [
//   { name: 'Pedro Henrique', average: 7.8 },
//   { name: 'Miguel', average: 9.2 },
//   { name: 'Maria Clara', average: 8.8 },
// ];
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(arrStudents, arrGrades) {
  return arrGrades.map((element, index) => {
    const average = element.reduce((accumulator, current) => {
      return (accumulator + current)
    }, 0)
    return { name: arrStudents[index], average: average/(arrGrades[index].length) }
  })
}
studentAverage(students, grades)



