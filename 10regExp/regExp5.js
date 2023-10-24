// 5. Crea unha función que comprobe se un contrasinal é válido, é dicir, cumpre as
// seguintes condicións:
// a. Mínimo 8 caracteres.
// b. Sen espazos en branco.
// c. Que teña, polo menos, 3 das seguintes tipos de caracteres:
// i. maiúsculas
// ii. minúsculas
// iii. números
// iv. caracteres especiais: ¡!$?%&#@/\()=¿?*[];,:._<>+-
function validPassword(password) {
  if (password.length < 8) {
    return false;
  }
  if (/\s/.test(password)) {
    return false;
  }
  let counter = 0;
  if (/[A-Z]/.test(password)) {
    counter++;
  }
  if (/[a-z]/.test(password)) {
    counter++;
  }
  if (/[0-9]/.test(password)) {
    counter++;
  }
  if (/[¡!$?%&#@/\()=¿?*[\];,:._<>+-]/.test(password)) {
    counter++;
  }
  if (counter < 3) {
    return false;
  }
  return true;
}

console.log(validPassword("julio"));
console.log(validPassword("Julio guay"));
console.log(validPassword("JulioProfe"));
console.log(validPassword("Julio o meu compañeiro 19"));
console.log(validPassword("Julio22?"));
console.log(validPassword("CDam,cjkbdjhkbjhk"));