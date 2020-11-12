import * as bcrypt from 'bcryptjs'

// função que recebe um texto (senha) e retorna um "hash" ou senha criptografada
export const generateHash = async(plainText: string): Promise<string> => {
    const rounds = Number(process.env.BCRYPT_COST)
    const salt = await bcrypt.genSalt(rounds)
    const result = await bcrypt.hash(plainText, salt)
    return result
}
