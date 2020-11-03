import {Request, Response} from 'express'
import { selectActorByName } from '../data/selectActorByName'
import {Actor} from '../index'


export const getActorByName = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const name = req.params.name
        const result: Actor | undefined = await selectActorByName(name)
        if (!result) {
            errorCode = 404
            throw new Error("Actor not found!")
        }
        res.status(200).send(result)
    } catch (error) {
        console.log(error)
        res.send({message: error.message})
    }
}
