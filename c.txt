function esPalindromo() {
    const palabra: any = prompt('Ingrese la palabra:')
    const palabral = palabra.split('').reverse().join('');
    if (palabral === palabra){
        alert('Es palindromo')
    }else{
        alert('no es palindromo')
    }
}
esPalindromo()