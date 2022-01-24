/*
1. Faça uma função que recebe um valor inteiro e verifica se o valor é par. A função deve retornar um valor booleano se for par. 
*/

function even(par) {
    if (par % 2 === 0) {
        return true
    } else {
        return false
    }
}

console.log(even(3))