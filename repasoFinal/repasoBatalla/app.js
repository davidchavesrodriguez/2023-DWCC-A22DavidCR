// Definición variables e barras de vida
let barraVidaMonstro = document.getElementsByClassName("healthbar__value")[0];
let barraVidaXogador = document.getElementsByClassName("healthbar__value")[1];
let vidaMonstro;
let vidaXogador;
let contadorEspecial;

let danoMonstro;
let danoXogador;
let recuperacionXogador;

let botonAtaque = document.querySelector("#controls button:nth-of-type(1)");
let botonEspecial = document.querySelector("#controls button:nth-of-type(2)");
let botonCuracion = document.querySelector("#controls button:nth-of-type(3)");
let botonRenderse = document.querySelector("#controls button:nth-of-type(4)");
let rendicion = false;

let contenedorFinal = document.getElementsByClassName("container")[2];
let textoFinal = contenedorFinal.querySelector("h2");
let textoDerrota = contenedorFinal.querySelector("h3:nth-of-type(1)");
let textoVictoria = contenedorFinal.querySelector("h3:nth-of-type(2)");
let textoEmpate = contenedorFinal.querySelector("h3:nth-of-type(3)");
let botonXogoNovo = contenedorFinal.querySelector("button");

let containerMovimientos = document.getElementById("controls");

let arrayRexistro = [];

// Asignación de funcións
botonAtaque.addEventListener("click", ataque);
botonEspecial.addEventListener("click", especial);
botonCuracion.addEventListener("click", curacion);
botonXogoNovo.addEventListener("click", inicioXogo);
botonRenderse.addEventListener("click", () => {
  rendicion = true;
  finalXogo();
});

// NOVA PARTIDA
inicioXogo();

// Funcións
// Función inicio do xogo
function inicioXogo() {
  vidaMonstro = 100;
  vidaXogador = 100;
  contadorEspecial = 3;
  contenedorFinal.classList.add("hidden");
}

// Función final do xogo
function finalXogo() {
  if (vidaMonstro === 0 && vidaXogador === 0) {
    contenedorFinal.classList.add("visible");
    textoDerrota.classList.add("hidden");
    textoVictoria.classList.add("hidden");
    containerMovimientos.style.display = "none";
  } else {
    if (vidaMonstro === 0) {
      contenedorFinal.classList.add("visible");
      textoEmpate.classList.add("hidden");
      textoDerrota.classList.add("hidden");
      containerMovimientos.style.display = "none";
    }
    if (vidaXogador === 0 || rendicion === true) {
      contenedorFinal.classList.add("visible");
      textoVictoria.classList.add("hidden");
      textoEmpate.classList.add("hidden");
      containerMovimientos.style.display = "none";
    }
  }
}

// Función final de turno
function finalTurno() {
  rematarVida();
  barraVidaMonstro.style.width = `${vidaMonstro}%`;
  barraVidaXogador.style.width = `${vidaXogador}%`;

  // Usar especial solo cada tres turnos
  contadorEspecial++;
  if (contadorEspecial > 3) {
    contadorEspecial = 1;
  }
  if (contadorEspecial % 3 !== 0) {
    botonEspecial.classList.add("disabled");
  } else {
    botonEspecial.classList.remove("disabled");
  }
  console.log(contadorEspecial);
  let arrayMostrado = arrayRexistro.slice(-6).reverse();
  let logAtaques = document.querySelector("#log ul");
  logAtaques.innerHTML = "";
  arrayMostrado.forEach((movimiento) => {
    let novoRexistro = document.createElement("li");
    novoRexistro.innerHTML = `${movimiento}`; 
    logAtaques.appendChild(novoRexistro);
  });

  finalXogo();
}

// Generador de números aleatorios entre dous valores
function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

// Golpe de gracia
function rematarVida() {
  if (vidaMonstro < 0) {
    vidaMonstro = 0;
  }

  if (vidaXogador < 0) {
    vidaXogador = 0;
  }
}

// Ataque
function ataque() {
  danoMonstro = getRandomIntInclusive(5, 12);
  danoXogador = getRandomIntInclusive(8, 15);
  vidaMonstro -= danoMonstro;
  vidaXogador -= danoXogador;
  arrayRexistro.push(`<p class="log--monster">Monstro ataca con ${danoXogador}</p>`);
  arrayRexistro.push(`<p class="log--player">Vostede ataca con ${danoMonstro}</p>`);
  finalTurno();
}

// Especial
function especial() {
  if (contadorEspecial % 3 === 0) {
    danoMonstro = getRandomIntInclusive(10, 25);
    danoXogador = getRandomIntInclusive(8, 15);
    vidaMonstro -= danoMonstro;
    vidaXogador -= danoXogador;
    arrayRexistro.push(`<p class="log--monster">Monstro ataca con ${danoXogador}</p>`);
    arrayRexistro.push(`<p class="log--player">Vostede ataca con ${danoMonstro}</p>`);
    finalTurno();
  }
}

// Curación
function curacion() {
  recuperacionXogador = getRandomIntInclusive(8, 20);
  danoXogador = getRandomIntInclusive(8, 15);
  vidaXogador += recuperacionXogador;
  if (vidaXogador > 100) {
    vidaXogador = 100;
  }
  vidaXogador -= danoXogador;
  arrayRexistro.push(`<p class="log--monster">Monstro ataca con ${danoXogador}</p>`);
  arrayRexistro.push(`<p class="log--heal">Vostede recuperase ${recuperacionXogador}</p>`);
  finalTurno();
}
