/*
14 - Faça um programa que receba de entrada três valores e mostre no console
a soma dos dois maiores.
*/

const value1 = 5
const value2 = 1
const value3 = 3
    // let bigger = null
    // let mean = null
    // let smaller = null

if (value1 < value2 && value1 < value3) {
    console.log(value2 + value3)
} else if (value2 < value3) {
    console.log(value3 + value1)
} else if (value3 < value1) {
    console.log(value1 + value2)
}

// if (value1 > value2 && value1 > value3) {
//     bigger = value1
// }
// if (value2 > value3 && value2 > value1) {
//     bigger = value2
// }
// if (value3 > value1 && value3 > value2) {
//     bigger = value3
// }
// if (value1 < value2 && value1 < value3) {
//     smaller = value1
// }
// if (value2 < value3 && value2 < value1) {
//     smaller = value2
// }
// if (value3 < value1 && value3 < value2) {
//     smaller = value3
// }
// if (value1 < bigger && value1 > smaller) {
//     mean = value1
// }
// if (value2 < bigger && value2 > smaller) {
//     mean = value2
// }
// if (value3 < bigger && value3 > smaller) {
//     mean = value3
// }
// console.log(bigger + mean)