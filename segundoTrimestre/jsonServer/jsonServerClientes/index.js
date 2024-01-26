let clientButton = document.getElementById("clientButton");
let searchInputValue = document.getElementById("client");
let main = document.getElementsByTagName("main")[0];
let article = document.getElementsByTagName("article")[0];

clientButton.addEventListener("click", () =>
  consultByPhoneNumber(searchInputValue.value)
);

// get client by phone number
async function consultByPhoneNumber(phoneNumber) {
  try {
    let response = await fetch(
      `http://localhost:3000/clients?phoneNumber=${phoneNumber}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    article.innerHTML = "";

    // this returns an array
    let data = await response.json();
    // so we get the object inside it
    let client = data[0];
    for (const value in client) {
      let fieldKey = document.createElement("h3");
      fieldKey.innerText = `${value}: ${client[value]}`;
      article.appendChild(fieldKey);
    }

    let newForm = document.createElement("form");
    article.appendChild(newForm);

    let newOrderField = document.createElement("input");
    newOrderField.type = "text";
    newForm.appendChild(newOrderField);

    let newOrderButton = document.createElement("button");
    newOrderButton.type = "button";
    newOrderButton.innerText = "[X]";
    newForm.appendChild(newOrderButton);

    newOrderButton.addEventListener("click", () => {
      addNewOrder();
    });
  } catch (error) {
    console.error("Error:", error);
  }
}


// REVISAR

async function addNewOrder(post) {
  try {
    let response = await fetch("http://localhost:3000/orders", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-type": "application/json;charset=utf-8",
      },
    });
    let data = await response.json();
    console.log(data);
  } catch (error) {
    return error;
  }
}
const newPost = {
  clientName: `${searchInputValue[0]}`,
  title: `${searchInputValue[1]}`,
  description: `${newOrderField.value}`
};
