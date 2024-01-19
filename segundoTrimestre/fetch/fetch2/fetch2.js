// Utilizando a API https://jsonplaceholder.typicode.com/ crea unha páxina web que
// permita xestionar as tarefas (https://jsonplaceholder.typicode.com/todos).
// A API contén información falsa de 200 tarefas. Para este exercicio escollerase
// trabalar só as 10 primeiras (https://jsonplaceholder.typicode.com/todos?_limit=10).

// A páxina web a crear debe permitir crear, ler, actualizar e borrar tarefas, polo que se
// deberán facer as peticións apropiadas ao servidor, aínda que realmente non se vaia
// modificar a base de datos, senón que se simularán as operacións para practicar. A
// páxina será capaz de mostrar a información modificada mentres non se recargue.
// Unha vez se recargue, mostrará a información almacenada no servidor.
// Inicialmente, cando a páxina se cargue por primeira vez, mostraranse os títulos das
// 10 primeiras tarefas. Utilizando estilos CSS, deben mostrarse de forma diferente as
// tarefas completadas das que aínda non o están.

// Ademais, a páxina, debe ofrecer a seguinte funcionalidade:
//     ● Un formulario para engadir tarefas. Ao enviar o formulario, realizarase unha
// petición POST ao servidor simulando a creación dunha nova tarefa. O
// servidor devolverá a información da nova creada, que se mostrará na páxina
// web xunto co resto de tarefas.
//     ● A páxina debe permitir modificar unha tarefa de completada a non
// completada e viceversa. Debe facerse a solicitude de modificación ao
// servidor, indicando o id da tarefa a modificar.
//     ● A páxina web debe permitir eliminar tarefas. Neste caso tamén debe facerse
// a solicitude ao servidor.
// Consultar a guía da API onde se exemplifica como xestionar os posts. Neste
// exercicio faranse as operacións equivalentes, mais con tarefas (todos).

let postButton = document.getElementsByTagName("button")[0];
let taskDiv = document.getElementById("tasks");
let doneDiv = document.getElementById("doneTasks");
let removeButton= document.getElementById("removeButton");

//GET
fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
  .then((response) => response.json())
  .then((json) => {
    json.forEach((task) => {
      let title = document.createElement("div");
      let deleteButton= document.createElement("div");
      deleteButton.innerText= "REMOVE"
      deleteButton.classList.add("deleteButton");
      title.innerText = task.title;
      title.classList.add("task");
      title.classList.add("todo");
      title.setAttribute("id", task.id);
      title.appendChild(deleteButton);
      taskDiv.appendChild(title);
    });
    taskDiv.addEventListener("click", handleTaskClick);
    doneDiv.addEventListener("click", handleTaskClick);
    doneDiv.addEventListener("click", toggleClass);
    taskDiv.addEventListener("contextmenu", patchTask);
    doneDiv.addEventListener("contextmenu", patchTask);
    postButton.addEventListener("click", postTask);
  });

// TOGGLE DONE/TODO
function toggleClass(event) {
  if (event.target.classList.contains("task")) {
    event.target.classList.toggle("todo");
    event.target.classList.toggle("done");
  }
  if (
    event.target.classList.contains("done") &&
    event.target.tagName === "DIV"
  ) {
    doneDiv.appendChild(event.target);
  }
  if (
    event.target.classList.contains("todo") &&
    event.target.tagName === "DIV"
  ) {
    taskDiv.appendChild(event.target);
  }
}

// DELETE
function deleteTask(event) {
  const taskElement = event.target.closest(".task");
  if (taskElement) {
    const taskId = taskElement.id;
    fetch(`https://jsonplaceholder.typicode.com/todos/${taskId}`, {
      method: "DELETE",
    }).then((response) => {
      taskElement.classList.add("hidden");
      console.log(response);
    });
  }
}

// POST
function postTask(event) {
  let postField = document.getElementById("taskInput");
  let title = document.createElement("div");
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: postField.value,
      body: postField.value,
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      let deleteButton= document.createElement("div");
      deleteButton.innerText= "REMOVE"
      deleteButton.classList.add("deleteButton");
      title.innerText = postField.value;
      title.classList.add("task");
      title.classList.add("todo");
      taskDiv.appendChild(title);
      title.appendChild(deleteButton);
    });
}

// PATCH
function patchTask(event) {
  event.preventDefault();
  const taskElement = event.target.closest(".task");
  if (taskElement) {
    let postField = document.getElementById("taskInput");
    const taskId = taskElement.id;
    fetch(`https://jsonplaceholder.typicode.com/todos/${taskId}`, {
      method: "PUT",
      body: JSON.stringify({
        id: 1,
        title: postField.value,
        body: postField.value,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        taskElement.innerText = postField.value;
        let title= event.target.closest(".task");
        let deleteButton= document.createElement("div");
        deleteButton.innerText= "REMOVE"
        deleteButton.classList.add("deleteButton");
        title.appendChild(deleteButton);
      });


  }
}

// TOGGLE/DELETE
function handleTaskClick(event) {
  const clickedElement = event.target;

  if (clickedElement.classList.contains("deleteButton")) {
    deleteTask(event);
  } else if (clickedElement.classList.contains("task")) {
    toggleClass(event);
  }
}