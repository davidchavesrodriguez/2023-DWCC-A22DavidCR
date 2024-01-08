// Crea unha páxina web con un título (h1) e dous botóns. 
// Un dos botóns debe iniciar un intervalo que cambie alternativamente 
// cada segundo a cor do título h1 alternando entre dúas cores, 
// as que escollas. 
// O outro botón debe deter o intervalo e parar o cambio de cores.

let startButton = document.getElementById("start");
        let stopButton = document.getElementById("stop");
        let title = document.getElementById("title");
        let intervalId;

        function party() {
            if (title.classList.contains("red")) {
                title.classList.remove("red");
                title.classList.add("blue");
            } else {
                title.classList.remove("blue");
                title.classList.add("red");
            }
        }

        function startParty() {
            clearInterval(intervalId);
            intervalId = setInterval(party, 1000);
        }

        function stopParty() {
            clearInterval(intervalId);
        }

        startButton.addEventListener("click", startParty);
        stopButton.addEventListener("click", stopParty);