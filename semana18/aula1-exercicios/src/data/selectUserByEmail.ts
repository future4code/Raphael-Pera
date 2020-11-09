import { connection } from "../index"

export async function selectUserByEmail (data: any) {
    const {email} = data
    const sqlRaw = `SELECT * FROM USERS WHERE email = "${email}";`
    const user = await connection.raw(sqlRaw)
    return user
}
