// 3. Crea unha función frecha que sume todos os valores pasados como parámetros,
// sendo estes un número indeterminado.
let sumaFinal=0;
const sumarValores= (...valores)=>{
    for (const valor of valores) {
        sumaFinal+=valor;
    }
    return sumaFinal;
};

console.log(sumarValores(1, 2, 3, 6, 21));


