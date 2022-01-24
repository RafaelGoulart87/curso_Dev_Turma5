/*
16 - Escreva um programa que receba como entrada dois valores. Após, o
programa deve mostrar uma mensagem “São Múltiplos” ou “Não são Múltiplos”,
indicando se os valores recebidos como entrada são múltiplos entre si.
*/

function multiples(value1, value2) {
    if (value1 % value2 === 0 || value2 % value1 === 0) {
        console.log('São multiplos.')
    } else {
        console.log('Não são multiplos.')
    }
}
multiples(3, 15)