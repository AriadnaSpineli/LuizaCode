var codigoLanche = 106
var quantidade = 2
var valorTotal = 0

switch(codigoLanche) {
    case 100: 
        valorTotal = quantidade * 1.5
        console.log (`Seu lanche é Hot Dog e o valor a pagar é R$ ${valorTotal.toFixed(2)}.`)
        break
    case 101:
        valorTotal = quantidade * 2.5
        console.log (`Seu lanche é Bauru e o valor a pagar é R$ ${valorTotal.toFixed(2)}.`)
        break
    case 102:
        valorTotal = quantidade * 3.5
        console.log (`Seu lanche é X Salada e o valor a pagar é R$ ${valorTotal.toFixed(2)}.`)
        break
    case 103:
        valorTotal = quantidade * 4.5
        console.log (`Seu lanche é X Bacon e o valor a pagar é R$ ${valorTotal.toFixed(2)}.`)
        break
    case 104:
        valorTotal = quantidade * 5.5
        console.log (`Seu lanche é X Tudo e o valor a pagar é R$ ${valorTotal.toFixed(2)}.`)
        break
    case 105:
        valorTotal = quantidade * 6.5
        console.log (`Seu lanche é X Tudo Max e o valor a pagar é R$ ${valorTotal.toFixed(2)}.`)
        break
    default: 
        console.log (`Este código não existe.`)
}