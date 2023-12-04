//tarea #1 - Escribir un programa que pregunte al usuario por el número de horas trabajadas y el coste por hora. Después debe mostrar por pantalla la paga que le corresponde

alert("este programa te ayudara a saber el pago total por hora teniendo en cuanta las horas trabajadas")

let horasTrabajadas = prompt("Inserte el numero de horas trabajadas:")
let costePorHora = prompt("Inserte el costo por hora de su especialidad:")
let pagoCorrespondiente = horasTrabajadas * costePorHora;
alert('la paga que le corresponde es de ' + pagoCorrespondiente) 

//tarea #2 - Escribir un programa que pida al usuario su peso (en kg) y estatura (en metros), calcule el índice de masa corporal y lo almacene en una variable, y muestre por pantalla la frase Tu índice de masa corporal es <imc> donde <imc> es el índice de masa corporal 

alert('esta es una programa para saber tu indice de masa corporal (IMC)')

let peso = prompt('cual es tu peso corporal? (kg)')
let altura = prompt('cual es su altura (mts)')
let imc = peso / (altura * altura)

alert ('tu indice de masa corporal es ' + imc + '\n\npara saber su clasificacion segun su peso corporal visite: http://www.nutreteconmigoamigo.com/nutricion/que-es-el-indice-de-masa-corporal-2/')


