// 8 - [REFATORAÇÃO] Dado um array de nomes, faça um programa que tenha
// como entrada um valor à ser pesquisado e retorne se o nome existe ou não no
// array.
// Exemplo de Entrada:
// [‘Juliana’, ‘Pedro’, ‘Regina’, ‘João’, ‘Patrícia’, ‘Gabriel’, ‘Carlos’, ‘Carla’]
// ‘Carla’
// Exemplo de Saída:
// O nome Carla existe no Array.

const arrayNames = ["Juliana", "Pedro", "Regina", "João", "Patricía", "Gabriel", "Carlos", "Carla"]
let search = "Rafael"

const searchName = arrayNames.find(name => name === search)
if (searchName) {
    console.log(`O nome ${search} existe no Array.`)
} else {
    console.log(`O nome ${search} não existe no Array.`)
}