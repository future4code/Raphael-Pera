import { Request, Response } from "express";
import { insertUser } from "../data/insertUser";
import { generateTOKEN } from "../service/authenticator";
import { generateHash } from "../service/crypt";
import { generateID } from "../service/IDgenerator";


export const postNewUser = async(req: Request, res: Response): Promise <void> => {
    try {
        let {email, password, role} = req.body
        if (!email || !password) {throw new Error(`Informe o email e a senha do novo usuário`)}
        if (!email.includes(`@`)) {throw new Error(`Email inválido!`)}
        if (password.length < 6) {throw new Error(`A senha deve conter no mínimo 6 caracteres`)}

        password = await generateHash(password)

        const id: string = generateID()
        
        const data = {id, email, password, role}

        const result = await insertUser(data)

        const token: string = generateTOKEN({id, role}) 

        res.status(200).send({message: `Usuário criado!`, token})
    } catch (error) {
        res.status(res.statusCode).send({message: `[ERROR]: ${error.sqlMessage || error.message}`})
    }
}
