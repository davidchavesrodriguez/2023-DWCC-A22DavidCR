/* 6. Cálculo do IMC (índice de masa corporal). IMC = peso (kg) / [estatura (m)]2
    a. Almacena en variables o peso e altura de dúas persoas.
    b. Calcula o IMC das dúas persoas.
    c. Indica que persoa ten o maior IMC cunha cadea similar a: 'O IMC (25.3) da
    primeira persoa é maior que o da segunda persoa (22.5)!' */

let pesoIsamel = 68.4;
let alturaIsamel = 1.6;
let pesoJulio = 75;
let alturaJulio = 1.98;

let imcIsamel = (pesoIsamel / alturaIsamel ** 2).toFixed(2);
let imcJulio = (pesoJulio / alturaJulio ** 2).toFixed(2);
if (imcIsamel > imcJulio) {
  console.log(
    'O IMC de Isamel (' + imcIsamel + ') é maior ao de Julio (' + imcJulio + ')'
  );
} else {
  'O IMC de Julo (' + imcJulio + ') é maior ao de Isamel (' + imcIsamel + ')';
}
