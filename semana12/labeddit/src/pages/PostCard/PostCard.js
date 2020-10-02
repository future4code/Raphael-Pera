import React, { useEffect } from 'react'
import {
    CardContainer,
    CardSideBar,
    CardContent,
    CardHeader,
    CardText,
    CardFooter,
    HeaderMsg,
    HeaderUserName,
    HeaderCreatedAt,
    TextTitle,
    Text,
    SideBarUp,
    SideBarDown,
    SideBarCount
} from './styled'
import { dateFormat } from '../../hooks/TimeStamp'

export const PostCard = (props) => {

    const defineWidth = () => {
        function updateSize() {
            const cardContentWidth = (document.getElementById('card-container').clientWidth - 70) + 'px'
            document.getElementById('text-container').style.width = cardContentWidth
            document.getElementById('title-container').style.width = cardContentWidth

        }
        window.addEventListener('resize', updateSize);
        updateSize()
    }

    useEffect(()=>{ defineWidth() },[])

    return(
        <CardContainer id={`card-container`}>
            <CardSideBar>
                <SideBarUp>up</SideBarUp>
                <SideBarCount>{props.post.votesCount}</SideBarCount>
                <SideBarDown>down</SideBarDown>
            </CardSideBar>
            <CardContent onClick={props.onClick}>
                <CardHeader>
                    <HeaderMsg> Postado por </HeaderMsg>
                    <HeaderUserName> {`${props.post.username}`} </HeaderUserName>
                    <HeaderCreatedAt> {dateFormat(props.post.createdAt)} </HeaderCreatedAt>
                </CardHeader>
                <CardText>
                    <TextTitle id={`title-container`}> {props.post.title} </TextTitle>
                    <Text id={`text-container`}> {props.post.text} </Text>
                </CardText>
                <CardFooter>
                    {`${props.post.commentsCount} comentários`}
                </CardFooter>
            </CardContent>
        </CardContainer>
    )
}