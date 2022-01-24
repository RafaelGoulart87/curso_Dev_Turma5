/*
15 - Elabore um programa que receba três valores como entrada e mostre eles
em ordem crescente no console.
*/

const value1 = 4
const value2 = 3
const value3 = 2
let bigger = null
let mean = null
let smaller = null

if (value1 > value2 && value1 > value3) {
    bigger = value1
}
if (value2 > value3 && value2 > value1) {
    bigger = value2
}
if (value3 > value1 && value3 > value2) {
    bigger = value3
}
if (value1 < value2 && value1 < value3) {
    smaller = value1
}
if (value2 < value3 && value2 < value1) {
    smaller = value2
}
if (value3 < value1 && value3 < value2) {
    smaller = value3
}
if (value1 < bigger && value1 > smaller) {
    mean = value1
}
if (value2 < bigger && value2 > smaller) {
    mean = value2
}
if (value3 < bigger && value3 > smaller) {
    mean = value3
}

console.log(smaller, mean, bigger)