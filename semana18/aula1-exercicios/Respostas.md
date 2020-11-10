## Exercício 1
**a)**
Sim, concordo que seja mehor usar strings para representar IDs do que números, pois possibilita a criação de IDs padronizadas e "menos obvias", aumentando a segurança da aplicação.

**b)**
```
import { v4 } from 'uuid'


export function generateID (): string {
    return v4()
}
```
(função criada no arquivo "src > service > IDgenerator.ts" )

--------------------------

## Exercicio 2
**a)**
A constante "connection" configura a conexão com o banco de dados e permite nossa interação com o mesmo.

A constante "createUser" é uma função assìncrona que insere na tabela "User" um novo registro contendo os dados de "id", "email" e "password" referentes ao novo usuário.

**b)**
```
CREATE TABLE USERS(
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
)
;
```

**c)**
```
import { connection } from "../index"
import { generateID } from "../service/IDgenerator"


export async function insertUser (data: any) {
    const {email, password} = data
    const id = generateID()

    const sqlRaw = `
        INSERT INTO USERS (id, email, password)
        VALUES (
            "${id}",
            "${email}",
            "${password}"
        )
        ;
    `
    
    await connection.raw(sqlRaw)
}
```

--------------------------

## Exercicio 3
**a)**
A linha "as string" define que o elemento "process.env.JWT_KEY" é uma string e garante que a "secret key" esteja no formato exigido pela função.

**b)**
```
import * as jwt from 'jsonwebtoken'

export const generateTOKEN = (input: AuthenticationData) => {
    const token = jwt.sign(
        {id: input.id},
        process.env.JWT_KEY as string,
        {expiresIn: "2h"}
    )
    return token
} 

export type AuthenticationData = {id: string}
```

--------------------------

## Exercicio 4
**a), b) e c)**
endpoint criado e alterado
```
import { Request, Response } from "express";
import { insertUser } from "../data/insertUser";
import { generateTOKEN } from "../service/authenticator";
import { generateID } from "../service/IDgenerator";


export const postNewUser = async(req: Request, res: Response): Promise <void> => {
    try {
        const {email, password} = req.body
        if (!email || !password) {throw new Error(`Informe o email e a senha do novo usuário`)}
        if (!email.includes(`@`)) {throw new Error(`Email inválido!`)}
        if (password.length < 6) {throw new Error(`A senha deve conter no mínimo 6 caracteres`)}

        const id: string = generateID()

        const data = {id, email, password}

        const result = await insertUser(data)

        const token: string = generateTOKEN({id}) 

        console.log({message: `Usuário criado!`, token})

        res.status(200).send({message: `Usuário criado!`, token})
    } catch (error) {
        res.status(res.statusCode).send({message: `[ERROR]: ${error.sqlMessage || error.message}`})
    }
}
```

--------

## Exercicio 5
**a)**
```
import { connection } from "../index"

export async function selectUserByEmail (data: any) {
    const {email} = data
    const sqlRaw = `SELECT * FROM USERS WHERE email = "${email}";`
    const user = await connection.raw(sqlRaw)
    return user
}
```

------------

## Exercicio 6
**a) e b)**
endpoint criado e alterado
```
import { Request, Response } from "express";
import { selectUserByEmail } from "../data/selectUserByEmail";
import { generateTOKEN } from "../service/authenticator";


export const postLoginUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const {email, password} = req.body
        if (!email || !password) {throw new Error(`Informe o email e a senha do usuário`)}
        if (!email.includes('@')) {throw new Error(`Email inválido`)}

        const data = {email}
        const user = await selectUserByEmail(data)

        if (user.password !== password) {throw new Error(`Senha inválida!`)}

        const token = generateTOKEN({id: user.id})

        res.status(200).send(token)
    } catch (error) {
        res.status(res.statusCode).send({message: `[ERROR]: ${error.sqlMessage || error.message}`})
    }
}
```

-------

## Exercicio 7
**a)**
Define que o valor que será atribuido à constante "payload" pode ser de qualquer formato.

**b)**
```
export function getTokenData (token: string): AuthenticationData {
    return jwt.verify(
        token,
        process.env.JWT_KEY as string
    ) as AuthenticationData
}
```

-------

## Exercicio 8
**a)**
```
import { connection } from "../index"

export async function selectUserByID (data: any) {
    const {id} = data
    const sqlRaw = `SELECT * FROM USERS WHERE id = "${id}";`
    const user = await connection.raw(sqlRaw)
    return user[0][0]
}
```

**b)**
```
import { Request, Response } from "express";
import { selectUserByID } from "../data/selectUserByID";
import { getTokenData } from "../service/authenticator";

export const getUserByToken = async(req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string
        const id = getTokenData(token)

        const user = await selectUserByID({id})

        const data = {id: user.id, email: user.email}

        res.status(200).send(data)
    } catch (error) {
        res.status(res.statusCode).send({message: `[ERROR]: ${error.sqlMessage || error.message}`})
    }
}
```
