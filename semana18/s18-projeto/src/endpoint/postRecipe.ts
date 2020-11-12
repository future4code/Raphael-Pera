import { Request, Response } from "express";
import { insertRecipe } from "../data/insertRecipe";
import { generateID } from "../service/idManager";
import { inputRecipe } from "../service/types";



export const postRecipe = async(req: Request, res: Response): Promise<void> => {
    try {
        const token = req.headers.authorization
        if (!token) {throw new Error(`Token is missing`)}

        const {title, description} = req.body
        if (!title) {throw new Error(`Recipe title is required`)}
        if (!description) {throw new Error(`Recipe description is required`)}

        const id = generateID()

        const newDate = new Date()
        const createdAt = `${newDate.getFullYear()}-${newDate.getMonth()+1}-${newDate.getDate()}`

        const recipeData: inputRecipe = {id, title, description, createdAt}
        await insertRecipe(recipeData)
        
        res.status(200).send({message: `[SUCCESS]: Recipe successfully registered`})
    } catch (error) {
        res.status(res.statusCode).send({message: `[ERROR]: ${error.sqlMessage || error.message}`})
    }
}
