import { connection } from "../index";
import { dataBaseUser } from "../service/types";

export async function selectUserByID (data: any): Promise<dataBaseUser | undefined> {
    const {id} = data

    const sqlRaw = `
        SELECT * FROM COKNU_USER
        WHERE id = "${id}"
        ;
    `

    const requestedData = await connection.raw(sqlRaw)
    const user = requestedData[0][0]

    return user
}
