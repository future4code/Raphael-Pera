import {Request, Response} from 'express'
import { selectAllActors } from '../data/selectAllActors'
import {Actor} from '../index'


export const getAllActors = async (req: Request, res: Response) => {
    // console.log('getAllActors')
    let errorCode = 400
    try {
        const result: Actor[] = await selectAllActors()
        console.log('getAllActors', result)
        if (result.length <= 0) {
            errorCode = 404
            throw new Error("Actors not found!")
        }
        res.status(200).send(result[0])
    } catch (error) {
        console.log(error)
        res.send({message: error.message})
    }
}