import { request, Request, Response } from "express";
import { gerNewID } from "../data/gerNewID";
import { insertNewUser } from "../data/insertNewUser";


export const putUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const {name, nickname, email} = req.body

        if (!name) {throw new Error("É necessário informar um nome!")}
        if (!nickname) {throw new Error("É necessário informar um apelido!")}
        if (!email) {throw new Error("É necessário informar um email!")}

        const newID = await gerNewID('Users')

        await insertNewUser(newID, name, nickname, email)

        console.log(`postUser > try:`, `Usuário ${name} cadastrado com sucesso no ID ${newID}`)
        res.status(200).send({message: `Usuário ${name} cadastrado com sucesso no ID ${newID}`})
    } catch (error) {
        console.log(`postUser > catch:`, error.message)
        res.status(400).send({message: error.message})
    }
}
