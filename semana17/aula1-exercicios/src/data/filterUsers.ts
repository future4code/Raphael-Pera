import {connection} from '../index'
import { inputData } from '../types/types'


export async function filterUsers(data: inputData): Promise<any>{
    let {name, email, type, orderBy, orderType, limit, page} = data
    // console.log(`[filterUsers]:`, `name= ${name}`, `email= ${email}`, `type= ${type}`)
    if (!orderBy) {orderBy = "name"}
    if (!orderType) {orderType = "DESC"}
    if (!limit) {limit = 5}
    if (!page) {page = 1}
    
    const offset: number = limit * (page - 1)

    let sqlRaw: string
    if (name && type) {
        sqlRaw = `
            SELECT * FROM aula48_exercicio
            WHERE LOWER(name) = "${name.toLowerCase()}" AND LOWER(type) = "${type.toLowerCase()}"
            ORDER BY ${orderBy} ${orderType.toUpperCase()}
            LIMIT ${limit}
            OFFSET ${offset}
            ;
        `
    } else {
        sqlRaw = `
            SELECT id, name, email, type
            FROM aula48_exercicio
            ${name ? `WHERE LOWER(name) = "${name.toLowerCase()}"`: ''}
            ${type ? `WHERE LOWER(type) = "${type.toLowerCase()}"`: ''}
            ORDER BY ${orderBy} ${orderType.toUpperCase()}
            LIMIT ${limit}
            OFFSET ${offset}
            ;
        `
    }
    
    const result = await connection.raw(sqlRaw)

    return result[0]
}

