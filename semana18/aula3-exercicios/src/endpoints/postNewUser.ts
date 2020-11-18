import { Request, Response } from "express";
import { insertUser } from "../data/insertUser";
import { insertAddress } from "../data/insertAddress";
import { generateTOKEN } from "../service/authenticator";
import { generateHash } from "../service/crypt";
import { getAddressInfo } from "../service/getAddressInfo";
import { generateID } from "../service/IDgenerator";


export const postNewUser = async(req: Request, res: Response): Promise <void> => {
    try {
        let {email, password, role, cep, numero, complemento} = req.body
        if (!email || !password) {throw new Error(`Informe o email e a senha do novo usuário`)}
        if (!email.includes(`@`)) {throw new Error(`Email inválido!`)}
        if (password.length < 6) {throw new Error(`A senha deve conter no mínimo 6 caracteres`)}
        if(!cep) {throw new Error(`Informe o cep do usuário`)}
        if(!numero) {throw new Error(`Informe o numero do endereço do usuário`)}
        if(!complemento) {complemento = ''}

        const id: string = generateID()
        
        password = await generateHash(password)

        const data = {id, email, password, role}

        const result = await insertUser(data)

        const addressData = await getAddressInfo(cep)
        const address = {...addressData, numero, complemento, userID: id}
        await insertAddress(address)

        const token: string = generateTOKEN({id, role}) 

        res.status(200).send({message: `Usuário criado!`, token})
    } catch (error) {
        res.status(res.statusCode).send({message: `[ERROR]: ${error.sqlMessage || error.message}`})
    }
}
