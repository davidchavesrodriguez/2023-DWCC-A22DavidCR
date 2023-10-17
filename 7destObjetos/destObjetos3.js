// 3. Dado o seguinte obxecto:
const game = {
  scored: ['Lewandowski', 'Gnabry', 'Lewandowski', 'HummelsPP'],
};

// a. Recorre o array game.scored e mostra por pantalla información do xogador
// que marcou e o número de gol marcado. Exemplo: “Gol 1: Lewandowski”.
let numeroGol = 1;
for (const xogador of game.scored) {
  console.log(`Gol ${numeroGol} de ${xogador}`);
  numeroGol++;
}

// b. Crea un novo obxecto chamado scorers que conteña o nome dos xogadores
// que marcaron e o número de goles que marcaron como valor. Neste exemplo
// sería algo así: {Lewandowski: 2, Gnarby: 1, Hummels: 1}
const scorers = {
  Lewandowski: 2,
  Gnabry: 1,
  HummelsPP: 1,
};
console.log(scorers);
