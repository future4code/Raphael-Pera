import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { countries, country } from './countries'


const app: Express = express()
app.use(express.json())
app.use(cors())

//  ENDPOINT-1
    app.get('/countries/all', (req: Request, res: Response) => {
        const result = countries.map(country => 
            ({id: country.id, name: country.name})
        )
        res.status(200).send(result).end()
    })

//  ENDPOINT-3
    app.get('/countries/search', (req: Request, res: Response) => {
        let errorCode: number = 400
        const qName: string | undefined = req.query.name ? String(req.query.name) : req.query.name 
        const qCapital: string | undefined = req.query.capital ? String(req.query.capital) : req.query.capital
        const qContinent: string | undefined = req.query.continent ? String(req.query.continent) : req.query.continent

        try {
            if (!qName && !qCapital && !qContinent) {
                errorCode = 404
                throw new Error('Nenhum parâmetro de pesquisa enviado')
            }
            
            const result = countries.filter(country => 
                (!qName || country.name.includes(qName)) &&
                (!qCapital || country.capital.includes(qCapital)) &&
                (!qContinent || country.continent.includes(qContinent))
            )

            res.status(200).send(result).end()
        } catch (error) {
            res.status(errorCode).send(error.message).end()
        }
        
    })

//  ENDPOINT-2
    app.get('/countries/:id', (req: Request, res: Response) => {
        let errorCode: number = 400
        try {
            const result: country | undefined = countries.find(
                country => country.id === Number(req.params.id)
            )

            if (!result) {
                errorCode = 404
                throw new Error('País não encontrado!')
            }

            res.status(200).send(result).end()
        } catch (error) {
            res.status(errorCode).send(error.message).end()
        }
    })


//  ENDPOINT-4
    app.put('/countries/edit/:id', (req: Request, res: Response) => {
        let errorCode: number = 400
        const eName: string | undefined = req.body.name ? String(req.body.name) : req.body.name
        const eCapital: string | undefined = req.body.capital ? String(req.body.capital) : req.body.capital
        const eId: number = Number(req.params.id)

        try{
            if (eId < 0) {
                // errorCode = 404
                throw new Error('Nenhum ID de país foi informado')
            } else if (!eName && !eCapital) {
                // errorCode = 400
                throw new Error('Nenhum parâmetro de alteração foi informado ( {name: "", capital: ""} )')
            }  else if (!countries.find(country => country.id === eId)) {
                errorCode = 404
                throw new Error(`País com id=${eId} não encontrado`)
            }

            let countryIndex: number = countries.findIndex(country => country.id === eId)
            countries[countryIndex] = {...countries[countryIndex], name: String(eName), capital: String(eCapital)}
            res.status(200).send(countries[countryIndex]).end()

        } catch (error) {
            res.status(errorCode).send(error.message).end()
        }

    })


app.listen(3003, ()=>{
    console.log('Servidor pronto!...')
})