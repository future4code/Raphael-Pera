const operation = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

const calculator = (operation, num1, num2) => {
    if (isNaN(num1) || isNaN(num2)) {
        return "Informe o nome da operação e dois números."
    } else {
        switch (operation) {
            case "add": return num1 + num2; break;
            case "sub": return num1 - num2; break;
            case "mult": return num1 * num2; break;
            case "div": return num1 / num2; break;
            default: return "Operação inválida! Informe um dos seguintes nomes: 'add', 'sub', 'mult' ou 'div'"; break;
        }
    }
}


console.log("\x1b[44m%s\x1b[0m", calculator(operation, num1, num2))


