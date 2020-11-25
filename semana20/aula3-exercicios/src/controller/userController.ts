import { Request, Response } from "express";
import { userBusiness, UserBusiness } from "../business/userBusiness";



export class UserController {
    public getUserById = async(req: Request, res: Response): Promise<void> => {
        try {
            const id: string | undefined = req.params.id

            const user = await userBusiness.getUserById(id)

            res.status(200).send(user)
        } catch (error) {
            res.status(res.statusCode).send({message: `[ERROR]: ${error.message}`})
        }
    } 
}

export const userController:UserController = new UserController()