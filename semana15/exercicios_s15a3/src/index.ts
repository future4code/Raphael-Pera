import knex from 'knex'
import dotenv from 'dotenv'
import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import {AddressInfo} from 'net'
import { selectActorByName } from './data/selectActorByName'
import { getActorByName } from './endpoints/getActorByName'
import { getAllActors } from './endpoints/getAllActors'
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


app.get('/actor/byname', getActorByName)
app.get('/actor/all', getAllActors)


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.log(`Failure upon starting server`)
    }
})

