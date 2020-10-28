import knex from 'knex'
import dotenv from 'dotenv'
import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import {AddressInfo} from 'net'
import { selectActorByName } from './data/selectActorByName'
import { getActorByName } from './endpoints/getActorByName'
import { getAllActors } from './endpoints/getAllActors'
import { selectAllActors } from './data/selectAllActors'
import { countActorGender } from './data/countActorGender'
import { updateActorSalary } from './data/updateActorSalary'
import { deleteActorById } from './data/deleteActorById'
dotenv.config()


export const connection = knex({
    client: "mysql", connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
})

export type Actor = {
    id: string,
    name: string,
    salary: number,
    birth_date: Date,
    gender: string
}

const app: Express = express()
app.use(express.json())
app.use(cors())

//  Busca todos os atores (não responde nenhum exercício)
    app.get('/actor/all', getAllActors)

//  1a) O retorno gerado pelo uso do"raw" contitui-se de uma array contendo outras duas arrays,
//      sendo que a primeira array contem os dados que desejamos e a segunda contém outras
//      informação não pertinentes à consulta 

//  1b) Busca ator pelo nome
    app.get('/actor/:name', getActorByName)

//  1c) Busca a quantidade de atores de determinado genero
    countActorGender("female")


//  2a) Atualiza o salário do ator pelo "id"
    updateActorSalary("003", 650000)

// 2b)  Recebe um id e deleta um ator
    deleteActorById("014")



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.log(`Failure upon starting server`)
    }
})

