import { connection } from "../index"

export async function sqlDeleteUser (data: any) {
    const {id} = data
    const sqlRaw = `DELETE FROM USERS WHERE id = "${id}";`
    const result = await connection.raw(sqlRaw)
}
