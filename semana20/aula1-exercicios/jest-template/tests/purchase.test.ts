import {performPurchase} from '../src/purchase'

describe('Purchase', ()=>{
    test('Balance less than purchase value', () => {
        const result = performPurchase(
            {name: 'Raphael', balance: 300},
            500
        )

        expect(result).toEqual(undefined)
    })

    test('Balance equal to purchase value', () => {
        const result = performPurchase(
            {name: 'Raphael', balance: 300},
            300
        )

        expect(result).toEqual({name: 'Raphael', balance: 0})
    })

    test('Balance greater than purchase value', () => {
        const result = performPurchase(
            {name: 'Raphael', balance: 300},
            200
        )

        expect(result).toEqual({name: 'Raphael', balance: 100})
    })
})