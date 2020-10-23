import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import { bankData, extractItem, bankAccount } from './bankData'


const app: Express = express()

app.use(express.json())
app.use(cors())

app.post('/f4bank/createAcc', (req: Request, res: Response) => {
    let errorCode = 400
    try {
        let {name, CPF, birthday} = req.body
        if (birthday.lenght < 10) {
            throw new Error("A data de nascimento deve estar no formato 'dd/mm/aaaa' ")
        }
        const [day, month, year] = birthday.split('/')

        birthday = new Date(`${year}-${month}-${day}`)
        const ageTimestamp: number = new Date().getTime() - birthday.getTime()
        const ageYears: number = ageTimestamp / 1000 / 60 / 60 / 24 / 365
        
        if (ageYears < 18) {
            throw new Error("Somente indivíduos maiores de 18 anos podem criar uma conta")
        }

        if (bankData.findIndex(acc => acc.CPF === CPF) < 0) {
            throw new Error("Já existe um usuário cadastrado com este CPF")
        }

        

        res.status(200).send('Conta criada com sucesso?')
    } catch (error) {
        res.status(400).send('Error')
    }
})




// app.listen(3003, () => {console.log(`Server running...`)})
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost ${address.port}...`)
    } else {
        console.log(`Failure upon starting server`)
    }
})