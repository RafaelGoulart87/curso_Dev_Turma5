/*
Crie um algoritmo que imprime todos os valores de um array qualquer, menos o ultimo elemento.
*/

function array(numbers) {
    for (let index = 0; index < numbers.length; index++) {
        console.log(numbers[index - 1])
    }
}
array([8, 9, 10])