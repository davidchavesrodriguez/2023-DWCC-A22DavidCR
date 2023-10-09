/* 1. Dada a seguinte constante, fai as operacións necesarias para que o primeiro
carácter estea en maiúscula: */
const cadea = 'desenvolvemento web';
let novaCadea = `${cadea.toUpperCase().charAt(0)}${cadea.slice(1)}`;
console.log(novaCadea); // 'Desenvolvemento web'
