/*
5. Levando em consideração o array[6, 21, 9, 2, 50, 98, 1] crie uma função que mostra o maior numero da lista
*/

function biggerNumber(array, bigger) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > bigger) {
            bigger = array[i]
        }
    }
    console.log(bigger)
}

biggerNumber([6, 21, 9, 2, 50, 98, 1], 0)