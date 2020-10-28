import {Request, Response} from 'express'
import { selectAllActors } from '../data/selectAllActors'
import {Actor} from '../index'


export const getAllActors = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const result: Actor[] | any = await selectAllActors()
        if (!result.length) {
            errorCode = 404
            throw new Error("Actors not found!")
        }
        res.status(200).send(result)
    } catch (error) {
        console.log(error)
        res.send({message: error.message})
    }
}