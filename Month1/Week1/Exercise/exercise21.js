/*
21 - Crie uma função chamada calculate que possui três parâmetros. O primeiro
é uma string e os outros dois, números. A string será uma das seguintes opções:
"soma", "subtrai", "multiplica", "divide". A função calculate deve retornar o
resultado da operação (definida pela string) entre os dois números.
Exemplo de Entrada:
"soma"
3
5
-----------------
"divide"
21
7
Exemplo de Saída:
8
-----------------
3
*/

function calculate(operation, value2, value3) {
    switch (operation) {
        case 'soma':
            console.log(value2 + value3)
            break;
        case 'subtrai':
            console.log(value2 - value3)
            break;
        case 'multiplica':
            console.log(value2 * value3)
            break;
        case 'divide':
            console.log(value2 / value3)
            break;
    }
}
calculate('divide', 3, 5)