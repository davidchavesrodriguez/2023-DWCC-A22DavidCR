// O innerHTML, innerText e textContent da etiqueta “Escolle sexo”
console.log(
  'A- O innerHTML, innerText e textContent da etiqueta “Escolle sexo”'
);

const pickSex = document.getElementsByTagName('label')[3];
console.log('Inner HTML:');
console.log(pickSex.innerHTML);

console.log('Inner Text:');
console.log(pickSex.innerText);

console.log('Text Content:');
console.log(pickSex.textContent);

// O valor do primeiro input de sexo
console.log('B- O valor do primeiro input de sexo');

const firstSex = pickSex.getElementsByTagName('input')[0].getAttribute('value');
console.log(firstSex);

// O valor do sexo que estea seleccionado
console.log('C- O valor do sexo que estea seleccionado');

const checkedSex = pickSex
  .querySelector('input[checked]')
  .getAttribute('value');
console.log(checkedSex);

// O texto de cada un dos elementos <li>
console.log('D- O texto de cada un dos elementos <li>');
const allLi = document.getElementsByTagName('li');
for (const element of allLi) {
  console.log(element.innerText);
}

// Indica cantos elementos <li> hai
console.log('E- Indica cantos elementos <li> hai');
const allLiCount = allLi.length;
console.log(allLiCount);

// Indica o valor do atributo data-widget-name
console.log('F- Indica o valor do atributo data-widget-name');
const dataWitgetNameValue =
  document.getElementsByTagName('div')[1].dataset.widgetName;
console.log(dataWitgetNameValue);
