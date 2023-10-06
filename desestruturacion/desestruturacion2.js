/*2. Dado un array con nomes de variables formados por dúas palabras separadas por
“_”, fai as operacións necesarias para mostrar por consola os nomes das variables
en formato camelCase. Por exemplo, se o array de entrada é [“first_name”, “
last_NAME”], deberase mostrar por consola “firtsName” e “lastName”.*/
let nomes = ['julio_aller', 'ISAMEL_lens', 'diego_RIANXO'];
for (let index = 0; index < nomes.length; index++) {
  let [palabra1, palabra2] = nomes[index].split('_');
  console.log(
    `${palabra1.toLowerCase()}${
      palabra2.charAt(0).toUpperCase() + palabra2.slice(1).toLowerCase()
    }`
  );
}
