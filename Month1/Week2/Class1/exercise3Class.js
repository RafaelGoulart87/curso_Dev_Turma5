/*
3. Crie um algoritmo que tem como entrada um array de números e imprime no console a soma dos elementos sendo cada um deles multiplicado pelo seu índice.
Exemplo entrada: [5, 9, 10, 6]
Exemplo Saída: 47
*/

function allSum(array, sum) {
    for (let index = 0; index < array.length; index++) {
        sum += array[index] * index
    }
    console.log(sum)
}
allSum([5, 9, 10, 6], 0)