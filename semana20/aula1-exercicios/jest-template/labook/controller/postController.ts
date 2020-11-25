import { Request, Response } from "express"
import { postBusiness } from "../business/postBusiness"
import { Post } from "../model/post"


class PostController {
   public createPost = async(req: Request, res: Response) => {
      try {
         let message = "Post created successfully!"

         const { photo, description, type } = req.body
         const token: string = req.headers.authorization as string

         const data = {
            photo, description, type, token
         }

         await postBusiness.createPost(data)

         res.status(201).send({ message })

      } catch (error) {
         let message = error.sqlMessage || error.message
         res.statusCode = 400

         res.send({ message })
      }
   }


   public getPostById = async(req: Request, res: Response) => {
      try {
         let message = "Success!"
   
         const id: string = req.params.id
         const token: string | undefined = req.headers.authorization
   
         const post: Post = await postBusiness.getPostById({token, id}) 
   
         res.status(200).send({ message, post })
   
      } catch (error) {
         let message = error.sqlMessage || error.message
         res.statusCode = 400
   
         res.send({ message })
      }
   }


   public getFeed = async(req: Request, res: Response) => {
      try {
         const token: string | undefined = req.headers.authorization
         const feed = await postBusiness.getFeed(token)
         res.status(200).send(feed)
      } catch (error) {
         res.status(res.statusCode).send({message: `[ERROR]: ${error.message}`})
      }
   }

   public getFeedByType = async(req: Request, res:Response) => {
      try {
         const type: string = req.params.type
         const token: string | undefined = req.headers.authorization
         const feed = await postBusiness.getFeedByType({type, token})
         res.status(200).send(feed)
      } catch (error) {
         res.status(res.statusCode).send({message: `[ERROR]: ${error.message}`})
      }
   }
}

export const postController: PostController = new PostController()
