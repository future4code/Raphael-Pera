import { Request, Response } from "express";
import { insertUser } from "../data/insertUser";
import { generateHash } from "../service/hashManager";
import { generateID } from "../service/idManager";
import { generateToken } from "../service/tokenManager";
import { USER_ROLE } from "../service/types";


export const postUser = async(req: Request, res: Response): Promise<void> => {
    try {
        let {name, email, password, role} = req.body
        if (!name) {throw new Error(`Username is missing`)}
        if (!email) {throw new Error(`User email is missing`)}
        if (!password) {throw new Error(`User password is missing`)}
        if (!role) {role = USER_ROLE.NORMAL}

        const id = generateID()
        const passwordHash = await generateHash(password)

        // const newDate = new Date()
        // const created_at = `${newDate.getFullYear()}-${newDate.getMonth()+1}-${newDate.getDate()}`

        const userData = {id, name, email, password: passwordHash, role}
        await insertUser(userData)

        const tokenData = {id, role}
        const token = generateToken(tokenData)

        res.status(200).send({message: `User ${name} successfully registered`, token})
    } catch (error) {
        res.status(res.statusCode).send({message: `[ERROR]: ${error.sqlMessage || error.message}`})
    }
}
