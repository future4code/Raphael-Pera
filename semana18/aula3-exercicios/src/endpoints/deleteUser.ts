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
