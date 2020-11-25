import { Post } from "../model/post";
import { BaseDataBase } from "./BaseDataBase";


class PostData extends BaseDataBase {
    public createPost = async(post: Post) => {
        try {
            await PostData.connection("labook_posts")
            .insert({
               id: post.getId(),
               photo: post.getPhoto(),
               description: post.getDescription(),
               type: post.getType(),
               created_at: post.getCreatedAt(),
               author_id: post.getAuthorId()
            })
        } catch (error) {
            throw new Error(error.message || error.sqlMessage)
        }
    }

    public getPostById = async(id: string) => {
        try {
            const queryResult: any = await PostData.connection("labook_posts")
            .select("*")
            .where({ id })

            return queryResult[0]
        } catch (error) {
            throw new Error(error.message || error.sqlMessage)
        }
    }


    public getFeed = async(id:string) => {
        try {
            const sqlRaw = `
                SELECT lu.name, description, created_at, type
                FROM labook_posts lp
                JOIN labook_friendships lf
                ON lf.friend_id = lp.author_id AND lf.user_id = "${id}"
                JOIN labook_users lu
                ON lu.id = lf.friend_id 
                ORDER BY lp.created_at DESC
                ;
            `

            const queryResult = await PostData.connection.raw(sqlRaw)

            return queryResult[0]
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }


    public getFeedByType = async(data: any) => {
        try {
            const {id, type} = data

            const sqlRaw = `
                SELECT lu.name, description, created_at, type
                FROM labook_posts lp
                JOIN labook_users lu
                ON lp.type = "${type}" AND lu.id = lp.author_id AND NOT lp.author_id ="${id}"
                ORDER BY lp.created_at DESC
                ;
            `

            const queryResult = await PostData.connection.raw(sqlRaw)

            return queryResult[0]
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public deletePostByDescription = async(description: string) => {
        try {
            const sqlRaw = `
                DELETE FROM labook_posts
                WHERE description = "${description}"
                ;
            `
            await PostData.connection.raw(sqlRaw)
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

}

export const postData: PostData = new PostData()
