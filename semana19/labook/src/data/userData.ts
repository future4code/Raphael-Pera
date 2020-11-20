import { User } from "../model/User"
import { BaseDataBase } from "./BaseDataBase"


class UserData extends BaseDataBase {
    createUser = async(user: User) => {
        try {
            await this.connection ('labook_users')
                .insert({
                    id: user.getID(),
                    name: user.getName(),
                    email: user.getEmail(),
                    password: user.getPassword()
                })
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    selectUserByEmail = async(email: string) => {
        try {
            const queryResult: any = await this.connection("labook_users")
            .select("*")
            .where({ email })
            
            return queryResult[0]
        } catch (error) {
            throw new Error(error.message || error.sqlMessage)
        }
    }
}

export const userData: UserData = new UserData()
