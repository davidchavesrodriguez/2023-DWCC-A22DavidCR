// Batalla.
// Descarga o código base e realiza as modificacións propostas usando Vue.
// Recoméndase que a lóxica da aplicación vaia no ficheiro JavaScript
// e non no HTML:
//     a. Tanto a vida do monstro como a da persoa que xoga terá
//     valores entre 0 - 100. É dicir, o valor de vida non pode ser un
//     número negativo nin superar o valor 100. Debe comprobarse en
//     todo momento que está no rango permitido. Para visualizalo de
//     forma gráfica establecerase o valor correspondente na propiedade
//     width de CSS no <div class=”healthbar__value”>.

//     b. Cada vez que se pulsa o botón “Ataque” a vida do monstro
//     diminúe, pero ao mesmo tempo este contraataca e a vida da persoa
//     que está xogando tamén diminuirá. Para que o xogo non sexa
//     preditivo, a vida do monstro diminuirá nun valor aleatorio entre
//     5 e 12 e a vida da persoa que xoga diminuirá nun valor aleatorio
//     entre 8 e 15.

//     c. Cada vez que se pulsa o botón “Ataque especial” a vida do
//     monstro diminúe un número aleatorio entre 10 e 25. Igual que
//     no caso anterior, o monstro contraataca e a vida da persoa que
//     está xogando tamén diminuirá un número aleatorio entre 8 e 15
//     (igual que antes).

//     d. Cada vez que se pulsa un dos botóns “Ataque”,
//     “Ataque especial” ou “Curación” realízase unha acción no xogo.
//     Fai que o botón “Ataque especial” só estea habilitado unha vez
//     de cada 3 accións realizadas.

//     e. Ao pulsar o botón “Curación” a vida da persoa que xoga verase
//     incrementada nun valor aleatorio entre 8 e 20
//     (hai que ter en conta de non superar o límite de 100).
//     Ademais, cada vez que se use este botón, a vida da persoa que
//     xoga tamén se verá diminuída nun número aleatorio entre 8 e 15
//     (como se sufrise un ataque).

//     f. Comprobación de fin de partida. Cando a vida do monstro ou
//     da persoa xogadora chegue a 0, a partida remata.
//     Comproba cando suceda isto e mostra no navegador información
//     de que a partida rematou e quen ganou: o monstro,
//     a persoa xogadora ou produciuse un empate.

//     g. Cando a partida remate debe mostrarse un botón “Novo xogo”
//     para poderiniciar unha nova partida. Este botón non estará
//     visible cando unha partida estea activa.

//     h. Cando se pulsa o botón “Renderse” significa que a persoa que
//     está xogando se rende, polo que a partida remata.
//     Non hai que modificar o estado das vidas nin do monstro nin
//     da persoa que xoga.

//     i. Cando a partida remata, deben ocultarse os botóns “Ataque”,
//     “Ataqueespecial”, “Curación” e “Renderse”.

//     j. Mostra, a modo de rexistro, as accións realizadas na partida.
//     A última acción realizada debe ser a primeira que apareza.
//     Utiliza as clases CSS definidas para os estilos: log--player,
//     log--monster, log--heal (curación) e log--damage (ataque).
//     Na imaxe, tanto o ataque como o ataque especial non están
//     diferenciados

const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      specialAttackCooldown: 0,
    };
  },
  methods: {
    enfOfTurn(){
        // Checks Health
        if (
            this.monsterHealth < 0 ||
            this.monsterHealth > 100 ||
            this.playerHealth < 0 ||
            this.playerHealth > 100
          ) {
            console.log("Game ended!");
          }
        // Reduces spAtk cooldown
        this.specialAttackCooldown-=1;
    },
    pressAttack() {
      const monsterDamage = Math.floor(Math.random() * (12 - 5 + 1)) + 5;
      this.monsterHealth -= monsterDamage;
      const playerDamage = Math.floor(Math.random() * (15 - 8 + 1)) + 8;
      this.playerHealth -= playerDamage;
      this.endOfTurn();
    },
    pressSpecialAttack() {
      const monsterDamage = Math.floor(Math.random() * (25 - 10 + 1)) + 10;
      this.monsterHealth -= monsterDamage;
      const playerDamage = Math.floor(Math.random() * (15 - 8 + 1)) + 8;
      this.playerHealth -= playerDamage;
      this.specialAttackCooldown= 3;
      this.endOfTurn();
    },
    pressHeal(){

        this.endOfTurn();
    }
  },
});
app.mount("#game");
