import { Request, Response } from "express";
import { gerNewID } from "../data/gerNewID";
import { insertNewTask } from "../data/insertNewTask";



export const putTask = async(req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    try {
        let {title, description, limitDate, creatorUserId} = req.body
        if (!title) {throw new Error(`Título da tarefa não informado`)}
        if (!description) {throw new Error(`Descrição da tarefa não informada`)}
        if (!limitDate) {throw new Error(`Data limite da tarefa não informada`)}
        if (!creatorUserId) {throw new Error(`ID do usuário criador da tarefa não informado`)}
        
        const [day, month, year] = limitDate.split('/')
        limitDate = `${year}-${month}-${day}`

        creatorUserId = Number(creatorUserId)
        if (isNaN(creatorUserId)) {throw new Error(`creatorUserId deve ser informado no formato "001" (string) ou 1 (número)`)}

        const newID = await gerNewID(`Tasks`)
        
        const newTaskIncluded = await insertNewTask(newID, title, description, limitDate, creatorUserId)
        console.log(`[putTask]: newTaskIncluded =`, newTaskIncluded)
        if (!newTaskIncluded) {throw new Error(`[putTask]: Erro ao adicionar tarefa`)}

        res.status(200).send({message: `Tarefa criada com sucesso`})
    } catch (error) {
        console.log(`[putTask]: catch =`, error)
        res.status(errorCode).send({message: error.message})
    }
}
