// Utilizando XMLHttpRequest, descarga o ficheiro JSON con información
// sobre gatas e a súa descendencia e crea unha páxina web coa
// información recibida. Debes mostrar o nome das gatas separados
// por comas. Antes do último nome debe ir a conxunción “e” e ao
// final un punto. O texto debe quedar así: “Os nomes das gatas son
// Lindy, Mina e Antonia.”. Ademais, debes mostrar información
// do número de gatiños, indicando cantos deles
// son femias e cantos machos: “Hai 8 gatiños: 5 femias e 3 machos.”

const xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  "https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json"
);

xhr.responseType = "json";
xhr.send();

xhr.onload = function () {
  const gatas = xhr.response;

  const nombresGatas = gatas.map(gata => gata.name);

  let nomeGatas = "Os nomes das gatas son ";
    nomeGatas += nombresGatas.slice(0, -1).join(", ") + " e " + nombresGatas.slice(-1);

  console.log(nomeGatas);

  let totalGatiños = 0;
  let femias = 0;
  let machos = 0;

  gatas.forEach(gata => {
    totalGatiños += gata.kittens.length;
    gata.kittens.forEach(gatiño => {
      if (gatiño.gender === "f") {
        femias++;
      } else if (gatiño.gender === "m") {
        machos++;
      }
    });
  });

  console.log(`Hai ${totalGatiños} gatiños: ${femias} femias e ${machos} machos.`);
};


