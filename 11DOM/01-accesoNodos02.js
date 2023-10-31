// O elemento con id “input2”.
const secondId= document.getElementById("input2");

// A colección de parágrafos
const paragraph= document.getElementsByTagName("p");

// Todos os parágrafos dentro do div con id “lipsum”.
const lipsumDiv= document.getElementById("lipsum");
const lipsumDivParagraph= lipsumDiv.getElementsByTagName("p");

// O formulario
const form= document.forms;

// Todos os inputs
const inputs= document.getElementsByTagName("input");

// Só os inputs con nome “sexo”.
const sexInputs= document.querySelectorAll("input[name='sexo']");

// Os items da lista con clase “important”.
const importantItems= document.querySelectorAll("li[class='important']");