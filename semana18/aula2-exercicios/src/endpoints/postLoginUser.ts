import { compare } from "bcryptjs";
import { Request, Response } from "express";
import { selectUserByEmail } from "../data/selectUserByEmail";
import { generateTOKEN } from "../service/authenticator";


export const postLoginUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const {email, password} = req.body
        if (!email || !password) {throw new Error(`Informe o email e a senha do usuário`)}
        if (!email.includes('@')) {throw new Error(`Email inválido`)}

        const data = {email}
        const user = await selectUserByEmail(data)

        const comparePassword = await compare(password, user.password)
        if (!comparePassword) {throw new Error(`Email ou senha incorretos!`)}

        const token = generateTOKEN({id: user.id, role: user.role})

        res.status(200).send(token)
    } catch (error) {
        res.status(res.statusCode).send({message: `[ERROR]: ${error.sqlMessage || error.message}`})
    }
}

