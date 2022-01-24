/*
10 - Dado um número, faça um algoritmo que imprime no console a soma de
todos os números de 1 até o número escolhido. Ex: Ao ter como entrada o valor
5, devem ser somados todos os números de 1 até 5 (1+2+3+4+5).
Os valores de entrada serão:
Número;
Exemplo de Entrada:
10
-----------------
3
Exemplo de Saída:
55
-----------------
6
*/

function sumArray(number) {
    let cont = 0
    for (let i = 0; i <= number; i++) {
        cont += i
    }
    console.log(cont)
}
sumArray(10)