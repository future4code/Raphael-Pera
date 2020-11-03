import { Request, Response } from "express";
import { selectTaskByID } from "../data/selectTaskByID";




export const getTaskByID = async(req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    try {
        const id = Number(req.params.id)
        if (isNaN(id)) {throw new Error(`ID deve ser informado no formato "001" (string) ou 1 (número)`)}

        const task = await selectTaskByID(id)
        if (!task) {errorCode = 404; throw new Error(`Tarefa não encontrada`)}

        res.status(200).send(task)
    } catch (error) {
        console.log(`[getTaskByID]: catch (erro) =`, error)
        res.status(errorCode).send({message: error.message})
    }
}
