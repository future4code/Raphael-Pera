import express from 'express'
import { postController } from '../controller/postController'

export const postRouter = express.Router()

postRouter.post('/create', postController.createPost)
postRouter.get('/feed', postController.getFeed)
postRouter.get('/feed/:type', postController.getFeedByType)
postRouter.get('/:id', postController.getPostById)

