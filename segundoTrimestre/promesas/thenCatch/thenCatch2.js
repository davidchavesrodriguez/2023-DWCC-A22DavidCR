// ¿Cal é a saída do seguinte código? ¿Por que?
function job() {
  return new Promise(function (resolve, reject) {
    reject();
  });
}
let promise = job();
promise
  .then(() => console.log("Success 1"))
  .then(() => console.log("Success 2"))
  .then(() => console.log("Success 3"))
  .catch(() => console.log("Error 1"))
  .then(() => console.log("Success 4"));

// A saída é "Error 1" e "Success 4" xa que imprime o resultado do
// catch ao rejectearse a promesa e despois o then final