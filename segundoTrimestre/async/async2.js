// Crea unha páxina web con un título (h1) e dous botóns. 
// Un dos botóns debe iniciar un intervalo que cambie alternativamente 
// cada segundo a cor do título h1 alternando entre dúas cores, 
// as que escollas. 
// O outro botón debe deter o intervalo e parar o cambio de cores.

let startButton= document.getElementById("start");
let stopButton= document.getElementById("stop");
let title= document.getElementsByTagName("h1")[0];


function party(){
    if (title.classList.contains("red"){
        
    })
}

function startParty(){
    setInterval(party, 100);
}
startParty()