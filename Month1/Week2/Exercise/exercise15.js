/*
15 - Dado o array de objetos abaixo, faça um programa que calcule a média
aritmética dos estudantes e imprima no console os nomes dos estudantes
aprovados. A média de aprovação é 7.0.
Os valores de entrada serão:
Array de Objetos;
Exemplo de Entrada:
[
{nome: 'Marcos', notas: [10, 7, 2]},
{nome: 'Michele', notas: [10, 10, 10]},
{nome: 'Pedro', notas: [3, 10, 9]},
{nome: 'Andressa', notas: [6, 6, 8]},
{nome: 'Cristiana', notas: [7, 9, 2]}
]
Exemplo de Saída:
Michele
Pedro
*/

const students = [
    { nome: 'Marcos', notas: [10, 7, 2] },
    { nome: 'Michele', notas: [10, 10, 10] },
    { nome: 'Pedro', notas: [3, 10, 9] },
    { nome: 'Andressa', notas: [6, 6, 8] },
    { nome: 'Cristiana', notas: [7, 9, 2] }
]

for (let i = 0; i < students.length; i++) {
    let sum = 0

    for (let j = 0; j < students[i].notas.length; j++) {
        let note = students[i].notas[j]
        sum += note
    }
    let mean = (sum / students[i].notas.length).toFixed(2)
    if (mean >= 7) {
        console.log(students[i].nome + " aprovado(a) com média " + mean)
    }
}