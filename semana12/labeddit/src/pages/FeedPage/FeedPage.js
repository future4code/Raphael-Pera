import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { baseUrl } from '../../constants/url'
import { useProtectPage } from '../../hooks/useProtectPage'
import { goToPostPage } from '../../routes/Cordinator'
import { PostCardTeste2 } from '../PostCard/PostCardTeste2'
import { PostCardTeste3 } from '../PostCard/PostCardTeste3'
import { FeedContainer, PostsContainer } from './styled'
import { useParams } from 'react-router-dom'
import { PostPage } from '../PostPage/PostPage'

export const FeedPage = () => {
    useProtectPage()
    const [posts, setPosts] = useState([])
    const [postDetails, setPostDetails] = useState({})
    const history = useHistory()
    const {id} = useParams()
    // const endpoint = id || '/posts'
    // console.log(endpoint)

    const getData = () => {
        console.log('requesting data')
        const token = localStorage.getItem('token')
        const endpoint = id ? `/posts/${id}` : '/posts'
        if(token){
            axios.get(`${baseUrl}${endpoint}`, {headers: {Authorization: token}})
                .then(response => {
                    // console.log(response.data.posts)
                    // setPosts(response.data.posts)
                    if(!id){
                        console.log('FeedPage > posts', response.data.posts)
                        setPosts(response.data.posts)
                    } else {
                        console.log('FeedPage > details', response.data.post)
                        setPostDetails(response.data.post)
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    const contentRender = () => {
        if (!id) {
            if(posts.length > 0) {
                return( posts.map((post, index) => {
                    // return <PostCardTeste key={post.id} post={post}/>
                    return <PostCardTeste2 key={post.id} post={post} onClick={()=>goToPostPage(history, post.id)} />
                }) )
            } else {
                // Substituir o 'Nenhum post' por uma página de loading
                return 'Nenhum post'
            }
        } else {
            return (<PostPage postDetails={postDetails}></PostPage>)
        }

    }   

    useEffect(()=>{
        getData()
    },[id])

    return(
        <FeedContainer>
            {/* <button onClick={getPosts} >GetPosts </button> */}
            {/* {posts.length > 0 && ` posts carregados (${posts.length})`} */}
            <PostsContainer>
                {contentRender()}
                {/* <PostCardTeste3></PostCardTeste3> */}
            </PostsContainer>
        </FeedContainer>
    )
}
