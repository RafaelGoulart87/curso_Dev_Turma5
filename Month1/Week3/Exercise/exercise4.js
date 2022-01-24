/*
4 - [REFATORAÇÃO] Dado um array de nomes, faça um programa que imprima na
tela todos os nomes (na mesma linha).
Os valores de entrada serão:
Array;
Exemplo de Entrada:
['Angela', 'Rosa', 'Ticiana', 'Carla', 'Renata']
Exemplo de Saída:
Angela, Rosa, Ticiana, Carla, Renata
*/

const names = nameList => {
    let resultListNames = ''

    for (let i = 0; i < nameList.length; i++) {
        if (i === nameList.length - 1) {
            resultListNames += nameList[i]
        } else {
            resultListNames += nameList[i] + ', '
        }
    }
    console.log(resultListNames)
}
names(['Angela', 'Rosa', 'Ticiana', 'Carla', 'Renata'])