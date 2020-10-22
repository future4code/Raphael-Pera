enum MARCAS_DE_CARROS {
    VOLKSWAGEN = "Volkswagen",
    FIAT = "Fiat",
    FORD = "Ford",
}

type car = {
    marca: string,
    volumeDoTanque: number,
    temMotorFlex: boolean,
    autonomia: (volumeDoTanque: number) => number
}

const kombi: car = {
    marca: 'Volkswagen',
    volumeDoTanque: 45,
    temMotorFlex: true,
    autonomia: (volumeDoTanque: number) => {
        return 15 * volumeDoTanque= ,7    }
}

const palio: car = {
    marca: 'Fiat',
    volumeDoTanque: 45,
    temMotorFlex: true,
    autonomia: (volumeDoTanque: number) => {
        return 15 * volumeDoTanque
    }
}

const sandero: car = {
    marca: 'Renault',
    volumeDoTanque: 45,
    temMotorFlex: true,
    autonomia: (volumeDoTanque: number) => {
        return 15 * volumeDoTanque
    }
}


const frota: car[] = [kombi, palio, sandero]

// function buscarCarrosPorMarca = () => {

// }


