const app = Vue.createApp({
  data() {
    return {
      vidaMonstro: 100,
      vidaXogador: 100,
      danoMonstro: 0,
      danoXogador: 0,
      curacionXogador: 0,
      contadorEspecial: 4,
      isSpecialCooldown: false,
    };
  },
  methods: {
    getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    finalTurno() {
      if (this.vidaMonstro < 0) {
        this.vidaMonstro = 0;
      }
      if (this.vidaXogador < 0) {
        this.vidaXogador = 0;
      }
      if (this.vidaXogador > 100) {
        this.vidaXogador = 100;
      }
      if (this.contadorEspecial > 2) {
        this.contadorEspecial = 0;
      }
      this.contadorEspecial++;
      if (this.contadorEspecial > 2) {
        this.isSpecialCooldown = false;
      } else {
        this.isSpecialCooldown = true;
      }
      if (this.vidaMonstro <= 0 || this.vidaXogador <= 0) {
        this.finPartida();
      }
    },
    finPartida() {
      console.log("final");
    },
    ataque() {
      this.danoMonstro = this.getRandomIntInclusive(5, 12);
      this.danoXogador = this.getRandomIntInclusive(8, 15);
      this.vidaMonstro -= this.danoMonstro;
      this.vidaXogador -= this.danoXogador;
      this.finalTurno();
    },
    especial() {
      if (this.contadorEspecial > 2) {
        this.danoMonstro = this.getRandomIntInclusive(10, 25);
        this.danoXogador = this.getRandomIntInclusive(8, 15);
        this.vidaMonstro -= this.danoMonstro;
        this.vidaXogador -= this.danoXogador;
        this.finalTurno();
      }
    },
    curacion() {
      this.curacionXogador = this.getRandomIntInclusive(8, 20);
      this.danoXogador = this.getRandomIntInclusive(8, 15);
      this.vidaXogador -= this.danoXogador;
      this.vidaXogador += this.curacionXogador;
      this.finalTurno();
    },
  },
});

app.mount("#game");
