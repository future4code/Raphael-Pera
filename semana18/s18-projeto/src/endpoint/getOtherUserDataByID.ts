import { Request, Response } from "express"
import { selectUserByID } from "../data/selectUserByID"
import { getTokenData } from "../service/tokenManager"



export const getOtherUserDataByID = async(req: Request, res: Response): Promise<void> => {
    try {
        const token = req.headers.authorization
        if (!token) {throw new Error(`Token is missing`)}

        const userTokenData = getTokenData(token)

        const id = userTokenData.id

        const user = await selectUserByID({id})
        if (!user) {throw new Error(`User requester not registered`)}

        const otherUserID = req.params.id

        const otherUser = await selectUserByID({id: otherUserID})
        if (!otherUser) {throw new Error(`User not found`)}
        
        const otherUserData = {id: otherUserID, name: otherUser.name, email: otherUser.email}

        res.status(200).send(otherUserData)
    } catch(error) {
        res.status(res.statusCode).send({message: `[ERROR]: ${error.sqlMessage || error.message}`})
    }
}
