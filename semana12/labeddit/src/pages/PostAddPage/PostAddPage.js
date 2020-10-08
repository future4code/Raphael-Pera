import React from 'react'
import { PageContainer} from './styled'
import { PostAddForm } from './PostAddForm'

export const PostAddPage = () => {
    return(
        <PageContainer>
            <h2>Escreva seu comentário</h2>
            <PostAddForm/>
        </PageContainer>
        
    )
}