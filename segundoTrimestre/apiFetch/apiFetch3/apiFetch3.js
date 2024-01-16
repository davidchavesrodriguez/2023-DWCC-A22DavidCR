// Crea unha páxina web que mostre información de persoas recibida da
// API RANDOM USER GENERATOR.
// Esta API permite xerar información aleatoria de persoas.
// Debes solicitar á URL https://randomuser.me/api/ información en formato
// JSON e mostrar na páxina web o nome e apelidos, correo electrónico, teléfono,
// cidade, país, idade e foto da información recibida.
// Cando se cargue a páxina por primira vez debe mostrar información
// dunha persoa aleatoria.
// Engade un botón á páxina que permita cargar os datos doutra persoa.

let loginPetition = fetch("https://randomuser.me/api");
loginPetition
  .then((response) => response.json())
  .then((data) => {
  let body= document.getElementsByTagName("body")[0];
  let proba= document.createElement("p");
  proba.innerText= data.results[0].name.first;
  console.log(proba);
  

  body.appendChild(proba);
  });


