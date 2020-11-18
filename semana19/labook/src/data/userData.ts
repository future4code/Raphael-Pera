import { connection } from "../index"
import { User } from "../model/User"


class UserData {
    createUser = async(user: User) => {
        try {
            await connection ('labook_users')
                .insert({
                    id: user.getID(),
                    name: user.getName(),
                    email: user.getEmail(),
                    password: user.getPassword()
                })
        } catch (error) {
            throw new Error(error.sqlMessage)
        }
    }

    selectUserByEmail = async(email: string) => {
        try {
            const queryResult: any = await connection("labook_users")
            .select("*")
            .where({ email })
            
            return queryResult[0]
        } catch (error) {
            throw new Error(error.message || error.sqlMessage)
        }
    }
}

export const userData: UserData = new UserData()
