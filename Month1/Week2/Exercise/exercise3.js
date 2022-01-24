/*
3 - Dado um array de nomes, faça um programa que imprima na tela todos os
nomes (na mesma linha).
Os valores de entrada serão:
Array;
Exemplo de Entrada:
['Angela', 'Rosa', 'Ticiana', 'Carla', 'Renata']
Exemplo de Saída:
Angela, Rosa, Ticiana, Carla, Renata
*/

let nameList = ['Angela', 'Rosa', 'Ticiana', 'Carla', 'Renata']
let result = ''

for (let i = 0; i < nameList.length; i++) {
    let cont = nameList[i]
    console.log(nameList[i])

    if (i === nameList.length - 1) {
        result = result + cont
    } else {
        result = result + cont + ', '
    }
}
console.log(result)