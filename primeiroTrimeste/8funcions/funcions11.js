// 11. Crea unha función que reciba un array bidimensional de lonxitude variable que se
// corresponda cun escenario do xogo de Buscaminas. Este array almacenará un -1
// nas posicións onde hai minas e un 0 en caso contrario. A función debe devolver un
// array bidimensional onde cada posición que non teña mina, debe ter a información
// do número de minas adxacentes (diagonal, horizontal e vertical).
// Exemplo:
// arrayEntrada = [[0, 0, -1, 0],
// [0, -1, -1, 0]];
// arraySaida = [[1, 3, -1, 2],
// [1, -1, -1, 2]];

function buscarMinas(arr) {
    const filas = arr.length;
    const columnas = arr[0].length;
  
    const direcciones = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1],           [0, 1],
      [1, -1], [1, 0], [1, 1]
    ];
  
    const resultado = [];
  
    for (let i = 0; i < filas; i++) {
      const filaResultado = [];
      for (let j = 0; j < columnas; j++) {
        if (arr[i][j] === -1) {
          filaResultado.push(-1);
        } else {
          let minasAdyacentes = 0;
          for (const [dx, dy] of direcciones) {
            const x = i + dx;
            const y = j + dy;
            if (x >= 0 && x < filas && y >= 0 && y < columnas && arr[x][y] === -1) {
              minasAdyacentes++;
            }
          }
          filaResultado.push(minasAdyacentes);
        }
      }
      resultado.push(filaResultado);
    }
  
    return resultado;
  }
  
  // Ejemplo de uso
  const arrayEntrada = [
    [0, 0, -1, 0],
    [0, -1, -1, 0]
  ];
  
  const arraySaida = buscarMinas(arrayEntrada);
  console.log(arraySaida);
  