import { connection } from "../index"

export async function selectUserByID (data: any) {
    const {id} = data
    const sqlRaw = `SELECT * FROM USERS WHERE id = "${id}";`
    const user = await connection.raw(sqlRaw)
    return user[0][0]
}
