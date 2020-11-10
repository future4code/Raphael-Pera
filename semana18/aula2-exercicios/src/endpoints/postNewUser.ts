import { Request, Response } from "express";
import { insertUser } from "../data/insertUser";
import { generateTOKEN } from "../service/authenticator";
import { generateID } from "../service/IDgenerator";


export const postNewUser = async(req: Request, res: Response): Promise <void> => {
    try {
        const {email, password} = req.body
        if (!email || !password) {throw new Error(`Informe o email e a senha do novo usuário`)}
        if (!email.includes(`@`)) {throw new Error(`Email inválido!`)}
        if (password.length < 6) {throw new Error(`A senha deve conter no mínimo 6 caracteres`)}

        const id: string = generateID()

        const data = {id, email, password}

        const result = await insertUser(data)

        const token: string = generateTOKEN({id}) 

        console.log({message: `Usuário criado!`, token})

        res.status(200).send({message: `Usuário criado!`, token})
    } catch (error) {
        res.status(res.statusCode).send({message: `[ERROR]: ${error.sqlMessage || error.message}`})
    }
}
