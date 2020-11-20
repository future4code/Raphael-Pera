import { userData } from '../data/userData';
import { User } from '../model/User';
import { services } from "../services/services";
import { AuthenticationData } from '../types';


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

    public addFriend = async(data:any) => {
        try {
            const {token, friendId} = data
            if (!token) {throw new Error(`Authorization token is requeired`)}
            if (!friendId) {throw new Error(`Friend Id is required`)}

            const tokenData: AuthenticationData = services.getTokenData(token)
            const userId: string = tokenData.id
            const id: string = services.generateId()

            const friendship1 = await userData.getFriendship({userId, friendId})
            const friendship2 = await userData.getFriendship({userId: friendId, friendId: userId})

            if (!friendship1) { await userData.addFriend({id, userId: userId, friendId: friendId}) }
            if (!friendship2) { await userData.addFriend({id, userId: friendId, friendId: userId}) }
        } catch (error) {
            throw new Error(error.message)
        }
    }


    public deleteFriend = async(data:any) => {
        try {
            const {token, friendId} = data
            if (!token) {throw new Error(`Authorization token is requeired`)}
            if (!friendId) {throw new Error(`Friend Id is required`)}

            const tokenData: AuthenticationData = services.getTokenData(token)
            const userId: string = tokenData.id

            const friendship1 = await userData.getFriendship({userId, friendId})
            const friendship2 = await userData.getFriendship({userId: friendId, friendId: userId})
            
            if (!friendship1) {throw new Error(`This friendship doesnt exists`)}

            if (friendship1) { await userData.deleteFriend(friendship1.id) }
            if (friendship2) { await userData.deleteFriend(friendship2.id) }
        } catch (error) {
            throw new Error(error.message)
        }
    }

}

export const userBusiness: UserBusiness = new UserBusiness()
