import { AuthenticationData } from "./types";
import * as jwt from 'jsonwebtoken'


export const generateToken = (input: AuthenticationData): string => {
    const token = jwt.sign(
        {id: input.id, role: input.role},
        process.env.JWT_KEY as string,
        {expiresIn: "10h"}
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
