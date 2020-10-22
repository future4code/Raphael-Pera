//  a)
//      const minhaString: string = 7   
//      *** o typescript não permite atribuir um número a uma constante do tipo 'string'


//  b)
        const meuNumero: number | string = 7
//      *** podemos fazer com que essa constante aceite strings utilizando o 'union type' ('|') e atribuindo
//          também o tipo 'string'

//  c)
        type person = {nome: string, idade: number, corFavorita: string}
        const raphael: person = {
            nome: 'Raphael',
            idade: 23,
            corFavorita: 'Fucsia',
        }

//  d)
        const eduardo: person = {
            nome: 'Eduardo',
            idade: 29,
            corFavorita: 'Amarelo',
        }

        const rodrigo: person = {
            nome: 'Rodrigo',
            idade: 33,
            corFavorita: 'Azul',
        }

        const daniel: person = {
            nome: 'Daniel',
            idade: 19,
            corFavorita: 'Vermelho',
        }