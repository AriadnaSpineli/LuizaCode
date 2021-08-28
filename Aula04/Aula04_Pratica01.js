function parOuImpar(numero) {
    if (numero % 2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
} 

var resultado = parOuImpar(22)
console.log(`Esse numero é ${resultado}.`)
