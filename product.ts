alert('Bienvenido al mejor administrador de productos de todo RD ;)')
alert('Asegurate de insertar unicamente lo que quires hacer al final del codigo. \n\nQue accion quieres hacer? \n\nPara vender "vender(cantidadParaVender)" \n\nPara reabastecer "reabastecer(CantidadParaReabastecer)" \n\nAcceder al inventario "inventario()"')
let cantidadDisponible: number = 14
const producto = 'Curso(s) de python.'
const mensaje =  'Gracias por usar este servicio :)'

function vender(cantidadParaVender:number){
    alert('Parece que quieres vender tu producto.')
    if(cantidadDisponible > cantidadParaVender){
        const restante = cantidadDisponible -= cantidadParaVender
        alert('Vendido exitosamente ' + '\n\nActualmente te quedan ' + restante + ' ' + producto)
        alert(mensaje)      
    }else{
        alert('No tienes la suficiente cantidad de producto para realizar esta operacion :(')
    }
}
function reabastecer(cantidadParaReabastecer: number ){
    const resultadoDeSuma = cantidadDisponible + cantidadParaReabastecer
    alert('Se a agregado satisfactoriamente, actualmente cuenta con '  + resultadoDeSuma + ' ' + producto)
    alert(mensaje)
}
function inventario(){
    alert('Parece que quieres acceder al inventario')
    alert('Actualmente cuentas con'+ cantidadDisponible + producto)
    alert(mensaje)
         
}
//vender(0)
reabastecer(0)                     //<<<========ingresa la cantidad que quieres vender
//inventario()

const i = prompt('califca mi programa del 1 al 10')
const calificacion = Number(i)

    if (calificacion == 6 || calificacion == 7){
        alert('Meh, esta normal :|')
    }else if(calificacion > 1 && calificacion < 6){
        alert('tan malo es ? :(')
    }
    else if(calificacion == 8){
        alert('Gracias <3')
    }else if(calificacion == 9 || calificacion == 10){
        alert("Exelenteeeee >:D")
    }else{
        alert('era del 1 al 10 pero bueno')
    }

