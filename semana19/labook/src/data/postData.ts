import { Post } from "../model/post";
import { BaseDataBase } from "./BaseDataBase";


class PostData extends BaseDataBase {
    createPost = async(post: Post) => {
        try {
            await this.connection("labook_posts")
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

    getPostById = async(id: string) => {
        try {
            const queryResult: any = await this.connection("labook_posts")
            .select("*")
            .where({ id })

            return queryResult[0]
        } catch (error) {
            throw new Error(error.message || error.sqlMessage)
        }
    }
}

export const postData: PostData = new PostData()
