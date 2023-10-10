// 4. Traballando con obxectos:
// a. Crea un array de obxectos denominado “library”. Engade ao array 3 obxectos
// coas propiedades “title”, “author” e “status”. Inicializa os obxectos de tal forma
// que “title” e “author” teñan valores de tipo cadea (os que queiras) e “status”
// debe ser un obxecto coas propiedades “own”, “reading” e “read”, que serán
// de tipo booleano. Inicializa o obxecto status cos valores “own” e “reading” a
// true e “read” a false.
const library = [
  (bookFantasy = {
    title: 'The Final Empire',
    author: 'Brandon Sanderson',
    status: {
      own: true,
      reading: true,
      read: false,
    },
  }),
  (bookNovel = {
    title: 'Red Queen',
    author: 'Juan Gómez Jurado',
    status: {
      own: true,
      reading: true,
      read: false,
    },
  }),
  (bookScience = {
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    status: {
      own: true,
      reading: true,
      read: false,
    },
  }),
];

console.log(library);

// b. Unha vez inicializado o obxecto “library”, escribe as instrucións para modificar
// o valor de “read” a true para todos os obxectos do array. (Non modifiques a
// inicialización do array orixinal)
// c. Utilizando a desestruturación de obxectos, almacena na variable “firstBook” o
// valor do título do primeiro libro.

// d. Escribe unha instrución para converter a string o obxecto “library”.
console.log(JSON.stringify(library));
