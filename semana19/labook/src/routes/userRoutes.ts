import express from 'express'
import { userController } from '../controller/userController'

export const userRouter = express.Router()

userRouter.post('/signup', userController.createUser)
userRouter.post('/login', userController.login)
