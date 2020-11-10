## Exercício 1
**a)**
"rounds" (equivalente ao "cost") refere-se a quantidade de vezes que a senha será processada pelo "bcryptjs" para ser encriptada.

"salt" é uma função que gera uma string aleatória a ser combinada com a senha original e então encriptada, aumentando a segurança da informação.

 O valor recomendado para o "rounds" é o maior possível considerando-se o tempo desejado para que a encriptação seja executada no equipamento utilizado.

 Utilizei o valor "12", porque oferece um bom nível de segurança e por ser o padrão na maioria das libs.

 **b)**
 ```
 import * as bcrypt from 'bcryptjs'

export const generateHash = async(plainText: string): Promise<string> => {
    const rounds = Number(process.env.BCRYPT_COST)
    const salt = await bcrypt.genSalt(rounds)
    const result = await bcrypt.hash(plainText, salt)
    return result
}
 ```

 **c)**
 ```
 export const compare = async(plainText: string, cypherText: string): Promise<boolean> => {
    const result = await bcrypt.compare(plainText, cypherText)
    return result
}
 ```

 ------------------------------------

 ## Exercício 2
 **a)**
Devemos atualizar primeiro o cadastro, para que possamos comparar os dados armazenados no cadastros com os dados fornecidos no momento do login.

**b)**
```
import { Request, Response } from "express";
import { insertUser } from "../data/insertUser";
import { generateTOKEN } from "../service/authenticator";
import { generateHash } from "../service/crypt";
import { generateID } from "../service/IDgenerator";


export const postNewUser = async(req: Request, res: Response): Promise <void> => {
    try {
        let {email, password} = req.body
        if (!email || !password) {throw new Error(`Informe o email e a senha do novo usuário`)}
        if (!email.includes(`@`)) {throw new Error(`Email inválido!`)}
        if (password.length < 6) {throw new Error(`A senha deve conter no mínimo 6 caracteres`)}

        password = await generateHash(password)

        const id: string = generateID()
        
        const data = {id, email, password}

        const result = await insertUser(data)

        const token: string = generateTOKEN({id}) 

        res.status(200).send({message: `Usuário criado!`, token})
    } catch (error) {
        res.status(res.statusCode).send({message: `[ERROR]: ${error.sqlMessage || error.message}`})
    }
}
```

**c)**
```
import { compare } from "bcryptjs";
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

        const comparePassword = await compare(password, user.password)
        if (!comparePassword) {throw new Error(`Senha inválida!`)}

        const token = generateTOKEN({id: user.id})

        res.status(200).send(token)
    } catch (error) {
        res.status(res.statusCode).send({message: `[ERROR]: ${error.sqlMessage || error.message}`})
    }
}
```

**d)**
Não é necessário modificar esse endpoint pois ele faz a busca no banco de dados pelo token do usuário, que não foi afetado pela adicção da criptografia. 


 ------------------------------------
 
 ## Exercício 3
 **a)**
 ```
ALTER TABLE USERS
ADD role ENUM("NORMAL", "ADMIN") DEFAULT "NORMAL"
;
 ```

**b)** Feito!

**c)** Feito!

**d)** Feito!
 
------------------------------------

## Exercício 4

**a)** Feito!

------------------------------------

## Exercício 5

Endpoint
```
import { Request, Response } from "express";
import { sqlDeleteUser } from "../data/sqlDeleteUser";
import { getTokenData } from "../service/authenticator";


export const deleteUser = async(req: Request, res: Response): Promise<void> => {
    try {
        const token = req.headers.authorization as string
        const authData = getTokenData(token)
        
        if(authData.role !== "ADMIN") {throw new Error(`Apenas um usuário administrador pode acessar essa funcionalidade`)}
        
        const id = req.params.id
        if (!id) {throw new Error(`Informe o ID do usuário a ser removido`)}

        await sqlDeleteUser({id})

        res.status(200).send({message: `[SUCCESS]: Usuário removido com sucesso!`})
    } catch (error) {
        res.status(res.statusCode).send({message: `[ERROR]: ${error.sqlMessage || error.message}`})
    }
}
```

Função SQL
```
import { connection } from "../index"

export async function sqlDeleteUser (data: any) {
    const {id} = data
    const sqlRaw = `DELETE FROM USERS WHERE id = "${id}";`
    const result = await connection.raw(sqlRaw)
}
```

------------------------------------

## Exercício 6
```
import { Request, Response } from "express";
import { selectUserByID } from "../data/selectUserByID";
import { getTokenData } from "../service/authenticator";

export const getUserByID = async(req: Request, res: Response): Promise<void> => {
    try {
      // verifica se o solicitante está cadastrado no sistema
        const token = req.headers.authorization as string                        
        if (!token) {throw new Error(`Unauthorized (no token)`)}
        const userReqData = getTokenData(token)
        const idReq = userReqData.id
        const userReq = await selectUserByID({id: idReq})
        if (!userReq) {throw new Error(`Unauthorized (requester not registered)`)}

      // verifica a presença do 'id' na solicitação 
        const id = req.params.id
        if (!id) {throw new Error(`Informe o id do usuário`)}

      // verifica a existencia do usuário e retorna os dados desejados (id e email) em caso positivo
        const user = await selectUserByID({id})
        if (!user) {throw new Error(`Usuário não encontrado`)}
        const result = {id: user.id, email: user.email}

        res.status(200).send(result)
    } catch (error) {
        res.status(res.statusCode).send({message: `[ERROR]: ${error.sqlMessage || error.message}`})
    }
}
```
