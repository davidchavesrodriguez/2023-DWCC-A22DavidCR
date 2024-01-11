// No apartado “Funcións de callback personalizadas” móstrase un exemplo
// de execución de código asíncrono usando funcións de callback.
// Reescribe dito código para que a función createPosts() devolva unha
// promesa e fai que o resultado sexa equivalente.

const posts = [{ titulo: "Titulo 1" }, { titulo: "Titulo 2" }];
function createPost(post) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(posts.push(post));
    }, 2000);
  });
}
function getPosts() {
  setTimeout(() => {
    posts.forEach(function (post) {
      console.log(post);
    }, 1000);
  });
}
createPost({ titulo: "Titulo 3" }).then(getPosts);
