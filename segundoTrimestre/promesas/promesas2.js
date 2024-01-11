// Crea unha función que reciba un parámetro. A función debe devolver sempre unha
// promesa.
// a. Se o parámetro non é un número, debe rexeitar a promesa inmediatamente e
// devolver unha mensaxe indicando que “Erro. O parámetro non é un número”.
// b. Se o parámetro é un número impar, debe resolver a promesa despois de 1
// segundo e devolver “impar”.
// c. Se o parámetro é un número par, debe rexeitar a promesa despois de 2
// segundos e devolver “par”.
function promesaNumerosa(param) {
  return new Promise(function (resolve, reject) {
    if (typeof param !== "number") {
      reject("Erro. O parámetro non é un número");
    }
    if (param % 2 !== 0) {
      setTimeout(() => {
        resolve("O número é impar");
      }, 1000);
    } else {
      setTimeout(() => {
        reject("O número é par");
      }, 2000);
    }
  });
}

promesaNumerosa("Isamel").then(
  (resolve) => console.log(resolve),
  (reject) => console.log(reject)
);
promesaNumerosa(13).then(
  (resolve) => console.log(resolve),
  (reject) => console.log(reject)
);
promesaNumerosa(4).then(
  (resolve) => console.log(resolve),
  (reject) => console.log(reject)
);
