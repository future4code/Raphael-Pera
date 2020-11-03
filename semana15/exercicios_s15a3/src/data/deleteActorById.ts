import {connection} from '../index'


export async function deleteActorById(id: string): Promise<void> {
    try {
        const actorExists = await connection
            .select("*")
            .from("Actor")
            .where("id", "=", `${id}`)

        if (!actorExists.length) {
            console.log(`[deleteActorById]: Actor with id:${id} not found`)
        } else {
            await connection
                .where('id', "=", `${id}`)
                .del()
                .into("Actor")
            
            console.log("[deleteActorById]: Actor deleted sucessfully!")
        }   

    } catch (error) {
        console.log(error)
    }
}