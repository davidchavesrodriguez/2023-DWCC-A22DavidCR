// 6. Crea unha función autoinvocada á que se lle pase a lonxitude e ancho dun
// rectángulo. A función debe mostrar por consola unha mensaxe indicando o valor da
// área do rectángulo.
const rectangulo= (function (){
    const base=5;
    const altura=4;
    const areaRectangulo= base*altura;
    return areaRectangulo;
})();
console.log(rectangulo);
