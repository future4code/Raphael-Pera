import { connection } from "../index"



export async function insertNewTask(
    id: any,
    title: string,
    description: string,
    limitDate: string,
    creatorUserID: number
): Promise<boolean | undefined> {
    let result = false
    try {
        await connection.raw(`
            INSERT INTO Tasks
            VALUES (
                ${id},
                "${title}",
                "${description}",
                "${limitDate}",
                "active",
                ${creatorUserID}
            )
            ;
        `)
        result = true
        console.log(`[insertnewTask]: try (sucesso)`, `Tarefa adicionada com sucesso!`)
        return result
    } catch (error) {
        console.log(`[insertNewTask]: catch (error)`, error)
        return result
    }
}
