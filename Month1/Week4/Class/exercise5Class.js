/*5. Levando em consideração o array [“joao”, “pedro”, “Gabriel”, “Mari”], 
retorne um novo array com o seguinte 
padrão: [{id: 0, name: “joao”}, {id: 1: name: “pedro”}, ...]
*/

const names = ['joao', 'pedro', 'Gabriel', 'Mari']
const users = names.map((user, index) => {
    return { id: index, name: user }
}, 0)
console.log(users)