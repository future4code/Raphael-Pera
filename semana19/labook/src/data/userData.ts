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


    public addFriend = async(data:any) => {
        try {
            const {id, userId, friendId} = data

            await this.connection("labook_friendships")
                .insert({
                    id: id,
                    user_id: userId,
                    friend_id: friendId
                })

        } catch (error) {
            throw new Error(error.message || error.sqlMessage)
        }
    }


    public deleteFriend = async(id:string) => {
        try {
            console.log(id)
            const sqlRaw = `DELETE FROM labook_friendships WHERE id = "${id}"`

            await this.connection.raw(sqlRaw)

        } catch (error) {
            throw new Error(error.message || error.sqlMessage)
        }
    }


    public getFriendship = async(data:any) => {
        try {
            const {userId, friendId} = data

            const sqlRaw = `
                SELECT * FROM labook_friendships
                WHERE user_id = "${userId}" AND friend_id = "${friendId}"
                ;
            `

            const queryResult = await this.connection.raw(sqlRaw)
            // console.log(queryResult[0][0])
            return queryResult[0][0]
        } catch (error) {
            throw new Error(error.message || error.sqlMessage)
        }
    }

}

export const userData: UserData = new UserData()
// userData.getFriendship({userId:'1a0b238f-829f-458f-8284-9408fdde9aac', friendId:'bc02b7c2-43c1-4549-854f-7ada91e4dfbc'})