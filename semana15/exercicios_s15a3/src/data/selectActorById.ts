import {Actor, connection} from '../index'

export async function selectActorById(id: string): Promise<Actor | undefined>{
    try {
        const result = await connection
            .select("*")
            .from("Actor")
            .where("id", "=", `${id}`)

        if (!result.length) {
            return undefined
        } else {
            return result[0][0]
        }
    } catch (error) {
        console.log(error.message)
    }
}