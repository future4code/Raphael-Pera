// a) Para acessar os parâmetros passados pela linha de comando atribuimos o valor de "process.argv[x]"
//      a uma constante nomeada, onde "x" deve ser maior que 1.
//      Ex: const argumento = process.argv[2]


// b) e c)
const name = process.argv[2]
const age = process.argv[3]

const msgGenerator = (name, age) => {
    return isNaN(Number(age)) ?
    'Informe um nome e um número!' :
    `Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${Number(age) + 7}`
}

console.log("\x1b[32m", msgGenerator(name, age))