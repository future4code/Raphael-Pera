// import { User } from "../model/User"
import { User } from "../model/user"
import { BaseDataBase } from "./BaseDataBase"


class UserData extends BaseDataBase {
    public createUser = async(user: User) => {
        try {
            await UserData.connection ('labook_users')
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

    public selectUserByEmail = async(email: string) => {
        try {
            const queryResult: any = await UserData.connection("labook_users")
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

            await UserData.connection("labook_friendships")
                .insert({
                    id: id,
                    user_id: userId,
                    friend_id: friendId
                })

        } catch (error) {
            console.log(`[UserData]: [addFriend]: [ERROR]`)
            console.log(error.message)
            console.log(error.sqlMessage)
            throw new Error(error.message || error.sqlMessage)
        }
    }


    public deleteFriend = async(id:string) => {
        try {
            console.log(id)
            const sqlRaw = `DELETE FROM labook_friendships WHERE id = "${id}"`

            await UserData.connection.raw(sqlRaw)

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

            const queryResult = await UserData.connection.raw(sqlRaw)
            // console.log(queryResult[0][0])
            return queryResult[0][0]
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

}

export const userData: UserData = new UserData()
// userData.getFriendship({userId:'1a0b238f-829f-458f-8284-9408fdde9aac', friendId:'bc02b7c2-43c1-4549-854f-7ada91e4dfbc'})