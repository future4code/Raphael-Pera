import { CustomError } from "../errors/CustomError";
import { BaseDataBase } from "./BaseDataBase";



export class UserData extends BaseDataBase {
    public getUserById = async(id:string):Promise<any> => {
        try {
            const sqlRaw = `
                SELECT * FROM users_s20a3
                WHERE id = "${id}"
                ;
            `

            const queryResult = await BaseDataBase.connection.raw(sqlRaw)
            // console.log(`[UserData]: [getUserById]: queryResult[0] =`, queryResult[0])
            return queryResult[0][0]
        } catch (error) {
            throw new CustomError(400, error.sqlMessage || error.message)
        }
    }
}

export const userData:UserData = new UserData()