// 1. Dado o seguinte array:
const persoas = [
  { nome: "aaron", idade: 65 },
  { nome: "beth", idade: 2 },
  { nome: "ánxeles", idade: 13 },
  { nome: "daniel", idade: 3 },
  { nome: "ada", idade: 25 },
  { nome: "erea", idade: 1 },
  { nome: "navia", idade: 43 },
];
// a. Crea un novo array que conteña só as persoas maiores de idade.
const maioresDeEdad = persoas.filter((persoa) => persoa.idade >= 18);
console.log("A- ");
console.log(maioresDeEdad);

// b. Crea un novo array que conteña os nomes de todas as persoas.
const nomePersoas = persoas.map((persoas) => persoas.nome);
console.log("B- ");
console.log(nomePersoas);

// c. Crea un novo array que conteña os nomes das persoas maiores de idade en
// maiúsculas.
const maioresDeEdadMayus = maioresDeEdad.map((persoas) =>
  persoas.nome.toUpperCase()
);
console.log("C- ");
console.log(maioresDeEdadMayus);

// d. Crea un novo array que conteña obxectos só co id e o nome das persoas.
const idNome = persoas.map((persoa, index) => {
  return { id: index + 1, nome: persoa.nome };
});
console.log("D- ");
console.log(idNome);
