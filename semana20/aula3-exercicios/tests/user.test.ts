import { userBusiness } from "../src/business/userBusiness"
import BaseDataBase from "../src/data/BaseDataBase"


describe('User tests', () => {
    


    test('Should return "User not found"', async() => {
        expect.assertions(2)
        try {
            const user = await userBusiness.getUserById('1')
            // console.log(user.name)
            expect(user.name).toBe('Julia')
        } catch (error) {
            console.log(error)
            expect(error.statusCode).toBe(404)
        }
    })

    afterAll(async () => {
        await BaseDataBase.destroyConnection()
    })
})
