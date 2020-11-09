import * as jwt from 'jsonwebtoken'


export type AuthenticationData = {id: string}

export const generateTOKEN = (input: AuthenticationData) => {
    const token = jwt.sign(
        {id: input.id},
        process.env.JWT_KEY as string,
        {expiresIn: "2h"}
    )
    return token
} 



export function getTokenData (token: string): AuthenticationData {
    return jwt.verify(
        token,
        process.env.JWT_KEY as string
    ) as AuthenticationData
}

