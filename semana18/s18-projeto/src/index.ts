import express, {Express} from 'express'
import cors from 'cors'
import {AddressInfo} from 'net'
import dotenv from 'dotenv'
import knex from 'knex'
import { postUser } from './endpoint/postUser'
import { postLogin } from './endpoint/postLogin'
import { getUserProfile } from './endpoint/getUserProfile'
import { getOtherUserDataByID } from './endpoint/getOtherUserDataByID'
import { postRecipe } from './endpoint/postRecipe'
import { getRecipeByID } from './endpoint/getRecipeByID'
dotenv.config()


export const connection = knex ({
    client: 'mysql',
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



app.post('/signup', postUser)               //endpoint para cadastro de usuário
app.post('/login', postLogin)               //endpoint para login 
app.get('/user/profile', getUserProfile)    //endpoint para pegar próprio perfil
app.get('/user/:id', getOtherUserDataByID)  //endpoint para pegar perfil de outro usuário
app.post('/recipe', postRecipe)             //endpoint para criar receita
app.get('/recipe/:id', getRecipeByID)       //endpoint para pegar receita




const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.log(`Failure upon starting server`)
    }
})

