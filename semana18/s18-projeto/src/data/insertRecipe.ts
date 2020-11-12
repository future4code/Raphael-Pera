import { connection } from "../index";
import { inputRecipe } from "../service/types";


export async function insertRecipe (data: inputRecipe) {
    const {id, title, description, createdAt} = data

    const sqlRaw = `
        INSERT INTO COKNU_RECIPE (id, title, description, created_at)
        VALUES (
            "${id}",
            "${title}",
            "${description}",
            "${createdAt}"
        )
        ;
    `

    await connection.raw(sqlRaw)
}
