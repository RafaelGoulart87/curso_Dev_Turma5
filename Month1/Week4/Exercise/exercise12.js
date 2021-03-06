// 12 - [REFATORAÇÃO] Dado o objeto abaixo, faça um programa que imprime no
// console o nome, cpf e telefone formatados. Dica: Separe o código em funções
// de formatação para cada um dos campos.
// Exemplo de Entrada 1:
// {nome: 'Analu dos santos baptista', cpf: '14776213931', telefone: '8328008258'}
// Exemplo de Saída 1:
// Analu dos Santos Baptista
// 147.762.139-31
// (83) 2800-8258
// Exemplo de Entrada 2:
// {nome: 'Cláudio da silva figueiredo ', cpf: '47187999887', telefone:
// '11988754092'}
// Exemplo de Saída 2:
// Cláudio da silva figueiredo
// 471.879.998-87
// (11) 98875-4092

const userOne = {
    nome: 'Analu dos Santos Baptista',
    cpf: '14776213931',
    telefone: '8328008258'
}
const userTwo = {
    nome: 'Cláudio da Silva Figueiredo ',
    cpf: '47187999887',
    telefone: '11988754092'
}

const fixUserCPF = (user) => {
    return user.cpf.substr(0, 3) + "." + user.cpf.substr(3, 3) + "." + user.cpf.substr(6, 3) + "-" + user.cpf.substr(9, 10)
}

const fixUserCell = (user => {
    return "(" + user.telefone.substr(0, 2) + ") " + user.telefone.substr(2, 4) + "-" + user.telefone.substr(4, 4)
})

console.log(`${userTwo.nome}`)
console.log(fixUserCPF(userTwo))
console.log(fixUserCell(userTwo))