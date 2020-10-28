import {Request, Response} from 'express'
import { selectActorByName } from '../data/selectActorByName'
import {Actor} from '../index'


export const getActorByName = async (req: Request, res: Response) => {
    console.log('getActorByName')
    let errorCode = 400
    try {
        const result: Actor | undefined = await selectActorByName("Glória Pires")
        if (result === undefined) {
            errorCode = 404
            throw new Error("Actor not found!")
        }
        res.status(200).send(result)
    } catch (error) {
        console.log(error)
        res.send({message: error.message})
    }
}
