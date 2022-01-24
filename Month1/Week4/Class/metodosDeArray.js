// Metodos de array

// Adicionar novos valores em array


// Concat - não altera o array original - cria um novo array
const students = ['cristian', 'rafael', 'ronaldo']
const newStudents = students.concat('Banca')
const newStudentsArray = students.concat('Inacio', 'Harlei')

console.log(students)
console.log(newStudents)
console.log(newStudentsArray)


// // Push
const fruits = ['banana', 'laranja']
fruits.push('maça')
console.log(fruits)


// Join
const joinfruits = fruits.join(', ')
console.log(joinfruits)


// Pop - remove o ultimo elemento de um array - modifica o array principal
const users = ['Barros', 'Mari', 'Jose']
const user = users.pop()
console.log(users)
console.log(user)


// Shift - remode o primeiro elemento de um array
const fruits2 = ['banana', 'laranja']
const newFruits2 = fruits2.shift()
console.log(fruits2)
console.log(newFruits2)


// Unshift - altera elemento no inicio do array modificando o array principal
fruits2.unshift('limão')
console.log(fruits2)


// Slice
const tools = ['martelo', 'furadeira', 'alicate']
const newTools = tools.slice(0, 1)
console.log(newTools)


// Splice - pode adicionar ou remover

// Remover
tools.splice(1, 1)
console.log(tools)

// Adicionar
tools.splice(0, 0, 'chave de boca', 'martelete')
console.log(tools)


// Reverse
const tiProducts = ['hd', 'memoria', 'ssd', 'placa de video']
tiProducts.reverse()
console.log(tiProducts)