// 2. Garda nun array a lista de froitas: peras, mazás, kiwis, plátanos e mandarinas.
let frutas = ['peras', 'mazás', 'kiwis', 'plátanos', 'marandinas'];
// Fai os seguintes apartados con splice:
// a. Elimina as mazás.
frutas.splice(1, 1);
console.log(frutas);

// b. Engade detrás dos plátanos, laranxas e sandía.
frutas.splice(3, 0, 'laranxas', 'sandías');
console.log(frutas);

// c. Quita os kiwis e pon no seu lugar cereixas e nésperas.
frutas.splice(1, 1, 'cereixas', 'nésperas');
console.log(frutas);

// Despois de realizar cada operación, mostra por pantalla o array coa lista de froitas, onde os elementos estean separados por unha coma e espazo. Por exemplo,
// inicialmente o array debe mostrarse como “peras, mazás, kiwis, plátanos,
// mandarinas”.
console.log(frutas.join(', '));
