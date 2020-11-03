import { Request, Response } from "express"
import selectAllRecipes from "../data/selectAllRecipes"
import { Recipe } from "../types/Recipe"

export default async function getAllRecipes(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const recipes: Recipe[] = await selectAllRecipes()

      if(!recipes.length){
         res.statusCode = 404
         throw new Error("No recipes found")
      }

      res.status(200).send(recipes)
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}