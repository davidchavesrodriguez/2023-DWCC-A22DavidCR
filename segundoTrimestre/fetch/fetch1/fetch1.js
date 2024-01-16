// Neste exercicio vaise usar a API https://jsonplaceholder.typicode.com/
// que contén, entre outras cousas, información falsa de posts e comentarios.
// Primeiramente debes analizar as rutas dispoñibles da API e o formato
// da resposta.
// Debes elaborar unha páxina web que conteña un formulario con un campo
// input, para introducir o id dun usuario (un número entre 1 e 10), e un botón.
// Ao pulsar o botón, farase unha petición ao servidor para que
// devolva todos os posts do usuario indicado no formulario.
// Así, por exemplo, para o usuario con id = 1,
// a url de consulta será https://jsonplaceholder.typicode.com/posts?userId=1.
// Tamén é válida a URL https://jsonplaceholder.typicode.com/users/1/posts.
// Coa información recibida debe crearse unha táboa e mostrar na
// páxina web toda a información dos posts do usuario que teña
// o id indicado no formulario.
// Isto debe suceder sen necesidade de recargar a páxina web.

function getPosts() {
  let campoNumero = document.getElementById("numero");
  let valorNumero = campoNumero.value;
  let body = document.getElementsByTagName("body")[0];
  let table = document.createElement("table");
  body.appendChild(table);
  fetch(`https://jsonplaceholder.typicode.com/users/${valorNumero}/posts`)
    .then((response) => response.json())
    .then((json) =>
      json.forEach((post) => {
        let tr = document.createElement("tr");
        let userId = document.createElement("td");
        let id = document.createElement("td");
        let title = document.createElement("td");
        let bodyElement = document.createElement("td");

        userId.innerText = post.userId;
        id.innerText = post.id;
        title.innerText = post.title;
        bodyElement.innerText = post.body;

        table.appendChild(tr);
        tr.appendChild(userId);
        tr.appendChild(id);
        tr.appendChild(title);
        tr.appendChild(bodyElement);
      })
    );
}

let botoncito= document.getElementById("click");
botoncito.addEventListener("click", ()=>{
      getPosts();
      
})
