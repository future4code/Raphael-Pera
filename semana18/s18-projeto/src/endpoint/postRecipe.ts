import { Request, Response } from "express";
import { insertRecipe } from "../data/insertRecipe";
import { selectUserByID } from "../data/selectUserByID";
import { generateID } from "../service/idManager";
import { getTokenData } from "../service/tokenManager";
import { inputRecipe } from "../service/types";



export const postRecipe = async(req: Request, res: Response): Promise<void> => {
    try {
        const token = req.headers.authorization
        if (!token) {throw new Error(`Token is required`)}

        // Verifica se o usuário requisitante está cadastrado no sistema
        const userTokenData = getTokenData(token)
        const userID = userTokenData.id
        const user = await selectUserByID({id: userID})
        if (!user) {throw new Error(`User not registered`)}

        const {title, description} = req.body
        if (!title) {throw new Error(`Recipe title is required`)}
        if (!description) {throw new Error(`Recipe description is required`)}

        const id = generateID()

        const newDate = new Date()
        const createdAt = `${newDate.getFullYear()}-${newDate.getMonth()+1}-${newDate.getDate()}`

        const recipeData: inputRecipe = {id, title, description, createdAt, userID}
        await insertRecipe(recipeData)
        
        res.status(200).send({message: `[SUCCESS]: Recipe successfully registered`})
    } catch (error) {
        res.status(res.statusCode).send({message: `[ERROR]: ${error.sqlMessage || error.message}`})
    }
}
