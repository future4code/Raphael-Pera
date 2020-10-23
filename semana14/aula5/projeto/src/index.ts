import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import { bankData, extractItem, bankAccount } from './bankData'


const app: Express = express()

app.use(express.json())
app.use(cors())

app.get('/f4bank/accAll', (req: Request, res: Response) => {
    let errorCode = 400
    try {
        res.status(200).send(bankData).end()
    } catch (error) {
        res.status(errorCode).send().end()
    }
})

//  CRIAR CONTA
    app.post('/f4bank/createAcc', (req: Request, res: Response) => {
        let errorCode = 400
        try {
            let {name, CPF, birthday} = req.body
            if (birthday.lenght < 10) {
                throw new Error("A data de nascimento deve estar no formato 'dd/mm/aaaa' ")
            }
            const [day, month, year] = birthday.split('/')

            birthday = `${year}-${month}-${day}`
            const ageTimestamp: number = new Date().getTime() - new Date(birthday).getTime()
            const ageYears: number = ageTimestamp / 1000 / 60 / 60 / 24 / 365
            
            if (ageYears < 18) {
                throw new Error("Somente indivíduos maiores de 18 anos podem criar uma conta")
            }

            if (bankData.findIndex(acc => acc.CPF === CPF) >= 0) {
                throw new Error("Já existe um usuário cadastrado com este CPF")
            }

            const newAcc: bankAccount = {
                name,
                CPF,
                birthday,
                balance: 0,
                extract: [],
            }

            bankData.push(newAcc)

            res.status(200).send('Conta criada com sucesso!').end()
        } catch (error) {
            res.status(errorCode).send({message: error.message}).end()
        }
    })


//  PEGAR SALDO
    app.get('/f4bank/balance', (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const {name, CPF} = req.body

            if (!name || !CPF) {
                throw new Error("Informe o nome e o CPF da conta a ser consultada")
            }

            const balance: number | undefined = bankData.find(acc => acc.CPF === CPF)?.balance
            if (balance === undefined) {
                errorCode = 404
                throw new Error("Usuário não encontrado")
            }

            res.status(200).send({message: `Saldo: ${balance}`}).end()
        } catch (error) {
            res.status(errorCode).send({message: error.message}).end()
        }
    })


//  ADICIONAR SALDO
    app.put('/f4bank/balance/alt', (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const {name, CPF, value} = req.body

            if (!name || !CPF || !value) {
                throw new Error("ERROR! Informe o nome e o CPF da conta a ser alterada, e o novo valor do saldo")
            }

            const accIndex: number = bankData.findIndex(acc => acc.CPF === CPF)
            if (accIndex < 0) {
                errorCode = 404
                throw new Error("ERROR! Usuário não encontrado")
            }

            bankData[accIndex].balance = value

            res.status(200).send({message: `Saldo alterado com sucesso!`}).end()
        } catch (error) {
            res.status(errorCode).send({message: error.mesage}).end()
        }
    })


//  PAGAR CONTA
    app.put('/f4bank/paybill/:CPF', (req: Request, res: Response) => {
        let errorCode = 400
        try {
            let {value, description, date} = req.body
            // if (!req.params.CPF) {
            //     errorCode = 401
            //     throw new Error("Necessário passar o CPF via path parameter")
            // }

            if (!value || !description) {
                errorCode = 401
                throw new Error("Informe o valor e a descrição do pagamento")
            }
            
            if (!date) {
                date = `${new Date().getUTCFullYear()}-${new Date().getUTCMonth()}-${new Date().getUTCDate()}`
            } else if (date.lenght < 10 || date.split('/').lenght < 3) {
                errorCode = 401
                throw new Error("Informe a data no formato 'dd/mm/aaaa'")
            } else if (new Date(date).getTime() < new Date().getTime() - 86040000) {
                errorCode = 401
                throw new Error("A data do pagamento deve ser igual ou maior que a data atual")
            } else {
                const [day, month, year] = date.split('/')
                date = `${year}-${month}-${day}`
            }

            const accIndex = bankData.findIndex(acc => acc.CPF === req.params.CPF)

            if (accIndex < 0) {
                errorCode = 401
                throw new Error(`Usuário portador do CPF ${req.params.CPF} não encontrado`)
            }
            
            // console.log(bankData[accIndex].balance, value)

            if (value > bankData[accIndex].balance) {
                errorCode = 401
                throw new Error("Saldo insuficiente!")
            }

            bankData[accIndex].extract.push({value, description, date,})
            bankData[accIndex].balance -= value

            res.status(200).send("Pagamento cadastrado com sucesso").end()
        } catch (error) {
            res.status(errorCode)
                .send(
                    errorCode === 400 ?
                    'Erro ao cadastrar o pagamento':
                    {message: error.message})
                .end()
        }
    })

    //  Para o caso de não ser passado o CPF como path parameter
    app.put('/f4bank/paybill', (req: Request, res: Response) => {
        res.status(401).send({message: "Necessário passar o CPF via path parameter"}).end()
    })



//  TRANSFERENCIA INTERNA
    app.post('/f4bank/transfer', (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const {name, CPF, nameDestiny, CPFDestiny} = req.body

            //----------------------

            //  Código da API aqui.

            //----------------------

            res.status(200).send({message: "Tranferência realizada com sucesso"})
        } catch (error) {
            res.status(errorCode).send({message: error.message}).end()
        }
    })







// //  TESTES
//     app.get('/f4bank/teste', (req: Request, res: Response) => {
//         let errorCode = 400
//         try {
//             const stringTeste: string = 'bananinhas'
//             const arrayTeste = stringTeste.split('/')
//             console.log(arrayTeste)
//             const dateString = `${new Date().getUTCFullYear()}-${new Date().getUTCMonth()}-${new Date().getUTCDate()}`
//             console.log(new Date(dateString))
//             res.status(200).send('Teste realizado com sucesso').end()
//         } catch (error) {
//             res.status(errorCode).send({message: error.message}).end()
//         }
//     })


// app.listen(3003, () => {console.log(`Server running...`)})
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost ${address.port}...`)
    } else {
        console.log(`Failure upon starting server`)
    }
})