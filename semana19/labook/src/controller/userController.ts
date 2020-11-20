import { Request, Response } from "express"
import { userBusiness } from "../business/userBusiness"


class UserController {
   public createUser = async (req: Request, res: Response) => {
      // console.log(`[userController]: [createUser]`)
      try {
         let message = "Success!"
         const { name, email, password } = req.body
         
         const user = {name, email, password}
         const token = await userBusiness.createUser(user)
         
         res.status(201).send({ message, token })
      } catch (error) {
         res.statusCode = 400
         let message = error.sqlMessage || error.message

         res.send({ message })
         // res.send({ message: 'TESTANDO' })
      }
   }

   public login = async (req: Request, res: Response) => {
      try {
         let message = "Success!"
         const { email, password } = req.body
         const userInfo = {email, password}
         const token = await userBusiness.login(userInfo)
         res.status(200).send({ message, token })
      } catch (error) {
         let message = error.sqlMessage || error.message
         res.statusCode = 400
         res.send({ message })
      }
   }
}

export const userController: UserController = new UserController()