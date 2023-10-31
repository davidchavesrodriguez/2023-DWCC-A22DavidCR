// A táboa con id="age-table".
const idTable= document.getElementById("age-table");

// Todos os elementos label dentro da táboa (debería haber 3).
const allTableLabels= idTable.getElementsByTagName("label");

// O primeiro td da táboa.
const firstTableTd= idTable.querySelector("td");

// O form con name="search".
const formName= document.forms["search"];

// O primeiro input do formulario anterior.
const firstFormNameInput= formName.querySelector("input");

// O último input do formulario do exercicio anterior.
const allFormInputs= formName.querySelectorAll("input");
const lastFormNameInput= allFormInputs[allFormInputs.length -1];