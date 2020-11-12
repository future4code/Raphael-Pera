import { connection } from "../index";
import { inputRecipe } from "../service/types";


export async function insertRecipe (data: inputRecipe) {
    const {id, title, description, createdAt, userID} = data

    const sqlRaw = `
        INSERT INTO COKNU_RECIPE (id, title, description, created_at, user_id)
        VALUES (
            "${id}",
            "${title}",
            "${description}",
            "${createdAt}",
            "${userID}"
        )
        ;
    `

    await connection.raw(sqlRaw)
}
