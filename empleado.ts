let nombre = prompt('Ingrese el nombre del empleado');
let salarioMensual:number = parseFloat(prompt('Ingrese su salario mensual') || '0');
let tiempoAnios:number = parseInt(prompt('Años trabajados:') || '0');
let tiempoMeses:number = parseInt(prompt('Meses trabajados:') || '0');
let tiempoDias:number = parseInt(prompt('Días trabajando:') || '0');

let preAviso:number = parseFloat(prompt('ha sido preavisado?\n\n1(SI)\n\n2(NO)') || "0");
let cesantia:number = parseFloat(prompt('Desea incluir la cesantia?\n\n1(SI)\n\n2(NO)') || '0');
let vacaciones:number = parseFloat(prompt('ha tomado vacaciones en el ultimo anio?\n\n1(SI)\n\n2(NO)') || '0');
let navidad:number = parseFloat(prompt('incluye salario de navidad?\n\n1(SI)\n\n2(NO)') || '0');

const salarioDiario: number = salarioMensual / 23.83;
console.log("Salario Diario: " + Math.round(salarioDiario))

let preAvisoCalculado:number
if (preAviso == 2) {
    preAvisoCalculado = salarioDiario * 28
    console.log(`Monto del preAviso: ${Math.round(preAvisoCalculado)}` + ' pesos');
}else{
    preAvisoCalculado = 0
}

let calculoCesantia:number = 0
if (cesantia == 1) {
    
    if((tiempoMeses >= 3 && tiempoMeses < 6) && tiempoAnios < 1){
        calculoCesantia = salarioDiario * 6
        console.log(`Monto de la cesantia: ${Math.round(calculoCesantia)}` + ' pesos');
    }else if ( tiempoMeses >= 6 && tiempoAnios < 1){
        calculoCesantia = salarioDiario * 13
        console.log(`Monto de la cesantia: ${Math.round(calculoCesantia)}` + ' pesos');
    }else if (tiempoAnios >= 1 && tiempoAnios < 5){
        calculoCesantia = (tiempoAnios * 21 ) * salarioDiario
        console.log(`Monto de la cesantia: ${Math.round(calculoCesantia)}` + ' pesos');
    }else if (tiempoAnios >= 5){
        calculoCesantia = (salarioDiario * 23) * tiempoAnios
        console.log(`Monto de la cesantia: ${Math.round(calculoCesantia)}` + ' pesos');
    }
}

let vacacionesCalculado:number = 0
if (vacaciones == 1) {
    if (tiempoAnios >= 1 && tiempoAnios < 5) {
        vacacionesCalculado + (salarioDiario * 14);
        console.log(`Monto de las vacaciones: ${Math.round(vacacionesCalculado)}` + ' pesos');
    } else if (tiempoAnios >= 5) {
        vacacionesCalculado + (salarioDiario * 18);
        console.log(`Monto de las vacaciones: ${Math.round(vacacionesCalculado)}` + ' pesos');
    } 
}

let navidadCalculado:number
if (navidad == 1) {
    navidadCalculado = (((tiempoMeses*30) + tiempoDias) * salarioDiario)/12
    console.log(`Monto de la navidad: ${Math.round(navidadCalculado)}`);
}else{
    navidadCalculado = 0
}
let montoTotal:number = preAvisoCalculado + calculoCesantia + vacacionesCalculado + navidadCalculado;
console.log(`Estimado `+ nombre + `El monto total calculado es de: ${Math.round(montoTotal)}` + " pesos");