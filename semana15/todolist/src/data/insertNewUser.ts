import { connection } from ".."



export async function insertNewUser(
    id: number | undefined,
    name: string,
    nickname: string,
    email: string
):Promise<void> {
    try {
        await connection.raw(`
            INSERT INTO Users
            VALUES (
                ${id},
                "${name}",
                "${nickname}",
                "${email}"
            )
            ;
        `)
        console.log(`insertNewUser > try:`, `Novo usuário ${name} inserido na tabela "Users" com sucesso com o ID ${id}!`)
    } catch (error) {
        console.log(`insertNewUser > catch`, error)
    }
}
