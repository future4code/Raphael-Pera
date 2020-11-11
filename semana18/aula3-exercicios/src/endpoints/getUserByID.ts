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
