import * as jwt from 'jsonwebtoken'
import { AuthenticationData } from './types'


export const generateTOKEN = (input: AuthenticationData) => {
    const token = jwt.sign(
        {id: input.id, role: input.role},
        process.env.JWT_KEY as string,
        {expiresIn: "2h"}
    )
    return token
} 



export function getTokenData (token: string) {
    const userData = jwt.verify(
        token,
        process.env.JWT_KEY as string
    ) as AuthenticationData
    return userData
}

