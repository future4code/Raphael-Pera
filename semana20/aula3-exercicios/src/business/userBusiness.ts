import userData from "../data/userData"


export class UserBusiness {
    public getUserById = async(id: string | undefined) => {
        try {
            if(!id) {throw new Error(`User ID is required`)}

            const user = await userData.getUserById(id)
            if(!user) {throw new Error(`User not found`)}
            // console.log(`[UserBusiness]: [getUserById]: user =`, user)
            return user
        } catch (error) {
            throw new Error(error.message)
        }
    }
}

export const userBusiness:UserBusiness = new UserBusiness()
