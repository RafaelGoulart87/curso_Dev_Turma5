import fs from "fs"

export const csvToJson = (csvList) => {
    const dataJson = csvList.map(element => {
        const dataProducts = {
            id: element[0],
            name: element[1],
            preco: `R$ ${element[2].replace(".", ",")}`,
        }
        return dataProducts
    })
    return dataJson
}

export const saveToJason = (dataProducts, fileName) => {
    const parsedDataJson = JSON.stringify(dataProducts)
    fs.writeFileSync(fileName, parsedDataJson)
}