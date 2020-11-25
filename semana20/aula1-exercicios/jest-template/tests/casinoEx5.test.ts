import { Casino, CasinoUser, LOCATION, NACIONALITY, Result, verifyAge } from "../src/casino"


describe('CasinoEx5', () => {
    test('result.brazilian.allowed.length > 0 and < 2', () => {
        const users: CasinoUser[] = [
            {name: 'Felipe', nacionality: NACIONALITY.BRAZILIAN, age: 26}
        ]

        const casino: Casino = {name:'MuitaCana', location: LOCATION.BRAZIL}

        const result: Result = verifyAge(casino, users)

        expect(result).toEqual(
            {
                brazilians: { allowed: [ 'Felipe' ], unallowed: [] },
                americans: { allowed: [], unallowed: [] }
            }
        )

        expect(result.brazilians.allowed.length).toBeGreaterThan(0)
        expect(result.brazilians.allowed.length).toBeLessThan(2)
    })


    test('result.american.unallowed.length = 0', () => {
        const users: CasinoUser[] = [
            {name: 'James', nacionality: NACIONALITY.AMERICAN, age: 23}
        ]

        const casino: Casino = {name:'SeuDimDim', location: LOCATION.BRAZIL}

        const result: Result = verifyAge(casino, users)

        expect(result).toEqual(
            {
                brazilians: { allowed: [], unallowed: [] },
                americans: { allowed: ['James'], unallowed: [] }
            }
        )

        expect(result.americans.unallowed.length).toEqual(0)
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

        expect(result.americans.unallowed).toContain('Roger')
        expect(result.brazilians.unallowed).toContain('Eduardo')
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

        expect(result.brazilians.unallowed.length).toBeGreaterThan(1)
        expect(result.americans.unallowed.length).toBeLessThan(1)
        expect(result.americans.allowed.length).toEqual(2)
    })

})