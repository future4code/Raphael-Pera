//  EXERCÍCIO 1
//      a)  Utiliza-se o método "GET"
//      b)  "/users/all"


//  EXERCÍCIO 2
//      a)  Passei o parâmetro "type" via pathParams, adotando a entidade "/users/type/:type"
//      b)  Pode ser adicionada uma rotina para verificar se o parâmetro recebido pertence ao
//          grupo de parâmetros pré-definidos e, caso contrário, uma mensagem de erro específica
//          é enviada para alertar e orientar sobre os parâmetros aceitos pelo endpoint.


//  EXERCÍCIO 3
//      a)  Costuma ser usado o query parameters
//      b)  (feito)


//  EXERCÍCIO 4
//      a)  Nada mudou. O endpoint continuou funcionando normalmente, gerando o mesmo resultado 
//          do metodo 'post'
//      b)  Não! Apesar de ser possível usar o metodo PUT para inserir informações, ele normalmente
//          é utilizado para simplesmente atualizar informações pré-existentes, e não criar novas
//          informações.
//          Para isso seria melhor utilizado o metodo POST.


//  EXERCÍCIO 5 (feito)

//  EXERCÍCIO 6 (feito)

//  EXERCÍCIO 7 (feito)

// ----------------------------------------------------------------

import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { users } from './users'

const app: Express = express()
app.use(express.json())
app.use(cors())

// EXERCÍCIO 1
    app.get('/users/all', (req: Request, res: Response): void => {
        try {
            res.status(200).send(users).end()
        } catch (error) {
            res.status(400).send({message: 'Error searching for users'})
        }
        
    })

//  EXERCÍCIO 2
    app.get('/users/type/:type', (req: Request, res: Response): void => {
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
    app.get('/users/search', (req: Request, res: Response): void => {
        let erroCode = 400
        try {
            const qName = req.query.name ? String(req.query.name) : req.query.name

            if (!qName) { throw new Error("O parâmetro 'name' não foi enviado na requisição")}

            const result = users.filter(user => user.name.toUpperCase() === qName.toUpperCase())

            if (result.length <= 0) {
                erroCode = 404
                throw new Error('Usuário não encontrado')
            }

            res.status(200).send(result).end()

        } catch (error) {
            res.status(erroCode).send({message: error.message}).end()
        }
    })


//  EXERCÍCIO 4
    app.post('/users/new', (req: Request, res: Response): void => {
        try {
            const {name, email, age, type} = req.body

            let maxId = -Infinity
            users.forEach(user => {
                if (Number(user.id) >= maxId) {maxId = Number(user.id) + 1}
            });

            const newUser = {id: maxId, name, email, age, type}
            users.push(newUser)
            res.status(200).send({message: "User created successfully"})
        } catch (error) {
            res.status(400).send({message: "Error inserting new user"})
        }
    })


//  EXERCÍCIO 5
    app.put('/users/edit', (req: Request, res: Response) => {

        try {
            const {id, name, email, age, type} = req.body
            const userIndex = users.findIndex((user) => user.id === id)
            if (userIndex < 0) { throw new Error() }
            users[userIndex] = {
                id: id,
                name: `${name} - ALTERADO`,
                email: email,
                age: age,
                type: type,
            }

            res.status(200).send({message: "User edited successfully"})
        } catch (error) {
            res.status(400).send({message: "Error editing user"})
        }
    })


//  EXERCÍCIO 6
    app.patch('/users/edit', (req: Request, res: Response) => {

        try {
            const {id, name, email, age, type} = req.body
            const userIndex = users.findIndex((user) => user.id === id)
            if (userIndex < 0) { throw new Error() }
            users[userIndex] = {
                id: id,
                name: `${name} - REALTERADO`,
                email: email,
                age: age,
                type: type,
            }

            res.status(200).send({message: "User edited successfully"})
        } catch (error) {
            res.status(400).send({message: "Error editing user"})
        }
    })


//EXERCÍCIO 7
    app.delete('/users/:id', (req: Request, res: Response) => {
        let errorCode: number = 400
        try {
            const id = Number(req.params.id)
            if (isNaN(id)) {
                throw new Error("O ID do usuário não foi informado corretamente")
            }

            const userIndex = users.findIndex((user) => user.id === id)
            if (userIndex < 0) {
                errorCode = 404
                throw new Error("Usuário não encontrado")
            }

            users.splice(userIndex, 1)
            res.status(200).send({message: "Usuário excluído com sucesso"})

        } catch (error) {
            res.status(errorCode).send({message: error.message})
        }
    })


app.listen(3003, () => {
    console.log('Servidor ativo...')
})