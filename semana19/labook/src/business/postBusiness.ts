import { postData } from "../data/postData"
import { Post } from "../model/post"
import { services } from "../services/services"
import { AuthenticationData } from "../types"

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJjMDJiN2MyLTQzYzEtNDU0OS04NTRmLTdhZGE5MWU0ZGZiYyIsImlhdCI6MTYwNTkwMDQ1NiwiZXhwIjoxNjA1OTA3NjU2fQ.HHpkL_U_C_O5gvqT1Aa3M8yWJeczeHvemkxBfvLhiBQ

class PostBusiness {
    createPost = async(data: any) => {
        try {
            const {photo, description, type, token} = data
            if (!token) {throw new Error(`Authorization token is requeired`)}
            if (!description) {throw new Error(`Post description is required`)}
            const tokenData: AuthenticationData = services.getTokenData(token)
            const authorId: string = tokenData.id

            const id = services.generateId()
            const createdAt = new Date()

            await postData.createPost(
                new Post(
                    id,
                    photo,
                    description,
                    type,
                    createdAt,
                    authorId
                )
            )
        } catch (error) {
            if (error.message === 'jwt malformed') {throw new Error(`Unauthorized`)}
            throw new Error(error.message)
        }
    }

    getPostById = async (data:any) => {
        try {
            const {token, id} = data

            if (!token) {throw new Error(`Authorization token is requeired`)}
            if (!id) {throw new Error(`Post Id is required`)}

            const tokenData: AuthenticationData = services.getTokenData(token)
            // const userId: string = tokenData.id
            
            const queryResult = await postData.getPostById(id)
    
            if (!queryResult) {
                // res.statusCode = 404
                // message = "Post not found"
                throw new Error("Post not found")
            }
    
            const post = new Post(
                queryResult.id,
                queryResult.photo,
                queryResult.description,
                queryResult.type,
                queryResult.created_at,
                queryResult.author_id,
            )
    
            return post
        } catch (error) {
            switch (error.message) {
                case 'jwt malformed': throw new Error(`Unauthorized`); break;
                case 'jwt expired': throw new Error(`Unauthorized. Login required`); break;
                default: throw new Error(error.message); break;
            }
        }
    }


    public getFeed = async(token: string | undefined): Promise<any> => {
        try {
            if (!token) {throw new Error(`Token is required`)}
            const tokenData: AuthenticationData = services.getTokenData(token)
            const id: string = tokenData.id

            const feed = await postData.getFeed(id)
            if(!feed) {throw new Error(`Ops! No feed`)}

            return feed
        } catch (error) {
            throw new Error(error.message)
        }
    }


 }

export const postBusiness: PostBusiness = new PostBusiness()