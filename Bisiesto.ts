const confirmacion = prompt('Este programa te ayuda a saber si un año es bisiesto o no. ¿Desea continuar? (y/n)');

if (confirmacion === 'y' || confirmacion === 'Y' || confirmacion === 'yes' || confirmacion === 'Yes') {
    function calculadora() {
        const anoString = prompt('===== Ingrese el año =====');
        const anoNumber = Number(anoString);

        if (anoNumber % 4 === 0 && (anoNumber % 100 !== 0 || anoNumber % 400 === 0)) {
            alert('El año ingresado es bisiesto.');
            const otraVez = prompt('¿Desea ingresar otro año? (y/n)');
            
            if (otraVez === 'y' || otraVez === 'Y' || otraVez === 'yes' || otraVez === 'Yes') {
                calculadora();
            }else{
                alert(':(')
            }
        } else {
            const tryAgain = prompt('El año ingresado no es bisiesto. ¿Desea intentar nuevamente? (y/n)');
            
            if (tryAgain === 'y' || tryAgain === 'Y' || tryAgain === 'yes' || tryAgain === 'Yes') {
                calculadora();
            } else if (tryAgain === 'n' || tryAgain === 'N' || tryAgain === 'no' || tryAgain === 'No') {
                return;
            }
        }
    }

    calculadora();
} else if (confirmacion === 'n' || confirmacion === 'N' || confirmacion === 'no' || confirmacion === 'No') {
    alert(':(');
}



