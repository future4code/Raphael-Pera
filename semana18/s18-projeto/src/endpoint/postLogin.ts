import { Request, Response } from "express";
import { selectUserByEmail } from "../data/selectUserByEmail";
import { compareHash } from '../service/hashManager'
import { generateToken } from "../service/tokenManager";


export const postLogin = async(req: Request, res: Response): Promise<void> => {
    try {
        const {email, password} = req.body
        if (!email || !password) {throw new Error(`Email or password is missing`)}

        const user = await selectUserByEmail({email})
        if (!user) {throw new Error(`User not found`)}

        const passwordIsValid = await compareHash(password, user.password)
        if (!passwordIsValid) {throw new Error(`Invalid Password`)}

        const userData = {id: user.id, role: user.role}
        const token = generateToken(userData)

        res.status(200).send({message: `User ${user.name} successfully logged in`, token})
    } catch (error) {
        res.status(res.statusCode).send({message: `[ERROR]: ${error.sqlMessage || error.message}`})
    }
}
