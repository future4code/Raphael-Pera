//  EXERCÍCIO 1
//      a)  Utiliza-se o método "GET"
//      b)  "/users/all"

//  EXERCÍCIO 2
//      a)  Passei o parâmetro "type" via pathParams, adotando a entidade "/users/type/:type"
//      b)  Pode ser adicionada uma rotina para verificar se o parâmetro recebido pertence ao
//          grupo de parâmetros pré-definidos e, caso contrário, uma mensagem de erro específica
//          é enviada para alertar e orientar sobre os parâmetros aceitos pelo endpoint.

//  EXERCÍCIO 3
//      
//      



// ----------------------------------------------------------------

import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { users } from './users'

const app: Express = express()
app.use(express.json())
app.use(cors())

// EXERCÍCIO 1
    app.get('/users/all', (req: Request, res: Response) => {
        try {
            res.status(200).send(users).end()
        } catch (error) {
            res.status(400).send({message: 'Error searching for users'})
        }
        
    })

//  EXERCÍCIO 2
    app.get('/users/type/:type', (req: Request, res: Response) => {
        let errorCode: number = 400
        try {
            const pType = req.params.type.toUpperCase()

            if (pType !== "NORMAL" && pType !== "ADMIN") {
                throw new Error('São permitidos apenas os parâmetros type iguais a NORMAL ou ADMIN')
            }

            const result = users.filter(user => 
                user.type === pType
            )

            if (!result) {
                errorCode = 404
                throw new Error(`Não foi encontrado nenhum usuário do tipo ${req.params.type}`)
            }

            res.status(200).send(result).end()

        } catch (error) {
            res.status(errorCode).send({message: error.message})
        }
    })


//  EXERCÍCIO 3
    app.get('/users/search', (req: Request, res: Response) => {

        try {
            const qName = req.query.name


        } catch (error) {

        }
    })







app.listen(3003, () => {
    console.log('Servidor ativo...')
})