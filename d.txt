const x1: number = parseFloat(prompt('Enter the value of "x1"'));
const y1: number = parseFloat(prompt('Enter the value of "y1"'));
const x2: number = parseFloat(prompt('Ingresa el valor de "x2""'));
const y2: number = parseFloat(prompt('Ingresa el valor de "y2"'));

function calcularPendiente(x1: number, y1: number, x2: number, y2: number): number {
  const pendiente: number = (y2 - y1) / (x2 - x1);
  return pendiente;
}

const pendiente: number = calcularPendiente(x1, y1, x2, y2);
alert('La pendiente de las coordenadas insertadas es: ' + pendiente);