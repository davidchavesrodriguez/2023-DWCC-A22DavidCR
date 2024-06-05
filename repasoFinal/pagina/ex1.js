function finalquiz(){
    let body= document.getElementsByTagName("body")[0];
    let newH1= document.createElement("h1");
    newH1.innerText= "So Long 130";
    body.appendChild(newH1);
    body.style.backgroundColor= "blue"
    let everyH1= document.getElementsByTagName("h1");
    Array.from(everyH1).forEach(h1 => {
        h1.style.color= "red"
    });
}

console.log(120+160+120+140+60+120);
console.log(157+175+88+53+157+53);

