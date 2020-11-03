import { Request, Response } from "express"
import { connection } from "../index"


export async function gerNewID(table:string): Promise<number | undefined> {
    try {
        const maxID = await connection.raw(`
            SELECT MAX(id) as "maxID" FROM ${table}
        `)

        let newID: number
        if (!maxID[0][0].maxID) {
            newID = 1
        } else {
            newID = maxID[0][0].maxID + 1
        }

        return newID
    } catch (error) {
        console.log(`gerNewId > catch`, error)
    }
}
