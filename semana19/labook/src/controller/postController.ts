import { Request, Response } from "express"
import { postBusiness } from "../business/postBusiness"
import { postData } from "../data/postData"
import { Post } from "../model/post"
import { services } from "../services/services"
import { AuthenticationData } from "../types"


class PostController {
   createPost = async(req: Request, res: Response) => {
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

   getPostById = async(req: Request, res: Response) => {
      try {
         let message = "Success!"
   
         const id: string = req.params.id
         const token: string | undefined = req.headers.authorization
         // const post: Post = await postData.getPostById(id)

         // const queryResult: any = await connection("labook_posts")
         //    .select("*")
         //    .where({ id })
   
         // if (!queryResult[0]) {
         //    res.statusCode = 404
         //    message = "Post not found"
         //    throw new Error(message)
         // }
   
         const post: Post = await postBusiness.getPostById({token, id}) 
   
         res.status(200).send({ message, post })
   
      } catch (error) {
         let message = error.sqlMessage || error.message
         res.statusCode = 400
   
         res.send({ message })
      }
   }
}

export const postController: PostController = new PostController()
