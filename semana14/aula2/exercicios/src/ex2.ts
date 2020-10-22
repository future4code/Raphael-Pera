//  a)  a função recebe um array de números como parâmetro e retorna um objeto contendo o maior e
//      o menor número do array, assim como a média dos números.

//  a) e b)
        function obterEstatisticas(numeros: number[]):{maior: number, menor: number, media: number} {

            const numerosOrdenados: number[] = numeros.sort(
                (a, b) => a - b
            )

            let soma:number = 0

            for (let num of numeros) {
                soma += num
            }

            const estatisticas: {maior: number, menor: number, media: number} = {
                maior: numerosOrdenados[numeros.length - 1],
                menor: numerosOrdenados[0],
                media: soma / numeros.length
            }

            return estatisticas
        }

//  c)
        type amostraDeDados = {
            numeros: number[],
            obterEstatisticas: (numeros: number[]) => {}
        }