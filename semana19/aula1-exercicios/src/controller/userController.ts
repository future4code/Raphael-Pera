import { Request, Response } from "express"
import { userBusiness } from "../business/userBusiness"


export const userController = {
    createUser: async function (req: Request, res: Response): Promise<void> {
        try {
            const token = await userBusiness.createUser(req.body)
            res.status(200).send({token})
        } catch (error) {
            res.status(res.statusCode).send({message: `[ERROR]: ${error.sqlMessage || error.message}`})
        }
    
    }

}

