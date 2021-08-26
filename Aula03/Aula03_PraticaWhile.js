var contadorPrimo = 1
var primo = 2
var number = 3

while (contadorPrimo < 1001) {
    var divisoes = 0

    for (var i = 1; i < number + 1; i = i + 2) {
        if (number % i == 0) {
            divisoes++
        }
        if (divisoes > 2) {
            break
        }
    }

    if (divisoes == 2) {
        primo = number
        contadorPrimo++
    }
    number += 2
}
console.log(primo)

