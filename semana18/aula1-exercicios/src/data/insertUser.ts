import { connection } from "../index"
import { generateID } from "../service/IDgenerator"


export async function insertUser (data: any) {
    const {id, email, password} = data

    const sqlRaw = `
        INSERT INTO USERS (id, email, password)
        VALUES (
            "${id}",
            "${email}",
            "${password}"
        )
        ;
    `
    
    await connection.raw(sqlRaw)
}

