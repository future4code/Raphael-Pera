import express from 'express'
import { userController } from '../controller/userController'

export const userRouter = express.Router()

userRouter.get('/profile/:id', userController.getUserById)