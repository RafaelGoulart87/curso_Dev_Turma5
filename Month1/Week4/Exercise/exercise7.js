// 7 - Dado um array de entrada com o nome e as notas de avaliações dos alunos,
// retorne uma lista com os alunos que tiraram 0 em todas as provas.
// Exemplo de Entrada:
// [
// {nome: ,
// notas: [ ]
// ]

const students = [
    { nome: 'Rafael', notas: [8, 0, 9] },
    { nome: 'Bianca', notas: [0, 6, 8] },
    { nome: 'Phoebe', notas: [0, 0, 0] },
]

const studentsNoteZero = students.filter((num, index) => {
    if (num.notas[index] === 0) {
        return num
    }
})
console.log(studentsNoteZero)