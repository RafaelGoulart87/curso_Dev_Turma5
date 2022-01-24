/*
09 - Tendo como informação dois números, faça um programa que imprima na
tela qual deles é o MAIOR e qual deles é o menor. Caso os números sejam
iguais, informe que eles são iguais.
Os valores de entrada serão:
Número 1;
Número 2;
Exemplo de Entrada:
2
5
-----------------
7
7
Exemplo de Saída:
5 é maior que 2
-----------------
7 é igual a 7
*/

const numberOne = 3
const numberTwo = 7

if (numberOne > numberTwo) {
    console.log(numberOne + ' é maior que ' + numberTwo)
}
if (numberTwo > numberOne) {
    console.log(numberTwo + ' é maior que ' + numberOne)

}
if (numberOne === numberTwo) {
    console.log(numberOne + ' é igual a ' + numberTwo)
} else {}