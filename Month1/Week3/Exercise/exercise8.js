/*
8 - [REFATORAÇÃO] Crie um algoritmo que tem como entrada um array de notas,
e imprime no console a média aritmética dessas notas.
OBS: Para melhorar a resolução desse problema, monte um programa que
retorna a média aritmética independente do tamanho do array.
Exemplo Entrada:
[6, 8, 7]
*/
function meanArray(notes) {
    let mean = 0
    for (let i = 0; i < notes.length; i++) {
        mean += notes[i] / notes.length
    }
    console.log(`Média: ${mean.toFixed(1)}`)
}
meanArray([6, 8, 7])
meanArray([5, 2, 3, 6, 10, 5])