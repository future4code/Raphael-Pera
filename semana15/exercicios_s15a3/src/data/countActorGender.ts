import {connection} from '../index'


export async function countActorGender(gender: string): Promise<number | undefined> {
    try {
        const result = await connection.raw(`
            SELECT COUNT(*) as "count" FROM Actor
            WHERE gender = "${gender}"
            ;
        `)
        console.log('[countActorGender]:', result[0][0].count)
        return result[0]
    } catch (error) {
        console.log(error)
    }
}
