import {connection, Actor} from '../index'


export async function selectActorByName(name: string): Promise<Actor | undefined> {
    try {
        const result = await connection.raw(`
            SELECT * FROM Actor
            WHERE name = "${name}"
            ;
        `)
        return result[0][0]
    } catch (error) {
        console.log('selectActorByName > catch', error)
    }
}

