import { Casino, CasinoUser, LOCATION, NACIONALITY, Result, verifyAge } from "../src/casino"


describe('Casino', () => {
    test('Brazilian user allowed to enter a brazilian casino', () => {
        const users: CasinoUser[] = [
            {name: 'Raphael', nacionality: NACIONALITY.BRAZILIAN, age: 32}
        ]

        const casino: Casino = {name:'Labamba', location: LOCATION.BRAZIL}

        const result: Result = verifyAge(casino, users)

        expect(result).toEqual(
            {
                brazilians: { allowed: [ 'Raphael' ], unallowed: [] },
                americans: { allowed: [], unallowed: [] }
            }
        )
    })

    test('American user allowed to enter a brazilian casino', () => {
        const users: CasinoUser[] = [
            {name: 'Phillip', nacionality: NACIONALITY.AMERICAN, age: 19}
        ]

        const casino: Casino = {name:'Cassinópolis', location: LOCATION.BRAZIL}

        const result: Result = verifyAge(casino, users)

        expect(result).toEqual(
            {
                brazilians: { allowed: [], unallowed: [] },
                americans: { allowed: ['Phillip'], unallowed: [] }
            }
        )
    })

    test('2 american(19) and 2 brazilian(19) users entering a american casino', () => {
        const users: CasinoUser[] = [
            {name: 'Roger', nacionality: NACIONALITY.AMERICAN, age: 19},
            {name: 'Joseph', nacionality: NACIONALITY.AMERICAN, age: 19},
            {name: 'Eduardo', nacionality: NACIONALITY.BRAZILIAN, age: 19},
            {name: 'Natalia', nacionality: NACIONALITY.BRAZILIAN, age: 19}
        ]

        const casino: Casino = {name:'GimmeYourMoney', location: LOCATION.EUA}

        const result: Result = verifyAge(casino, users)

        expect(result).toEqual(
            {
                brazilians: { allowed: [], unallowed: [ 'Eduardo', 'Natalia' ] },
                americans: { allowed: [], unallowed: [ 'Roger', 'Joseph' ] }
            }
        )
    })


    test('2 american(21) and 2 brazilian(19) users entering a american casino', () => {
        const users: CasinoUser[] = [
            {name: 'Roger', nacionality: NACIONALITY.AMERICAN, age: 21},
            {name: 'Joseph', nacionality: NACIONALITY.AMERICAN, age: 21},
            {name: 'Eduardo', nacionality: NACIONALITY.BRAZILIAN, age: 19},
            {name: 'Natalia', nacionality: NACIONALITY.BRAZILIAN, age: 19}
        ]

        const casino: Casino = {name:'GimmeYourMoney', location: LOCATION.EUA}

        const result: Result = verifyAge(casino, users)

        expect(result).toEqual(
            {
                brazilians: { allowed: [], unallowed: [ 'Eduardo', 'Natalia' ] },
                americans: { allowed: ['Roger', 'Joseph'], unallowed: [] }
            }
        )
    })


})