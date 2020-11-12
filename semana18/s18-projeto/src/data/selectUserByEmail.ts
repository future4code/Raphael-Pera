import { connection } from "../index"
import { dataBaseUser } from "../service/types"


export async function selectUserByEmail (data:any): Promise<dataBaseUser | undefined> {
    const {email} = data

    const sqlRaw = `
        SELECT * FROM COKNU_USER
        WHERE email = "${email}"
        ;
    `
    const requestedData = await connection.raw(sqlRaw)
    const user = requestedData[0][0]
    return user
}

