/*
18 - Escreva um programa que receba como entrada três números que serão
armazenados nas variáveis valueOne, valueTwo e valueThree respectivamente.
Tendo esses valores, mostre-os na tela na ordem em que estão armazenados.
Após ter mostrado faça trocas em que ao final valueTwo assuma o valor de
valueThree, valueThree assuma o valor de valueOne e valueOne assuma o valor
de valueTwo. Mostre ao final os valores atualizados.
*/

function value(valueOne, valueTwo, valueThre) {
    console.log(valueOne, valueTwo, valueThre)
    value0 = valueTwo
    valueTwo = valueThre
    valueThre = valueOne
    valueOne = value0
    console.log(valueOne, valueTwo, valueThre)
}
value(1, 2, 3)