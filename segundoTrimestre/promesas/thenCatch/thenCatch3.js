// ¿Cal é a saída do seguinte código? ¿Por que?
function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}
let promise = job(true);
promise
  .then(function (data) {
    console.log(data);
    return job(false);
  })
  .catch(function (error) {
    console.log(error);
    return "Error caught";
  })
  .then(function (data) {
    console.log(data);
    return job(true);
  })
  .catch((error) => console.log(error));

// A saída é "success", "error" e "Error caught". 