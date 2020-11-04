import { Request, Response } from "express";
import { selectUserByID } from "../data/selectUserByID";
import { updateUserByID } from "../data/updateUserByID";


export const postEditUserByID = async(req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    try {
        const id: number = Number(req.params.id)
        if (isNaN(id)) {throw new Error(`ID não informado corretamente`)}

        const {name, nickname} = req.body
        if (!name) {throw new Error(`Deve ser informado o nome na requisição`)}
        if (!nickname) {throw new Error(`Deve ser informado o apelido na requisição`)}

        const user = await selectUserByID(id)
        if (!user) {errorCode = 404; throw new Error(`ID ${id} não encontrado`)}

        await updateUserByID(id, name, nickname)

        res.status(200).send({message: `Usuário editado com sucesso`})
    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
}
