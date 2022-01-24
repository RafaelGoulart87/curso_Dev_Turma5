// Metodos de strings

// Metodos para extrair uma string

// Slice
const str = 'maça, banana, laranja'
const part = str.slice(6, 12)

console.log(part)

// Substring
const part2 = str.substring(6, 12)
console.log(part2)

// Substr
const part3 = str.substr(6, 6)
console.log(part3) // depreciado



// Metodos para modificar uma string

// Replace
let text = 'Ola alunos otterwise otterwise'
let newText = text.replace('otterwise', 'do curso web developer')
let newText2 = text.replaceAll('otterwise', 'do curso web developer')

console.log(newText)

// Regex
let newTextRegex = text.replace(/otterwise/, 'do curso web developer')
console.log(newTextRegex)

// Trim
const frase = '          Ola alunos otterwise '
console.log(frase.trim())

// padStart e padEnd
const numero = '5'
console.log(numero.padStart(4, 0))
console.log(numero.padEnd(4, 0))

// Split
const arrayFruits = str.split(',')
console.log(arrayFruits)