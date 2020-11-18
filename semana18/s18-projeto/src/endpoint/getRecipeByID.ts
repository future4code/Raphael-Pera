import { Request, Response } from "express";
import { selectRecipeByID } from "../data/selectRecipeByID";
import { selectUserByID } from "../data/selectUserByID";
import { getTokenData } from "../service/tokenManager";



export const getRecipeByID = async(req: Request, res: Response): Promise<void> => {
    try {
        // Verifica se o token foi informado
        const token = req.headers.authorization
        if (!token) {throw new Error(`Token is required`)}

        // Verifica se o usuário requisitante está cadastrado no sistema
        const userTokenData = getTokenData(token)
        const userID = userTokenData.id
        const user = await selectUserByID({id: userID})
        if (!user) {throw new Error(`User requester not registered`)}

        // Verifica se o ID foi informado
        const id = req.params.id
        if (!id) {throw new Error(`ID is required`)}

        const recipe = await selectRecipeByID({id})
        res.status(200).send(recipe)
    } catch (error) {
        res.status(res.statusCode).send({message: `[ERROR]: ${error.sqlMessage || error.message}`})
    }
}
