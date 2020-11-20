import express, { Request, Response } from 'express'
import { userController } from '../controller/userController'

export const userRouter = express.Router()

userRouter.post('/signup', userController.createUser)
userRouter.post('/login', userController.login)
userRouter.post('/addFriend/:id', userController.addFriend)
userRouter.delete('/deleteFriend/:id', userController.deleteFriend)
