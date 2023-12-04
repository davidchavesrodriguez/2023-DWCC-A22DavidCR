// 10. Crea unha función que reciba como parámetro unha cantidade enteira e faga o
// desglose do número de billetes e moedas necesarios para obtela. Debe usarse o
// número mínimo de billetes e moedas.
function dineros(cantidad) {
  let valores = [500, 200, 100, 50, 20, 10, 5, 2, 1];
  let count = {};

  for (const valor of valores) {
    const cantidadActual = Math.floor(cantidad / valor);

    if (cantidadActual > 0) {
      count[valor] = cantidadActual;
      cantidad -= valor * cantidadActual;
    }
  }

  return count;
}