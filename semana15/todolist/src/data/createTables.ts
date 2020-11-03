import { connection } from ".."


export async function createTableUsers(): Promise<void> {
    try {
        await connection.raw(`
            CREATE TABLE Users (
                id BIGINT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                nickname VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL
            )
            ;
        `)
        console.log('createTableUsers > try:', `Tabela "Users" criada com sucesso!`)
    } catch (error) {
        console.log('createTableUsers > catch:', error)
    }
}

export async function createTableTasks(): Promise<void> {
    try {
        await connection.raw(`
            CREATE TABLE Tasks (
                id BIGINT PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                description TEXT NOT NULL,
                limit_date DATE NOT NULL,
                status VARCHAR(255) NOT NULL,
                created_user VARCHAR(255) NOT NULL
            )
            ;
        `)
        console.log('createTableTasks > try:', `Tabela "Tasks" criada com sucesso!`)
    } catch (error) {
        console.log('createTableTasks > catch:', error)
    }
}


export async function createTableTaskUsers(): Promise<void> {
    try {
        await connection.raw(`
            CREATE TABLE TaskUsers (
                task_id BIGINT NOT NULL,
                user_id BIGINT NOT NULL
            )
            ;
        `)
        console.log(`createTableTaskUsers > try:`, `Tabela "TaskUsers" cria com sucesso!`)
    } catch(error) {
        console.log(`createTableTaskUsers > catch:`, error)
    }
}

