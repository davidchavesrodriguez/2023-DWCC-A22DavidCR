// 4. Crea unha función á que se lle pasen varios números como parámetros (un número
// indeterminado de parámetros) e que devolva a media deses números.
let media=0;
const facerMedia= (...valores)=>{
    for (const valor of valores) {
        media+=valor/valores.length;
    }
    return media;
};

console.log(facerMedia(1, 2, 3, 4));


