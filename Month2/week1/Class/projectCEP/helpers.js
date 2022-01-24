import fetch from 'node-fetch'

export const arrayCEP = () => {
    let arrayCEP = []
    for (let index = 0; index < 20; index++) {
        arrayCEP[index] = parseInt((Math.random() * (29100000 - 29000000) + 29000000))
    }
    return arrayCEP
}

export const fromCEP = async cep => {

    try {
        const response = await (await fetch(`https://viacep.com.br/ws/${cep}/json/`)).json()
        return response
    } catch (error) {
        console.log(`Deu erro com o cep: ${cep} solicitado`)
    }
}

export const getRightListCEP = async() => {
    try {
        let newArray = await Promise.all(arrayCEP().map((cep) => fromCEP(cep)))
        return newArray
    } catch (error) {

    }
}