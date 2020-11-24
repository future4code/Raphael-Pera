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

-------------------------------

## EXERCICIO 3
**a)** Sem dúvidas


**b)**
```
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
```

**c)** O mais difícil foi inicializar a variável "result", typada como "Result", pois precisei criar um objeto inicial vazio


-------------------------------

## EXERCICIO 4
**a)**
```
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
```

**b)**
```
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
```

**c)**
```
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
```

**d)**
```
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
```

-------------------------------

## EXERCICIO 5
**a)**
```
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
```

**b)**
```
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
```

**c)**
```
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
```

**d)**
```
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
```

-------------------------------

## EXERCICIO 6

**a)**
```
    test('Create post (success)', async() => {
        try {
            const id: string = `id_teste_${new Date().getTime()}`
            const newPost: Post = new Post(
                id,
                "photo_teste",
                "description_test",
                POST_TYPES.NORMAL,
                new Date(),
                "1a0b238f-829f-458f-8284-9408fdde9aac"
            )

            await postData.createPost(newPost)

            const result: any = await postData.getPostById(id)
            expect(result.description).toEqual("description_test")
        } catch (error) {
            expect(error).toEqual(undefined)
        }
    })

    afterAll(async () => {
        await BaseDataBase.destroyConnection()
    })
```

**b)**
```
    afterAll(async () => {
        await postData.deletePostByDescription("description_test")
        await BaseDataBase.destroyConnection()
    })
```

Precisamos encerrar a conexão com o banco de dados e deletar entradas feitas durante os testes
