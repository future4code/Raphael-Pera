import React, { useEffect } from 'react'
import styled from 'styled-components'
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
    SideBarCount,
    IconContainer,
} from './styled'
import { dateFormat } from '../../hooks/TimeStamp'
import ThumbUpRoundIcon from '@material-ui/icons/ThumbUpRounded'
import ThumbDownAltRoundedIcon from '@material-ui/icons/ThumbDownAltRounded'

export const PostCard = (props) => {

    const defineWidth = () => {
        function updateSize() {
            const cardContentWidth = (document.getElementById(`card-container-${props.post.id}`).clientWidth - 90) + 'px'
            document.getElementById(`text-container-${props.post.id}`).style.width = cardContentWidth
            document.getElementById(`title-container-${props.post.id}`).style.width = cardContentWidth
        }
        window.addEventListener('resize', updateSize);
        updateSize()
    }

    useEffect(()=>{ defineWidth() },[])

    return(
        <CardContainer id={`card-container-${props.post.id}`}>
            <CardSideBar>
                <IconContainer> <SideBarUp style={{ fontSize: 26 }} /> </IconContainer>
                <SideBarCount>{props.post.votesCount}</SideBarCount>
                <IconContainer> <SideBarDown style={{ fontSize: 26 }} /> </IconContainer>
            </CardSideBar>
            <CardContent onClick={props.onClick}>
                <CardHeader>
                    <HeaderMsg> Postado por </HeaderMsg>
                    <HeaderUserName> {`${props.post.username}`} </HeaderUserName>
                    <HeaderCreatedAt> {dateFormat(props.post.createdAt)} </HeaderCreatedAt>
                </CardHeader>
                <CardText>
                    <TextTitle id={`title-container-${props.post.id}`}> {props.post.title} </TextTitle>
                    <Text id={`text-container-${props.post.id}`}> {props.post.text} </Text>
                </CardText>
                <CardFooter>
                    {`${props.post.commentsCount} comentários`}
                </CardFooter>
            </CardContent>
        </CardContainer>
    )
}