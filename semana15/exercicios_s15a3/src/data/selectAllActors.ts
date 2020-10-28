import {connection, Actor} from '../index'


export async function selectAllActors(): Promise<Actor | undefined> {
    try {
        const result = await connection.raw(`
            SELECT * FROM Actor;
        `)
        console.log('selectAllActors', result)
        return result[0]
    } catch (error) {
        console.log('selectAllActors > catch', error)
    }
}