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