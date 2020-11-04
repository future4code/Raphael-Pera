import { connection } from ".."



export async function selectUserByID(id: number){
    try {
        const user = await connection.raw(`
            SELECT * FROM Users
            WHERE id = ${id}
            ;
        `)
        
        const {name, nickname, email} = user[0][0]
        
        console.log(`selectUserByID > try`, {id, nickname})
        return {id, nickname}
    } catch (error) {
        console.log(`selectUserByID > catch`)
    }
}
