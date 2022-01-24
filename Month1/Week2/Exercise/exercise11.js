/*
11 - Crie um algoritmo que tem como entrada um array de notas, e imprime no
console a média aritmética dessas notas.
Exemplo Entrada:
[6, 8, 7]
Exemplo Saída:
7
*/

function meanArray(notes) {
    let mean = 0
    for (let i = 0; i < notes.length; i++) {
        mean += notes[i] / notes.length
    }
    console.log(mean)
}
meanArray([6, 8, 7])