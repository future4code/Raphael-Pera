import { connection } from "..";
import { Recipe } from "../types/Recipe";

export default async function selectAllRecipes():Promise<any> {
   const result: Recipe[] = await connection.raw(`
      SELECT title, name AS "author", description
      FROM recipes_aula48
      JOIN users_aula48 
      ON user_id = users_aula48.id;
   `)

   return result[0]
}