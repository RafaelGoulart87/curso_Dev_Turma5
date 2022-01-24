/*6. Levando em consideração o array de usuários 
abaixo: [{id: 3, name: “joao”, active: false}, {id: 2, name: “gabriel” active: false}, 
{id: 1, name: “mari”, active: true}, {id: 0, name: “miguel”, active: false}]
Escreva um programa que imprime na tela o nome de todos os usuários ativos
Escreva um programa que imprime na tela quantos usuários não estão ativos
Escreva um programa que imprime na tela se existe algum usuário ativo
Escreva um programa que imprime na tela o array ordenado por id em ordem crescente
*/

const users = [
    { id: 3, name: 'joao', active: false },
    { id: 2, name: 'gabriel', active: false },
    { id: 1, name: 'mari', active: true },
    { id: 0, name: 'miguel', active: false }
]

const usersActives = users.filter((user) => {
    return user.active == true
})

const newActive = usersActives.forEach((user) => console.log(user.name))


// console.log('Ativos:', usersActives)

// const usersInatives = users.filter((user) => {
//     return user.active == false
// })
// console.log('Inativos:', usersInatives)