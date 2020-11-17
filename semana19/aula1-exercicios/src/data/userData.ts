import { connection } from "../index"


export const userData = {
    createUser: async function (data: any) {
        try {
            const {id, name, email, hashPassword, role} = data

            const sqlRaw = `
                INSERT INTO User_Arq (id, name, email, password, role)
                VALUES (
                    "${id}",
                    "${name}",
                    "${email}",
                    "${hashPassword}",
                    "${role}"
                )
                ;
            `
    
            const result = await connection.raw(sqlRaw)
        } catch (error) {
            throw new Error(`${error.sqlMessage}`)
        }
    }
}
