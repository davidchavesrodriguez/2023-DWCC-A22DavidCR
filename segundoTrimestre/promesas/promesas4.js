// Engade o código necesario á función delay(ms) para que devolva unha promesa que
// se resolva despois de pasados os milisegundos indicados como parámetro:
function delay(ms) {
    return new Promise(function(resolve){
        setTimeout(resolve, ms);
    })
}
delay(3000).then(() => console.log("Mensaxe obtida despois de 3 segundos"));
