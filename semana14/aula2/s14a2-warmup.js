// 1)   O código não funciona da maneira esperada porque os números informados pelo "prompt" são definidos
//      como 'string' e não como 'number'.

//2)    Para corrigir esse erro eu aplicaria a função 'Number()' para transformar as strings em numbers

//3)    Com o Typescript esse erro poderia ser evitado pré-definindo o tipo da variável que receberá o valor
//      do prompt

//4)

const firstNumber: number = prompt('Digite um número')
const secondNumber: number = prompt('Digite outro número')
const sum = firstNumber + secondNumber

alert(`A soma dos números é: ${sum}`)