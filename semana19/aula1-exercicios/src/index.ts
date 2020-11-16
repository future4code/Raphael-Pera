import express, {Express} from 'express'
import cors from 'cors'
import {AddressInfo} from 'net'
import dotenv from 'dotenv'
import knex from 'knex'

dotenv.config()
export const connection = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
})


const app: Express = express()
app.use(express.json())
app.use(cors())


app.put('/signup', )


const server = app.listen(process.env.PORT || 3003, () => {
    if(server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost${address.port}`)
    } else {
        console.log(`Failure upon starting server`)
    }
})
