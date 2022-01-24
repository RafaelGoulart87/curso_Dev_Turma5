import fs from "fs"

export const saveToJason = (data, fileName) => {
    const parsedJSON = JSON.stringify(data)
    fs.writeFileSync(fileName, parsedJSON)
}