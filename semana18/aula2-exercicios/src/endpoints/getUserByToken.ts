import { Request, Response } from "express";
import { selectUserByID } from "../data/selectUserByID";
import { getTokenData } from "../service/authenticator";
import { USER_ROLE } from "../service/types";

export const getUserByToken = async(req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string
        const userData = getTokenData(token)
        const {id, role} = userData

        if (role !== USER_ROLE.NORMAL) {throw new Error(`Unauthorized`)}

        const user = await selectUserByID({id})
        if (!user) {throw new Error(`Usuário não encontrado`)}

        const data = {id: user.id, email: user.email}

        res.status(200).send(data)
    } catch (error) {
        res.status(res.statusCode).send({message: `[ERROR]: ${error.sqlMessage || error.message}`})
    }
}
