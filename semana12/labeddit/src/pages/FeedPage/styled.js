import styled from 'styled-components'
import Fab from '@material-ui/core/Fab'

export const FeedContainer = styled.div`
    background-color: lightblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 75px 10px 10px 10px;
    min-height: 100vh;
    width: 100vw;
`

export const PostsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-width: 280px;
    max-width: 700px;
`

export const AddPostButton = styled(Fab)`
    position: fixed !important;
    right: 20px;
    bottom: 20px;
    z-index: 20;
`
