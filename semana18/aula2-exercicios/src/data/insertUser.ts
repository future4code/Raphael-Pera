import { connection } from "../index"
import { generateID } from "../service/IDgenerator"


export async function insertUser (data: any) {
    const {id, email, password, role} = data

    const sqlRaw = `
        INSERT INTO USERS (id, email, password, role)
        VALUES (
            "${id}",
            "${email}",
            "${password}",
            "${role}"
        )
        ;
    `
    
    await connection.raw(sqlRaw)
}

