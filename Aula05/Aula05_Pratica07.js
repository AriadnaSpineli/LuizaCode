var numeros = [12, 22, 55, 32, 44, 78, 18, 98, 65, 90]
var numeroMaior = 0

for (var i = 0; i < numeros.length; i++) {
    var numero = numeros[i]
    if(numero > numeroMaior) {
        numeroMaior = numero
    }  
}
console.log(`O maior numero é ${numeroMaior}.`)