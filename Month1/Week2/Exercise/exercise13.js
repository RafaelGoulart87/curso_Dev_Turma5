/*
13 - Dado um array de nomes, faça um programa que tenha como entrada um
valor à ser pesquisado e retorne se o nome existe ou não no array.
Exemplo de Entrada:
[‘Juliana’, ‘Pedro’, ‘Regina’, ‘João’, ‘Patrícia’, ‘Gabriel’, ‘Carlos’, ‘Carla’]
‘Carla’
Exemplo de Saída:
O nome Carla existe no Array.
*/

const names = ['Juliana', 'Pedro', 'Regina', 'João', 'Patricia', 'Gabriel', 'Carla']

function findName(checkName) {
    for (let i = 0; i < names.length; i++) {
        if (names[i] === checkName) {
            return ('O nome ' + checkName + ' existe no array.')
        }
    }
    return ('O nome ' + checkName + ' não existe no array.')
}
console.log(findName('Rafael'))