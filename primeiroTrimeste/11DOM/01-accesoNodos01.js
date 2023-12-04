//A- A táboa con id='age-table'
const idTable = document.getElementById('age-table');
console.log("A- A táboa con id='age-table'");
console.log(idTable);

//B- Todos os elementos label dentro da táboa (debería haber 3)
const allTableLabels = idTable.getElementsByTagName('label');
console.log('B- Todos os elementos label dentro da táboa (debería haber 3)');
console.log(allTableLabels);

//C- O primeiro td da táboa
const firstTableTd = idTable.querySelector('td');
console.log('C- O primeiro td da táboa');
console.log(firstTableTd);

//D- O form con name='search'
const formName = document.forms['search'];
console.log("D- O form con name='search'");
console.log(formName);

//E- O primeiro input do formulario anterior
const firstFormNameInput = formName.querySelector('input');
console.log('E- O primeiro input do formulario anterior');
console.log(firstFormNameInput);

//F- O último input do formulario do exercicio anterior
const allFormInputs = formName.querySelectorAll('input');
const lastFormNameInput = allFormInputs[allFormInputs.length - 1];
console.log('F- O último input do formulario do exercicio anterior');
console.log(lastFormNameInput);
