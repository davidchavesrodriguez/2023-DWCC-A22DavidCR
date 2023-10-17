'use strict';
// Ejercicio: Calculadora de edad promedio

// a. Crea tres variables para almacenar la edad de tres personas.
let edadIsamel = 24;
let edadRianxo = 19;
let edadJulio = 21;

// b. Calcula la edad promedio de las tres personas y almacénala en una variable.
let edadMedia = (edadIsamel + edadRianxo + edadJulio) / 3;

// c. Determina cuál de las tres personas tiene una edad más cercana al promedio y guárdalo en una variable.
let edadMaisPromedio;
if (Math.abs(edadIsamel - edadMedia) < Math.abs(edadJulio - edadMedia)) {
  if (Math.abs(edadIsamel - edadMedia) < Math.abs(edadRianxo - edadMedia)) {
    edadMaisPromedio = 'Isamel';
  } else {
    edadMaisPromedio = 'Rianxo';
  }
} else {
  if (Math.abs(edadJulio - edadMedia) < Math.abs(edadRianxo - edadMedia)) {
    edadMaisPromedio = 'Julio';
  } else {
    edadMaisPromedio = 'Rianxo';
  }
}

console.log(`${edadMaisPromedio} é o máis cercano á media!.`);

// Ejercicio: Calculadora de velocidad promedio

// a. Crea tres variables para almacenar la distancia recorrida (en kilómetros) por tres vehículos diferentes.
let distanciaAstonMartin = 333;
let distanciaFerrari = 350;
let distanciaRedBull = 400;

// b. Crea tres variables adicionales para almacenar el tiempo que tardaron (en horas) esos vehículos en recorrer la distancia.
let tempoAstonMartin = 1.2;
let tempoFerrari = 1.33;
let tempoRedBull = 1.15;

// c. Calcula la velocidad promedio de cada vehículo (velocidad = distancia / tiempo) y almacena estos valores en nuevas variables.
let velocidadAstonMartin = (distanciaAstonMartin / tempoAstonMartin).toFixed(2);
let velocidadFerrari = (distanciaFerrari / tempoFerrari).toFixed(2);
let velocidadRedBull = (distanciaRedBull / tempoRedBull).toFixed(2);

// d. Muestra las tres velocidades y determina el ganador de la carrera
console.log(`A velocidad de Alonso é de ${velocidadAstonMartin} km/h.`);
console.log(`Sainz móvese a ${velocidadFerrari} km/h.`);
console.log(`Verstappen voa cunha velocidad de ${velocidadRedBull} km/h.`);
if (
  velocidadAstonMartin > velocidadFerrari &&
  velocidadAstonMartin > velocidadRedBull
) {
  console.log(`33!`);
} else if (
  velocidadFerrari > velocidadAstonMartin &&
  velocidadFerrari > velocidadRedBull
) {
  console.log(`Victoria de Sainz`);
} else {
  console.log(`Gañou Verstappen de novo...`);
}
