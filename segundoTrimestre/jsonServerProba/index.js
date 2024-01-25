function createPost(post) {
  fetch("http://localhost:3000/posts", {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json;charset=utf-8",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log("Erro " + error));
}
const newPost = { id: "3", title: "Novo título" };
createPost(newPost);
