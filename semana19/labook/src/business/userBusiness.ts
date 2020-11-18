import { userData } from "../data/userData";
import { services } from "../services/services";
import { User } from "../types";


export const userBusiness = {
    createUser: async(user: any): Promise<string> => {
        // console.log(`[userBusiness]: [createUser]`)
        try {
            const {name, email, password} = user
            if (!name || !email || !password) {
                throw new Error('"name", "email" and "password" must be provided')
            }

            const id: string = services.generateId()
            const cypherPassword = await services.hash(password);

            const data = {id, name, email, password: cypherPassword}
            await userData.createUser(data)
            const token: string = services.generateToken({ id })
            return token
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    },


    login: async(userInfo: any) => {
        try {
            const {email, password} = userInfo
            if (!email || !password) {
                throw new Error('"email" and "password" must be provided')
            }

            const data = {email}
            const queryResult = await userData.selectUserByEmail(data)

            if (!queryResult) {throw new Error("Invalid email or password")}
       
            const user: User = {
                id: queryResult.id,
                name: queryResult.name,
                email: queryResult.email,
                password: queryResult.password
            }
       
            const passwordIsCorrect: boolean = await services.compare(password, user.password)

            if (!passwordIsCorrect) {throw new Error("Invalid email or password")}
    
            const token: string = services.generateToken({id: user.id})

            return token
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }

    },


}
