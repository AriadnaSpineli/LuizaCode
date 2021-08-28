var meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
                 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

var dias = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

var contador = 0
var tamanhoMeses = meses.length

for (contador; contador < tamanhoMeses; contador++) {
    console.log(`O mês de ${meses[contador]} tem ${dias[contador]} dias.`)
}
