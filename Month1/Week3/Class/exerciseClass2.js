/*
2. Crie uma função que recebe uma string (com quatro possibilidades: 
    “soma”, “subtrai”, “divide”, “multiplica”) e dois números. 
    A função deve retornar a operação realizada informada pela 
    string nos dois números.

Exemplo Entrada:
myFunction(‘soma’)(3)(5)

Exemplo Saída:
8
*/

// const calculate = (operation, value1, value2) => {
//     switch (operation) {
//         case 'soma':
//             return value1 + value2;
//             break;
//         case 'subtrai':
//             return value1 - value2;
//             break;
//         case 'divide':
//             return value1 / value2;
//             break;
//         case 'multiplica':
//             return value1 * value2;
//             break;
//         default:
//             return 'Invalid operation'
//     }
// }
// console.log(calculate('nada ', 5, 2))

const calculate = (operation) => {
    const operations = {
        soma: (value1, value2) => value1 + value2,
        subtrai: (value1, value2) => value1 - value2,
        multiplica: (value1, value2) => value1 * value2,
        divide: (value1, value2) => value1 / value2,
    }
    return (numberOne) => (numberTwo) => operations[operation](numberOne, numberTwo)
}
console.log(calculate('soma')(2)(2))