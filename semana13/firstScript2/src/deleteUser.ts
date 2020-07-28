import * as fs from 'fs'

const fileData: string = fs.readFileSync("./users.json").toString() 

let users

try {
    users = JSON.parse(fileData)
} catch (error) {
    users = []
    console.log("Erro ao ler a base de dados: " + error.message)
}

const id: number = Number(process.argv[2])

users.forEach((element: any, i:number, array: any) => {
    if (element.id === id){
        array.splice(i, 1)
    }
});

try {
    const updatedUsers: string = JSON.stringify(users,null,2)
    fs.writeFileSync("./users.json", updatedUsers)
} catch (error) {
    console.log("Erro ao atualizar a base de dados")
}