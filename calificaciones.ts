let nombre = prompt('ingrese el nombre del empleado')
let salarioMensual:any = prompt('ingrese su salario mensual')
let tiempoAnios:any = prompt('anios trabajados: ')
let tiempoMeses:any = prompt('meses trabajados: ')
let tiempoDias:any = prompt('dias trabajando: ')

let preAviso:any = prompt('ha sido preavisado?\n\n1(SI)\n\n2(NO)')
let cesantia:any = prompt('hay que incluir cesantia?\n\n1(SI)\n\n2(NO)')
let vacaciones:any = prompt('ha tomado vacaciones en el ultimo anio?\n\n1(SI)\n\n2(NO)')
let navidad:any = prompt('incluye salario de navidad?\n\n1(SI)\n\n2(NO)')
const salarioDiario = salarioMensual/23.83
  

const preAvisoCalculado = salarioDiario*28
if (preAviso == 1){
    console.log('Monto preAviso: ' + preAvisoCalculado)
} 

const calculoCesantia = salarioMensual * 0.05 * ((tiempoAnios*365.25) + (tiempoMeses*30.417) + (tiempoDias))
if (cesantia == 1){
    const calculoCesantia = salarioMensual * 0.05 * ((tiempoAnios*365.25) + (tiempoMeses*30.417) + (tiempoDias))
    console.log('Monto de la cesantia: ' + calculoCesantia)
}


if (vacaciones == 1){
        if (tiempoAnios >= 1 && tiempoAnios < 5){
            console.log('el monto de las vacaciones es: ' + salarioDiario*14 + 'pesos')
        }else if (tiempoAnios > 5){
            console.log('el monto de las vacaciones es: ' + salarioDiario*18 + 'pesos')
        }
}

const r:number = salarioMensual/12
   if (navidad == 1){
        const r:number = salarioMensual/12
        console.log("el monto de la navida es: " + r)
}

const montoTotal = preAvisoCalculado + calculoCesantia 