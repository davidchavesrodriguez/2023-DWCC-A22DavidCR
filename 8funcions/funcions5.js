// 5. Crea unha función frecha chamada minMax() que reciba como parámetro un array
// de números e devolva un obxecto co valor mínimo e máximo do array de entrada:

const minMax= (a)=> ({
    min: Math.min.apply(this, a),
    max: Math.max.apply(this, a)
});

console.log(minMax([1, 2, 3, 4, 5, 32478, -6]));
