const axios= require("axios");

async function getPost() {
    const result= await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1"
    );
    console.log(result.data);   
}

getPost();