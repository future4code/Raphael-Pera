import { userData } from '../data/userData';
import { User } from '../model/User'
import { services } from "../services/services";


class UserBusiness {
    public createUser = async (user: any): Promise<string> => {
        // console.log(`[userBusiness]: [createUser]`)
        try {
            const {name, email, password} = user
            if (!name || !email || !password) {
                throw new Error('"name", "email" and "password" must be provided')
            }

            const id: string = services.generateId()
            const cypherPassword = await services.hash(password);

            await userData.createUser(
                new User(id, name, email, cypherPassword)
            )
            const token: string = services.generateToken({ id })
            return token
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }


    public login = async(userInfo: any): Promise<string> => {
        try {
            const {email, password} = userInfo
            if (!email || !password) {
                throw new Error('"email" and "password" must be provided')
            }
            
            const queryResult = await userData.selectUserByEmail(email)

            if (!queryResult) {throw new Error("Invalid email or password")}
       
            const user = new User(
                queryResult.id,
                queryResult.name,
                queryResult.email,
                queryResult.password
            )

            const passwordIsCorrect: boolean = await services.compare(password, user.getPassword())

            if (!passwordIsCorrect) {throw new Error("Invalid email or password")}
    
            const token: string = services.generateToken({id: user.getID()})

            return token
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }

    }
}

export const userBusiness: UserBusiness = new UserBusiness()
