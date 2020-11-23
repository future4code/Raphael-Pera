## EXERCÍCIO 1
**a)**
```
interface User {
    name: string,
    balance: number
}
```

**b)**
```
const performPurchase = (
    user: User, value: number
): User | undefined => {
    if (user.balance >= value) {
        return {
            ...user,
            balance: user.balance - value
        }
    }
    return undefined
}
```

-------------------------------

## EXERCICIO 2
**a), b) e c)**
```
import {performPurchase} from '../src/purchase'

describe('Purchase', ()=>{
  // a)
    test('Balance less than purchase value', () => {
        const result = performPurchase(
            {name: 'Raphael', balance: 300},
            500
        )

        expect(result).toEqual(undefined)
    })

  // b)
    test('Balance equal to purchase value', () => {
        const result = performPurchase(
            {name: 'Raphael', balance: 300},
            300
        )

        expect(result).toEqual({name: 'Raphael', balance: 0})
    })
    
  // c)
    test('Balance greater than purchase value', () => {
        const result = performPurchase(
            {name: 'Raphael', balance: 300},
            200
        )

        expect(result).toEqual({name: 'Raphael', balance: 100})
    })
})
```

