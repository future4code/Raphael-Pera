import {connection, Actor} from '../index'


export async function selectActorByName(name: string): Promise<Actor | undefined> {
    console.log(`${name}`)
    try {
        const result = await connection.raw(`
            SELECT * FROM Actor
            WHERE name = ${name}
            ;
        `)
        console.log(result)
        return result
    } catch (error) {
        console.log('selectActorByName > catch', error)
    }
}

