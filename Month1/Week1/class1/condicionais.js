// Condicionais

// if, else if e else

let x = 5

if (x > 5) {
    // o que será executado se a condição for verdadeiro
    console.log('x é maior que cinco')
} else if (x === 5) {
    console.log('x é igual a cinco')
} else {
    // o que será executado se a condição for falso
    console.log('x é menor que cinco')
}


// swith case

let operation = '-'

switch (operation) {
    case '+':
        console.log('operador de soma')
        break;
    case '-':
        console.log('operador de subtração')
        break;
    case '*':
        console.log('operação de multiplicação')
        break;
    case '/':
        console.log('operação de divisão')
        break;
    default:
        console.log('não faz nada')
        break;
}