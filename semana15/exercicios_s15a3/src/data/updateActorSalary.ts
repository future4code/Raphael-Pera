import {connection} from '../index'
import { selectActorById } from './selectActorById'

export async function updateActorSalary(id: string, salary: number): Promise<void> {
    try {
        const actorExists = await connection
            .select("*")
            .from("Actor")
            .where("id", "=", `${id}`)

        if (!actorExists.length) {
            console.log(`[updateActorSalary]: Actor with id:${id} not found`)
        } else {
            await connection
                .where('id', "=", `${id}`)
                .update({
                    salary: salary,
                })
                .into("Actor")
            console.log("[updateActorSalary]: Salary updated sucessfully!")
        }

    } catch (error) {
        console.log(error.message)
    }
}