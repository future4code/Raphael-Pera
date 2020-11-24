import { BaseDataBase } from "../labook/data/BaseDataBase"
import { postData } from "../labook/data/postData"
import { Post, POST_TYPES } from "../labook/model/post"



describe('Labook', () => {
    test('Create post (success)', async() => {
        try {
            const id: string = `id_teste_${new Date().getTime()}`
            const newPost: Post = new Post(
                id,
                "photo_teste",
                "description_test",
                POST_TYPES.NORMAL,
                new Date(),
                "1a0b238f-829f-458f-8284-9408fdde9aac"
            )

            await postData.createPost(newPost)

            const result: any = await postData.getPostById(id)
            expect(result.description).toEqual("description_test")
        } catch (error) {
            expect(error).toEqual(undefined)
        }
    })

    afterAll(async () => {
        await postData.deletePostByDescription("description_test")
        await BaseDataBase.destroyConnection()
    })



})

