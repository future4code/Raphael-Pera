import * as bcrypt from 'bcryptjs'

export const generateHash = async(plainText: string): Promise<string> => {
    const rounds = Number(process.env.BCRYPT_COST)
    const salt = await bcrypt.genSalt(rounds)
    const result = await bcrypt.hash(plainText, salt)
    return result
}

export const compare = async(plainText: string, cypherText: string): Promise<boolean> => {
    const result = await bcrypt.compare(plainText, cypherText)
    return result
}


