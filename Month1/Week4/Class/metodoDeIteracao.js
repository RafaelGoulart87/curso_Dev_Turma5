// Metodos de Iteração
const users = ['João', 'Bastos', 'Rafael', 'Wallace']


// Foreach
users.forEach((user, index, array) => {
    console.log(user)
    console.log(index)
    console.log(array)
})


// Map - é necessario mudar os valores de um array
const newUsers = users.map((user) => {
    return {
        name: user
    }
})
console.log(newUsers)

console.log([1, 2, 3].map((number) => number * 10))



//  Filter - encontrar uma lista de elementos
const numbers = [20, 1, 5, 30, 50]
const filteredArray = numbers.filter((number) => { return number > 10 })

console.log(filteredArray)



// Find - encontrar o elemento
const studentsAndTeachers = [{
        name: "João",
        role: 'professor'
    },
    {
        name: 'Victor',
        role: 'estudante'
    }
]
const student = studentsAndTeachers.find((user) => { return user.role === 'estudante' })
console.log(student)



// Every
const studentsAndTeachers2 = [
    { name: 'João', role: 'Professor', id: 1 },
    { name: 'Juca', role: 'Estudante', id: 3 },
    { name: 'Marcia', role: 'Estudante', id: 4 },
    { name: 'Pedro', role: 'Estudante', id: 5 },
    { name: 'Marilia', role: 'Professor', id: 2 },
    { name: 'Julia', role: 'Estudante', id: 6 },
]
const student1 = studentsAndTeachers2.every((user) => {
    return user.role === 'Estudante'
})

console.log(student1)


// Some
const hasTeacher = studentsAndTeachers2.some((user) => {
    return user.role === 'Professor'
})

console.log(hasTeacher)



// Sort
console.log([10, 4, 1, 7, 3].sort((a, b) => a - b))

const orderedArray = studentsAndTeachers2.sort((a, b) => {
    return a.id - b.id
})

console.log(orderedArray)