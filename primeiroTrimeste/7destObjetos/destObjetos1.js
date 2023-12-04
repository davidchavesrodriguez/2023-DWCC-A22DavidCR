'use strict';
// 1. Crea un obxecto chamado television coas propiedades marca, categoría
// (televisores), unidades (4), prezo (354.99) e un método chamado importe que
// devolva o prezo total das unidades (unidades x prezo).
const television = {
  marca: '',
  categoria: 'televisores',
  unidades: 4,
  prezo: 354.99,
};
function prezoTotalTelevision() {
  console.log(television.unidades * television.prezo);
}
prezoTotalTelevision();
