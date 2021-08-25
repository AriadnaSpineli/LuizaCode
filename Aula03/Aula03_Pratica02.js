var peso = 97.7
var altura = 1.83

var imc = peso / (altura * altura)
imc = imc.toFixed(2)

if (imc < 19.1) {
    console.log(`Seu IMC é ${imc} e você está abaixo do peso.`)
} else if (imc >= 19.1 && imc <= 25.8) {
    console.log(`Seu IMC é ${imc} e você está no peso normal.`)
} else if (imc > 25.8 && imc <= 27.3){
    console.log(`Seu IMC é ${imc} e você está um pouco acima do peso.`)
} else if (imc > 27.3 && imc <= 32.3){
    console.log(`Seu IMC é ${imc} e você está acima do peso ideal.`)
} else {
    console.log(`Seu IMC é ${imc} e você está obeso.`)
}