import { Request, Response } from "express"
import { userBusiness } from "../business/userBusiness"
import { userData } from "../data/userData"
import { connection } from "../index"
import { services } from "../services/services"
import {User} from '../types'


export const userController = {
   createUser: async (req: Request, res: Response) => {
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
        }
   },


    login: async (req: Request, res: Response) => {
         try {
            let message = "Success!"
     
            const { email, password } = req.body

            const userInfo = {email, password}
            

         //   if (!email || !password) {
         //      res.statusCode = 406
         //      message = '"email" and "password" must be provided'
         //      throw new Error(message)
         //   }
     
         //   const queryResult: any = await connection("labook_users")
         //      .select("*")
         //      .where({ email })
     
         //   if (!queryResult[0]) {
         //      res.statusCode = 401
         //      message = "Invalid credentials"
         //      throw new Error(message)
         //   }
     
         //   const user: User = {
         //      id: queryResult[0].id,
         //      name: queryResult[0].name,
         //      email: queryResult[0].email,
         //      password: queryResult[0].password
         //   }
     
         //   const passwordIsCorrect: boolean = await services.compare(password, user.password)
     
         //   if (!passwordIsCorrect) {
         //      res.statusCode = 401
         //      message = "Invalid credentials"
         //      throw new Error(message)
         //   }
     
         //   const token: string = services.generateToken({
         //      id: user.id
         //   })
            
            const token = await userBusiness.login(userInfo)
            
            res.status(200).send({ message, token })
     
         } catch (error) {
            let message = error.sqlMessage || error.message
            res.statusCode = 400
     
            res.send({ message })
        }
     },



}