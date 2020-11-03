import { connection } from ".."



export async function updateUserByID (
    id: number,
    newName: string,
    newNickname: string
 ):Promise<void> {
    try {
        await connection.raw(`
            UPDATE Users
            SET name = "${newName}", nickname = "${newNickname}"
            WHERE id = ${id}
            ;
        `)
        console.log(`updateUserByID > try`)
    } catch (error) {
        console.log(`updateUserByID > catch`)
    }
}
