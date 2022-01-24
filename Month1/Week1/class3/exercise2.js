/*
2. Faça uma função que recebe a idade de um nadador e retorna a categoria desse nadador de acordo com a tabela abaixo: 
Idade - Categoria
5 a 7 anos - Infantil A
8 a 10 anos - Infantil B
11 - 13 anos - Juvenil A
14 - 17 anos - Juvenil B
Maiores de 18 anos (inclusive) - Adulto
*/

function category(age) {
    if (age >= 5 && age <= 7) {
        return 'Infantil A'
    }
    if (age >= 8 && age <= 10) {
        return 'Infantil B'
    }
    if (age >= 11 && age <= 13) {
        return 'Juvenil A'
    }
    if (age >= 14 && age <= 17) {
        return 'Juvenil B'
    }
    if (age >= 18) {
        return 'Adulto'
    } else {
        return 'Não possui idade minima para natação.'
    }
}

console.log(category(18))