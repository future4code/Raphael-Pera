import { Request, Response } from "express";
import { userBusiness } from "../business/userBusiness";



export class UserController {
    public getUserById = async(req: Request, res: Response): Promise<void> => {
        try {
            const id: string | undefined = req.params.id

            const user = await userBusiness.getUserById(id)

            res.status(200).send(user)
        } catch (error) {
            const {statusCode, message} = error
            res.status(statusCode || 400).send({message})
        }
    } 
}

export const userController:UserController = new UserController()