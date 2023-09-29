/* 4. Crea unha función que dado o radio dun círculo, devolva a súa área. E fai outra
función que reciba o radio e devolva o perímetro do círculo. Mostra por consola o
resultado das funcións usando dúas cifras decimais. */
function circulito(radio) {
  let area = Math.PI * Math.pow(radio, 2);
  let perimetro = 2 * Math.PI * radio;

  console.log(`A área é de ${area.toFixed(2)} m²`);
  console.log(`O perímetro é de ${perimetro.toFixed(2)} m`);
}

circulito(3);
