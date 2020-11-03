import { Request, Response } from "express"
import { selectUserByID } from "../data/selectUserByID"


export const getUserByID = async(req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    try {
        const id: number = Number(req.params.id)

        if (isNaN(id)) {throw new Error(`O ID a ser consultado deve ser passado via path parameter`)}

        const user = await selectUserByID(id)
        if (!user) {errorCode = 404; throw new Error(`ID ${id} não encontrado!`)}

        console.log(`getUserByID > try`, user)
        res.status(200).send(user)
    } catch (error) {
        console.log(`getUserByID > catch`, error.message)
        res.status(errorCode).send({message: error.message})
    }
}
