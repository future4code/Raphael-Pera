import {userData} from "../data/userData"
import { CustomError } from "../errors/CustomError"


export class UserBusiness {
    public getUserById = async(id: string | undefined) => {
        try {
            if(!id) {throw new Error(`User ID is required`)}

            const user = await userData.getUserById(id)
            if(!user) {throw new CustomError(404, `User not found`)}
            // console.log(`[UserBusiness]: [getUserById]: user =`, user)
            return user
        } catch (error) {
            const {statusCode, message} = error
            throw new CustomError(statusCode, message)
        }
    }
}

export const userBusiness:UserBusiness = new UserBusiness()
