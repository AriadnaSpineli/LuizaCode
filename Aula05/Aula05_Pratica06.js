console.log('\nEscolha um nome:\n')
var nomes = ['Ariadna', 'Rogerio', 'Aiko', 'Aime', 'Shao']
exibeMenu(nomes)

var escolha = 2
console.log('\nA escolha foi o numero 2.\n')
nomes.splice(1,1)
console.log('Os nomes restantes são:\n ')
exibeMenu(nomes)

function exibeMenu(nomes) {
    for (var contador = 0; contador < nomes.length; contador++) {
        var nome = nomes[contador]
        console.log(`${contador+1} - ${nome}`)
    }
}