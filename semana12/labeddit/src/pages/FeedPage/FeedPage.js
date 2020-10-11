import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { baseUrl } from '../../constants/url'
import { useProtectPage } from '../../hooks/useProtectPage'
import { goToPostPage, goToPostPageAdd } from '../../routes/Cordinator'
import { PostCard } from '../PostCard/PostCard'
import { PostCardTeste3 } from '../PostCard/PostCardTeste3'
import { AddPostButton, FeedContainer, PostsContainer } from './styled'
import { useParams } from 'react-router-dom'
import { PostPage } from '../PostPage/PostPage'
import { Add } from '@material-ui/icons'

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
                        // console.log('FeedPage > posts', response.data.posts)
                        setPosts(response.data.posts)
                    } else {
                        // console.log('FeedPage > details', response.data.post)
                        setPostDetails(response.data.post)
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    const contentRender = () => {
        // console.log('contentRender')
        if (!id) {
            if(posts.length > 0) {
                let novaArray=[]

                novaArray = posts.filter((post, index) => {
                    // return (<PostCard key={index} post={post} onClick={()=>goToPostPage(history, post.id)} />)
                    return typeof(post.title) === 'string'
                }).map((post, index) => {
                        return (<PostCard key={index} post={post} onClick={()=>goToPostPage(history, post.id)} />)
                })

                // console.log('novaArray: ', novaArray)
                return(novaArray)

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
        <>
            <FeedContainer>
                {contentRender()}
                {/* <PostCardTeste3/> */}
                {!id && <AddPostButton onClick={()=>goToPostPageAdd(history)} > <Add/> </AddPostButton>}
            </FeedContainer>
        </>
    )
}
