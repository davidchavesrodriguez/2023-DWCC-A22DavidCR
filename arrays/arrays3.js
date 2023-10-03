// 3. Crea unha función á que se lle pase unha frase con varias palabras e devolva a
// mesma frase coa primeira letra de cada palabra en maiúsculas e o resto en
// minúsculas.
const frase = ['isamel', 'é', 'CULTURISTA'];
function maquetador(frase) {
  for (let i = 0; i < frase.length(); i++) {
    frase[i].slice(1);
  }
}
