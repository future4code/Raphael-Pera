import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import {AddressInfo} from 'net'
import knex from 'knex'
import dotenv from 'dotenv'
import { createTableTasks, createTableTaskUsers, createTableUsers } from './data/createTables'
import { gerNewID } from './data/gerNewID'
import { putUser } from './endpoints/putUser'
import { getUserByID } from './endpoints/getUserByID'
import { postEditUserByID } from './endpoints/postEditUserByID'
import { putTask } from './endpoints/putTask'
import { getTaskByID } from './endpoints/getTaskByID'
dotenv.config()

export const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
})




const app: Express = express()
app.use(express.json())
app.use(cors())


// createTableUsers()
// createTableTasks()
// createTableTaskUsers()

// const newID = gerNewID('Users')

app.put('/user', putUser)
app.get(`/user/:id`, getUserByID)
app.post(`/user/edit/:id`, postEditUserByID)
app.put(`/task`, putTask)
app.get(`/task/:id`, getTaskByID)


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})