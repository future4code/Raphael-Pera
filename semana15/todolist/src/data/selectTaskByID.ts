import { connection } from "../index"



export async function selectTaskByID(id: number) {
    try {
        const task = await connection.raw(`
            SELECT * FROM Tasks WHERE id = ${id}
            ;
        `)
        return task[0][0]
    } catch (error) {
        console.log(`[selectTaskByID]: catch (erro) =`, error)
    }
}
