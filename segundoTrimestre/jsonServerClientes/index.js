let clientButton = document.getElementById("clientButton");
let searchInputValue = document.getElementById("client");
let main= document.getElementsByTagName("main")[0];
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
    // this returns an array
    let data = await response.json();
    // so we get the object inside it
    let client= data[0]    
    for (const value in client) {
      let popup= document.createElement("article");
      
      console.log(`${value}: ${client[value]}`);
      
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
