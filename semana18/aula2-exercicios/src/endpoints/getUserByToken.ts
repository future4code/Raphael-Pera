import { Request, Response } from "express";
import { selectUserByID } from "../data/selectUserByID";
import { getTokenData } from "../service/authenticator";

export const getUserByToken = async(req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string
        const id = getTokenData(token)

        const user = await selectUserByID({id})

        const data = {id: user.id, email: user.email}

        res.status(200).send(data)
    } catch (error) {
        res.status(res.statusCode).send({message: `[ERROR]: ${error.sqlMessage || error.message}`})
    }
}
