import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../constants/url'
import { useProtectPage } from '../../hooks/useProtectPage'
import { PostCardTeste2 } from '../PostCard/PostCardTeste2'
import { PostCardTeste3 } from '../PostCard/PostCardTeste3'
import { FeedContainer, PostsContainer } from './styled'

export const FeedPage = () => {
    useProtectPage()
    const [posts, setPosts] = useState([])

    const getPosts = () => {
        console.log('requesting data')
        const token = localStorage.getItem('token')
        // console.log(token)
        if(token){
            axios.get(`${baseUrl}/posts`, {headers: {Authorization: token}})
                .then(response => {
                    // console.log(response.data.posts)
                    setPosts(response.data.posts)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    const postsRender = () => {
        if(posts.length > 0) {
            return( posts.map((post, index) => {
                // return <PostCardTeste key={post.id} post={post}/>
                return <PostCardTeste2 key={post.id} index={index+1} post={post}/>
            }) )
        } else {
            // Substituir o 'Nenhum post' por uma página de loading
            return 'Nenhum post'
        }
    }   

    useEffect(()=>{
        getPosts()
    },[])

    return(
        <FeedContainer>
            {/* <button onClick={getPosts} >GetPosts </button> */}
            {/* {posts.length > 0 && ` posts carregados (${posts.length})`} */}
            <PostsContainer>
                {/* {postsRender()} */}
                <PostCardTeste3></PostCardTeste3>
            </PostsContainer>
        </FeedContainer>
    )
}
