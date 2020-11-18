import { connection } from "../index"


export const userData = {
    createUser: async (data: any) => {
        try {
            // console.log(`[userData]: [createUser]`)
            const {id, name, email, password} = data

            await connection ('labook_users')
                .insert({
                    id,
                    name,
                    email,
                    password
                })
        } catch (error) {
            // console.log(`[userData]: [createUser]: [ERROR] ${error.sqlMessage}`)
            throw new Error(error.sqlMessage)
        }
    },

    selectUserByEmail: async(data: any) => {
        try {
            const {email} = data

            const queryResult: any = await connection("labook_users")
            .select("*")
            .where({ email })
            
            return queryResult[0]
        } catch (error) {
            throw new Error(error.message || error.sqlMessage)
        }
    }
}
