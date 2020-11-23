

export enum LOCATION {
    EUA = "EUA",
    BRAZIL = "BRAZIL"
}

export enum NACIONALITY {
    AMERICAN = "AMERICAN",
    BRAZILIAN = "BRAZILIAN"
}

export interface Casino {
    name: string,
    location: LOCATION
}

export interface CasinoUser {
    name: string,
    nacionality: NACIONALITY,
    age: number
}

export interface Result {
    brazilians: ResultItem,
    americans: ResultItem
}

export interface ResultItem {
    allowed: string[],
    unallowed: string[]
}


export const verifyAge = (casino: Casino, users: CasinoUser[]): Result => {
    const minimumAge: number = casino.location === LOCATION.EUA ? 21 : 18

    let result: Result = {brazilians: {allowed:[], unallowed:[]}, americans:{allowed:[], unallowed:[]}}
    // let result = undefined

    users.map(user => {
        if (user.nacionality === NACIONALITY.BRAZILIAN) {
            if (user.age < minimumAge) {
                result.brazilians.unallowed.push(user.name)
            } else {
                result.brazilians.allowed.push(user.name)
            }
        } else if (user.nacionality === NACIONALITY.AMERICAN) {
            if (user.age < minimumAge) {
                result.americans.unallowed.push(user.name)
            } else {
                result.americans.allowed.push(user.name)
            }
        }
    })

    return result
}


// const casino: Casino = {name:'Labamba', location: LOCATION.BRAZIL}
// const users: CasinoUser[] = [
//     {name: 'Raphael', nacionality: NACIONALITY.BRAZILIAN, age: 32},
//     {name: 'Fernanda', nacionality: NACIONALITY.BRAZILIAN, age: 30},
//     {name: 'Ricardo', nacionality: NACIONALITY.AMERICAN, age: 17},
//     {name: 'Rodrigo', nacionality: NACIONALITY.AMERICAN, age: 19},
//     {name: 'Melissa', nacionality: NACIONALITY.AMERICAN, age: 21},
// ]

// const users: CasinoUser[] = [
//     {name: 'Raphael', nacionality: NACIONALITY.BRAZILIAN, age: 32}
// ]

const casino: Casino = {name:'Labamba', location: LOCATION.EUA}
const users: CasinoUser[] = [
    {name: 'Roger', nacionality: NACIONALITY.AMERICAN, age: 21},
    {name: 'Joseph', nacionality: NACIONALITY.AMERICAN, age: 21},
    {name: 'Eduardo', nacionality: NACIONALITY.BRAZILIAN, age: 19},
    {name: 'Natalia', nacionality: NACIONALITY.BRAZILIAN, age: 19}
]

console.log(verifyAge(casino, users))
