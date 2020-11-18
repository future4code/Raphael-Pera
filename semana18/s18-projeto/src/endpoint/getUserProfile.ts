import { Request, Response } from "express";
import { selectUserByID } from "../data/selectUserByID";
import { getTokenData } from "../service/tokenManager";



export const getUserProfile = async(req: Request, res: Response): Promise<void> => {
    try {
        const token = req.headers.authorization
        if (!token) {throw new Error(`Authorization is missing`)}

        const userTokenData = getTokenData(token)

        const id = userTokenData.id

        const user = await selectUserByID({id})
        if (!user) {throw new Error(`User not found`)}

        const userData = {id, name: user.name, email: user.email}
        res.status(200).send(userData)
    } catch (error) {
        res.status(res.statusCode).send({message: `[ERROR]: ${error.sqlMessage || error.message}`})
    }
}
