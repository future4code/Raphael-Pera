import { connection } from "../index"


export async function selectRecipeByID (data: any) {
    const {id} = data

    const sqlRaw = `
        SELECT * FROM COKNU_RECIPE
        WHERE id = "${id}"
        ;
    `

    const requestedData = await connection.raw(sqlRaw)
    const recipe = requestedData[0][0]
    return recipe
}

