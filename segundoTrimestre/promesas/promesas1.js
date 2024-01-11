// Crea unha función á que se lle pase un parámetro e que devolva unha promesa.
// A promesa debe resolverse despois de tres segundos dende que se chamou
// á función e debe devolver o parámetro pasado á función.

function promiseFunction(param) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(param);
    }, 3000);
  });
}

promiseFunction("Promesa").then((param) => {
  console.log(param);
});
