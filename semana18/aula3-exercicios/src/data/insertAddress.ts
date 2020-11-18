import { connection } from "../index"
import { generateID } from "../service/IDgenerator"


export async function insertAddress (data: any) {
    const {userID, logradouro, numero, complemento, bairro, cidade, estado} = data
    const id: string = generateID()

    const sqlRaw = `
        INSERT INTO ADDRESS (id, logradouro, numero, complemento, bairro, cidade, estado, user_id)
        VALUES(
            "${id}",
            "${logradouro}",
            "${numero}",
            "${complemento}",
            "${bairro}",
            "${cidade}",
            "${estado}",
            "${userID}"
        )
        ;
    `

    const result = await connection.raw(sqlRaw)
}
