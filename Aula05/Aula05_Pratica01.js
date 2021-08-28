class Pessoa {
    constructor(nome, idade, cnh) {
        this.nome = nome
        this.idade = idade
        this.cnh = cnh
    }

    dirigir() {
        console.log('A pessoa está dirigindo.')
    }

    comer() {
        console.log('A pessoa está comendo.')
    }

    dormir() {
        console.log('A pessoa está dormindo.')
    }
}

const primeiraPessoa = new Pessoa('Ariadna', '43', '1234567890')
primeiraPessoa.dirigir()
primeiraPessoa.comer()
primeiraPessoa.dormir()
console.log(primeiraPessoa.nome)

primeiraPessoa.nome = 'Rogério'
console.log(primeiraPessoa.nome)