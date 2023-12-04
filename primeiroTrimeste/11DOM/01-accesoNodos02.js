//A- O elemento con id “input2”
const secondId = document.getElementById('input2');
console.log("A- O elemento con id 'input2'");
console.log(secondId);

//B- A colección de parágrafos
const paragraph = document.getElementsByTagName('p');
console.log('B- A colección de parágrafos');
console.log(paragraph);

//C- Todos os parágrafos dentro do div con id “lipsum”
const lipsumDiv = document.getElementById('lipsum');
const lipsumDivParagraph = lipsumDiv.getElementsByTagName('p');
console.log("C- Todos os parágrafos dentro do div con id 'lipsum'");
console.log(lipsumDivParagraph);

//D- O formulario
const form = document.getElementsByTagName('form');
console.log('D- O formulario');
console.log(form);

//E- Todos os inputs
const inputs = document.getElementsByTagName('input');
console.log('E- Todos os inputs');
console.log(inputs);

//F- Só os inputs con nome “sexo”
const sexInputs = document.getElementsByName('sexo');
console.log("F- Só os inputs con nome 'sexo'");
console.log(sexInputs);

//G- Os items da lista con clase “important”
const importantItems = document.querySelectorAll('li.important');
console.log("G- Os items da lista con clase 'important'");
console.log(importantItems);
