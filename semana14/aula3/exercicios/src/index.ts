import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { countries, country } from './countries'


const app: Express = express()
app.use(express.json())
app.use(cors())

//  ENDPOINT-1
    app.get('/countries/all', (req: Request, res: Response) => {
        console.log('/countries/all')
        const result = countries.map(country => 
            ({id: country.id, name: country.name})
        )
        res.status(200).send(result).end()
    })


//  ENDPOINT-2
    // app.get('/countries/:id', (req: Request, res: Response) => {
    //     console.log('/countries/:id')
    //     let errorCode: number = 400
    //     try {
    //         const result: country | undefined = countries.find(
    //             country => country.id === Number(req.params.id)
    //         )

    //         if (!result) {
    //             errorCode = 404
    //             throw new Error('País não encontrado!')
    //         }

    //         res.status(200).send(result).end()
    //     } catch (error) {
    //         res.status(errorCode).end()
    //     }
    // })


    app.get('/countries/teste', (req: Request, res: Response) => {
        console.log('teste')
    })

//  ENDPOINT-3
    app.get('/countries/search', (req: Request, res: Response) => {
        console.log('search')
        let errorCode: number = 400
        const qName: string | undefined = String(req.query.name)
        const qCapital: string | undefined = String(req.query.capital)
        const qContinent: string | undefined = String(req.query.continent)
        console.log(qName, qCapital, qContinent)
        try {
            if (!qName && !qCapital && !qContinent) {
                console.log('/countries/search: ', 'Erro todos')
                errorCode = 404
                throw new Error()
            }
    
            const result = countries.filter(country => {
                // (!qName || country.name.includes(qName)) &&
                // (!qCapital || country.capital.includes(qCapital)) &&
                // (!qContinent || country.continent.includes(qContinent))
    
                // (qName === undefined || country.name.includes(qName)) &&
                // (qCapital === undefined || country.capital.includes(qCapital)) &&
                // (qContinent === undefined || country.continent.includes(qContinent))
    
                // (!qName || country.name.includes(qName))
                // (!qCapital || country.capital.includes(qCapital))
    
                return !qCapital
            }
                
                
            )

            // console.log('result: ', result)
            res.status(200).send(result).end()
        } catch (error) {
            res.status(errorCode).end()
        }
        
    })

app.listen(3003, ()=>{
    console.log('Servidor pronto!...')
})