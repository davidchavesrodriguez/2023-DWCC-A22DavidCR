// 2. Crea unha función frecha á que se lle pase un array e devolva como resultado un
// array cos elementos impares do array de entrada.
const arrayEntrada = [10, 2, 3, 5, 7, 8, 23, 50]
const arrayImpares= [];
const numerosImpares=(arrayEntrada)=> {
    for (const i of arrayEntrada) {
        if (i % 2 !==0)
        arrayImpares.push(i);
    }
    return arrayImpares;
}

console.log(numerosImpares(arrayEntrada));