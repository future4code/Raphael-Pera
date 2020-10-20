    type pokemon = {
        name: string,
    types: string,
        healthPoints: number
    }

    const pokemon1: pokemon = {
    name: "Charmander",
    types: "Fire",
    healthPoints: 28
    }

    const pokemon2: pokemon = {
    name: "Bulbasaur",
    types: "Grass/Poison",
    healthPoints: 31
    }

    const pokemon3: pokemon = {
    name: "Squirtle",
    types: "Water",
    healthPoints: 35
    }

//  a)  Além das correções necessárias (já realizadas), chamaria o comando 'tsc ./src/ex4.ts' pelo terminal
//      na pasta do projeto.

//  b)  O comando acima deve levar em consideração o endereço relativo do arquivo a ser transpilado. No caso,
//      com o arquivo dentro da pasta 'src' é necessário utilizar o endereço './src.ex4.ts' já que o comando está
//      sendo aplicado na pasta do projeto.

//  c)  Sim.
//      Para isso é necessário aplicar o comando 'tsc --init' na pasta do projeto, descomentar dentro do
//      arquivo 'tsconfig.json'as configurações 'outDir' e 'rootDir' e definir os endereços relativos para as
//      pastas de origem (arquivos .ts) e destino (arquivos .js).
//      Feito isso, utiliza-se o comando 'tsc' (via terminal) na pasta do projeto para que todos os arquivos
//      '.ts' (armazenados no endereço definido em 'rootDir ) sejam transpilados para arquivos '.js' e armazenados
//      na pasta de destino (definida em 'outDcir')

//  d)  O arquivo gerado pelo comando 'tsc --init' contém alguns parâmetros comentados que não estão comentados
//      no arquivo criado pelos slides:
//       - "sourceMap": true,
//       - "outDir": "./build",
//       - "rootDir": "./src",
//       - "removeComments": true,
//       - "noImplicitAny": true,
//      Além disso, alguns parâmetros foram modificados no arquivo gerado pelos slides, em especial o 'target'
//      que teve seu valor alterado de 'es5' para 'es6'